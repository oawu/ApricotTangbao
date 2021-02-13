<?php

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2021, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

return [
  \HTML\Script("window.ENV = '" . ENVIRONMENT . "';")->type('text/javascript'),
  \HTML\Script("window.EXT = '" . (ENVIRONMENT == 'Development' ? '.php' : '.html') . "';")->type('text/javascript'),
];
