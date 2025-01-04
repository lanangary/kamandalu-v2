<?php

namespace JuiceBox\Modules\VillaListing;

use JuiceBox\Core\Module as JBModule;
use Timber\Timber;
class Module extends JBModule
{
    public function processModule()
    {
        $post_type = $this->module['post_type'];

        $module_featured = $post_type == 'villa' ? $this->module['villa'] : $this->module['offer'];

        // Extract IDs using array_map
        $featured_id = array_map(function($featured) {
            return $featured->ID;
        }, $module_featured);

        // Query for featured team members
        $argsfeatured = [
            'post_type' => $post_type,
            'posts_per_page' => -1,
            'post__in' => $featured_id,
            'orderby' => 'post__in',
        ];
        $this->module['select_item'] = Timber::get_posts($argsfeatured);

    }
}
