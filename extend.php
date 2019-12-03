<?php

namespace Irony\Code\Insert;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
];
