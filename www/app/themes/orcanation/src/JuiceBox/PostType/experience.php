<?php

namespace JuiceBox\PostType;

use JuiceBox\PostType\CustomPostType;

class experience extends CustomPostType
{
    protected static $postType = 'experience';

    protected static $postName = 'experience';

    protected static $singularName = 'experience';

    protected static $pluralName = 'experience';
    protected static $public = false;
    protected static $hasArchive = false;
    protected static $supports = array(
        'title',
        'thumbnail',
        'editor',
        'revisions',
    );
}
