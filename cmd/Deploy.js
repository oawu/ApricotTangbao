/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2021, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

const { Deploy } = require('@oawu/core')
const { main: Queue } = require('@oawu/queue')

Queue
  .enqueue(Deploy.Start)
  .enqueue(Deploy.Build)
  .enqueue(Deploy.Check)
  .enqueue(Deploy.Finish)
