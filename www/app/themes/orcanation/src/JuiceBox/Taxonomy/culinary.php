<?php

namespace JuiceBox\Taxonomy;

use JuiceBox\Taxonomy\CustomTaxonomy;

class culinary extends CustomTaxonomy
{
    protected static $taxonomyName = 'culinary_cat';

    protected static $singularName = 'culinary Category';

    protected static $pluralName = 'culinary Categories';

    protected static $objectType = array(
        'culinary'
    );
}
