<?php

namespace JuiceBox\PostType;

use JuiceBox\PostType\CustomPostType;

class villas extends CustomPostType
{
    protected static $postType = 'villas';

    protected static $postName = 'villas';

    protected static $singularName = 'villas';

    protected static $pluralName = 'villas';
    protected static $public = true;
    protected static $hasArchive = true;
    protected static $supports = array(
        'title',
        'thumbnail',
        'excerpt',
        'revisions'
    );
}
