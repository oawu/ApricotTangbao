/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2021, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

module.exports = {
  github: {
    type: 'github',

    account: null,
    repository: null,
    // branch: 'gh-pages',
    // message: '🚀 部署！',
  },

  s3: {
    type: 's3',
    prefix: '',
    ignoreDirs: [], // 忽略的目錄
    putOptions: {
      ACL: 'public-read',
      // CacheControl: 'max-age=5', // Cache 時間
    }
  }
}
