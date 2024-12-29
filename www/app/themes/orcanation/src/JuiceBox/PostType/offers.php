<?php

namespace JuiceBox\PostType;

use JuiceBox\PostType\CustomPostType;

class offers extends CustomPostType
{
    protected static $postType = 'offers';

    protected static $postName = 'offers';

    protected static $singularName = 'offers';

    protected static $pluralName = 'offers';
    protected static $supports = array(
        'title',
        'thumbnail',
        'excerpt',
        'revisions'
    );
}
