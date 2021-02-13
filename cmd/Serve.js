/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2021, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

const { Serve } = require('@oawu/core')
const { main: Queue } = require('@oawu/queue')

Queue
  .enqueue(Serve.Start)
  .enqueue(Serve.Check)
  .enqueue(Serve.Compile)
  .enqueue(Serve.Watch)
  .enqueue(Serve.Server)
  .enqueue(Serve.Finish)
