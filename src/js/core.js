/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2021, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

// Local Storage
const Data = {
  enable: typeof Storage !== 'undefined' && typeof localStorage !== 'undefined' && typeof JSON !== 'undefined',
  set (key, val) { return this.enable && localStorage.setItem(key, JSON.stringify({ val: val })), this },
  get (key) { return this.enable && (key = localStorage.getItem(key)) ? JSON.parse(key).val : null }
}

// Element
const El = {
  splitLength: 3,
  split: (line, regex) => {
    let match = line.match(regex)
    if (match) return regex = line.indexOf(match[0]), match = match.shift(), { header: line.substring(0, regex).trim(), tokens: line.substring(regex + match.length).trim(), match }
    else return { header: line.trim(), tokens: '', match: '' }
  },
  toVue: (key, val) => key && val ? { key: key.replace(/^\*/, 'v-').replace(/^@/, 'v-on:'), val: val.replace(/"/g, "'") } : null,
  render (str) {
    const lines = str.split("\n").filter(t => t.trim().length).map(line => {
      const space = line.search(/\S|$/)
      const splitLine = this.split(line, /\s+=\>\s+/gm)
      const tmpHeader = this.split(splitLine.header, /\.|#/gm)
      const tokens = (splitLine.tokens + (tmpHeader.match + tmpHeader.tokens).replace(/#/gm, ' '.repeat(this.splitLength) + '#').replace(/\./gm, ' '.repeat(this.splitLength) + '.')).split(new RegExp('\\s{' + this.splitLength + ',}', 'gm')).map(attr => {
        if (attr === '*else')
          return { key: 'v-else', val: null }

        attr[0] === '#' && !attr.includes('=') && (attr = 'id=' + attr.substr(1))
        attr[0] === '.' && !attr.includes('=') && (attr = 'class=' + attr.substr(1).replace('.', ' '))
        attr.includes(':slot:') && (attr = attr.replace(/^:slot:/, 'v-slot:'))
        if (!attr.includes('=') && attr.includes('v-slot:')) return { key: attr, val: null }

        const i = attr.indexOf('=')
        attr = [attr.substr(0, i).trim(), attr.substr(i + 1).trim()].filter(t => t.length)
        return this.toVue(attr.shift(), attr.shift())
      }).filter(unit => unit)

      const attrs = {}
      for (let token of tokens)
        attrs[token.key] = token.key == 'class' && attrs[token.key] ? attrs[token.key] + ' ' + token.val : token.val

      const attr = ['']
      for (let key in attrs)
        attr.push(key + (attrs[key] !== null ? '="' + attrs[key] + '"' : ''))

      return {
        header: tmpHeader.header,
        space: space,
        tokens: attr.join(' '),
        children: [],
        toString () { return this.header[0] !== '|'
          ? 'area,base,br,col,command,embed,hr,img,input,keygen,link,meta,param,source,track,wbr'.split(/,/).indexOf(this.header) != -1
            ? '<' + this.header + this.tokens + ' />'
            : '<' + this.header + this.tokens + '>' + this.children.join('') + '</' + this.header + '>'
          : this.header.substr(1).trim()
        }
      }
    })

    const els = []
    const tmp = {}

    for (let line of lines) {
      const parent = tmp[line.space - 2]
      parent
        ? line.space > parent.space && parent.children.push(line)
        : els.push(line)
      tmp[line.space] = line
    }

    return els.join('')
  }
}

// Load
const Load = {
  mount (option) { return document.body.appendChild(new Vue(option).$mount().$el) },
  init (option) { return typeof option == 'function' ? option() : $(_ => this.mount(option)) }
}
