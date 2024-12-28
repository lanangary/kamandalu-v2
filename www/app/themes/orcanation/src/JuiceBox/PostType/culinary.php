<?php

namespace JuiceBox\PostType;

use JuiceBox\PostType\CustomPostType;

class culinary extends CustomPostType
{
    protected static $postType = 'culinary';

    protected static $postName = 'culinary';

    protected static $singularName = 'culinary';

    protected static $pluralName = 'culinary';
    protected static $public = true;
    protected static $hasArchive = true;
    protected static $supports = array(
        'title',
        'thumbnail',
        'excerpt',
        'revisions'
    );
}
