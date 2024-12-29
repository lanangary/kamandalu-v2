<?php

namespace JuiceBox\PostType;

use JuiceBox\PostType\CustomPostType;

class spa extends CustomPostType
{
    protected static $postType = 'spa';

    protected static $postName = 'spa';

    protected static $singularName = 'spa';

    protected static $pluralName = 'spa';
    protected static $public = true;
    protected static $hasArchive = true;
    protected static $supports = array(
        'title',
        'thumbnail',
        'excerpt',
        'revisions'
    );
}
