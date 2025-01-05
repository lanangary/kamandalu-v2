<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

use Timber\Timber;

$context = Timber::get_context();
$post = Timber::query_post(false, "\\JuiceBox\\Core\\Post");

$context['post'] = $post;
if($post->post_type == 'culinary') {
    $args = array(
        'post_type' => 'culinary',
        'posts_per_page' => 3,
        'post__not_in' => array($post->ID),
        'orderby' => 'rand'
    );

    $related_post = Timber::get_posts($args);

    $context['related_post'] = $related_post;



} 

Timber::render(["single--{$post->ID}.twig", "single--{$post->post_type}.twig", "single.twig"], $context);
