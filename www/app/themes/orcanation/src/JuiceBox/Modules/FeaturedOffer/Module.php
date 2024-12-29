<?php

namespace JuiceBox\Modules\FeaturedOffer;

use JuiceBox\Core\Module as JBModule;
use Timber\Timber;

class Module extends JBModule
{
    public function processModule()
    {
        $module_featured = $this->module['post_type'];

        // Extract IDs using array_map
        $featured_id = array_map(function($featured) {
            return $featured->ID;
        }, $module_featured);

        // Query for featured team members
        $argsfeatured = [
            'post_type' => ['villas','culinary','spa'],
            'posts_per_page' => -1,
            'post__in' => $featured_id,
            'orderby' => 'post__in',
        ];
        $this->module['featured_item'] = Timber::get_posts($argsfeatured);

    }
}
