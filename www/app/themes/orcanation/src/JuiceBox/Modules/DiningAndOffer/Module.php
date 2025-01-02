<?php

namespace JuiceBox\Modules\DiningAndOffer;

use JuiceBox\Core\Module as JBModule;
use Timber\Timber;
class Module extends JBModule
{

    public function processModule()
    {
        $module_featured = $this->module['post_type'];


        // Query for featured team members
        $argsfeatured = [
            'post_type' => $module_featured,
            'posts_per_page' => -1,
            'post_status' => 'publish',
        ];
        $this->module['archive'] = Timber::get_posts($argsfeatured);
        $this->module['filter'] = Timber::get_terms('culinary_cat');

    }
}
