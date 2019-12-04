<?php

namespace Irony\Code\Insert;

use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;

class CodeInsertSettings
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    protected $prefix = 'irony.code.insert.';

    protected $keys = ['modes'];

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(Document $document)
    {
        foreach ($this->keys as $key) {
            $document->payload[$this->prefix . $key] = $this->settings->get($this->prefix . $key);
        }
    }
}