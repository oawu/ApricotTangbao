/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2021, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

module.exports = {
  entry: 'src',

  dest: 'dist',
  
  minify: true,
  
  autoOpenFolder: true,

  php: {
    enable: true,
    maxBuffer: 1024 * 1024,
    env: 'Production',
    baseURL: null,
  },

  jsCover: [ // JS minify 時外加的轉譯
    '@babel/preset-env',
    ['minify', { builtIns: false }]
  ],

  ignoreDirs: [], // 忽略的目錄

  exts: [ // 允許的副檔名
    '.php', '.html', '.txt', '.css', '.js', '.eot', '.svg', '.ttf', '.woff', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.xml', '.json'
  ]
}
