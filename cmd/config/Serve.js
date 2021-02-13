/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2021, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

module.exports = {
  entry: 'src',
  
  php: {
    enable: true,
    maxBuffer: 1024 * 1024,
    env: 'Development',
    baseURL: null,
  },

  autoOpenBrowser: true, // 啟動自動開網頁
  
  dir: { // 目錄
    icon: 'icon', // 圖示
    scss: 'scss', // scss
    css: 'css',   // css
    img: 'img',   // 圖片
    js: 'js',     // js
    html: '' // html
  },

  watch: { // Live reload
    formats: ['.php', '.html', '.css', '.js'],
    ignoreDirs: ['icon'], // 不監聽的目錄
  },

  server: {
    domain: '127.0.0.1',

    port: {
      min: 8000,
      max: 8999,
      default: 8000,
    },

    ssl: { // 相對於 cmd/config/ssl/ 內路徑或絕對路徑
      key: 'server.key',
      cert: 'server.crt',
    },

    utf8Exts: ['.html', '.css', '.js', '.json', '.text'], // 採用 utf8 編碼的副檔名
  }
}
