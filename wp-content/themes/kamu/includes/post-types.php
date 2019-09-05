<?php
// Register post types

// Register Custom Post Type Widget
function create_widget_cpt() {

	$labels = array(
		'name' => _x( 'Widgets', 'Post Type General Name', 'textdomain' ),
		'singular_name' => _x( 'Widget', 'Post Type Singular Name', 'textdomain' ),
		'menu_name' => _x( 'Widgets', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar' => _x( 'Widget', 'Add New on Toolbar', 'textdomain' ),
		'archives' => __( 'Widget Archives', 'textdomain' ),
		'attributes' => __( 'Widget Attributes', 'textdomain' ),
		'parent_item_colon' => __( 'Parent Widget:', 'textdomain' ),
		'all_items' => __( 'All Widgets', 'textdomain' ),
		'add_new_item' => __( 'Add New Widget', 'textdomain' ),
		'add_new' => __( 'Add New', 'textdomain' ),
		'new_item' => __( 'New Widget', 'textdomain' ),
		'edit_item' => __( 'Edit Widget', 'textdomain' ),
		'update_item' => __( 'Update Widget', 'textdomain' ),
		'view_item' => __( 'View Widget', 'textdomain' ),
		'view_items' => __( 'View Widgets', 'textdomain' ),
		'search_items' => __( 'Search Widget', 'textdomain' ),
		'not_found' => __( 'Not found', 'textdomain' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'textdomain' ),
		'featured_image' => __( 'Featured Image', 'textdomain' ),
		'set_featured_image' => __( 'Set featured image', 'textdomain' ),
		'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
		'use_featured_image' => __( 'Use as featured image', 'textdomain' ),
		'insert_into_item' => __( 'Insert into Widget', 'textdomain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Widget', 'textdomain' ),
		'items_list' => __( 'Widgets list', 'textdomain' ),
		'items_list_navigation' => __( 'Widgets list navigation', 'textdomain' ),
		'filter_items_list' => __( 'Filter Widgets list', 'textdomain' ),
	);
	$args = array(
		'label' => __( 'Widget', 'textdomain' ),
		'description' => __( 'Global site widgets', 'textdomain' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-megaphone',
		'supports' => array('title'),
		'taxonomies' => array(),
		'public' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => false,
		'show_in_nav_menus' => false,
		'can_export' => true,
		'has_archive' => false,
		'hierarchical' => false,
		'exclude_from_search' => true,
		'show_in_rest' => true,
		'publicly_queryable' => false,
		'capability_type' => 'post',
	);
	register_post_type( 'widget', $args );

}

create_widget_cpt();

// Register Custom Post Type Activiteit
function create_activiteit_cpt() {

	$labels = array(
		'name' => _x( 'Activiteiten', 'Post Type General Name', 'textdomain' ),
		'singular_name' => _x( 'Activiteit', 'Post Type Singular Name', 'textdomain' ),
		'menu_name' => _x( 'Activiteiten', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar' => _x( 'Activiteit', 'Add New on Toolbar', 'textdomain' ),
		'archives' => __( 'Activiteit Archives', 'textdomain' ),
		'attributes' => __( 'Activiteit Attributes', 'textdomain' ),
		'parent_item_colon' => __( 'Parent Activiteit:', 'textdomain' ),
		'all_items' => __( 'All Activiteiten', 'textdomain' ),
		'add_new_item' => __( 'Add New Activiteit', 'textdomain' ),
		'add_new' => __( 'Add New', 'textdomain' ),
		'new_item' => __( 'New Activiteit', 'textdomain' ),
		'edit_item' => __( 'Edit Activiteit', 'textdomain' ),
		'update_item' => __( 'Update Activiteit', 'textdomain' ),
		'view_item' => __( 'View Activiteit', 'textdomain' ),
		'view_items' => __( 'View Activiteiten', 'textdomain' ),
		'search_items' => __( 'Search Activiteit', 'textdomain' ),
		'not_found' => __( 'Not found', 'textdomain' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'textdomain' ),
		'featured_image' => __( 'Featured Image', 'textdomain' ),
		'set_featured_image' => __( 'Set featured image', 'textdomain' ),
		'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
		'use_featured_image' => __( 'Use as featured image', 'textdomain' ),
		'insert_into_item' => __( 'Insert into Activiteit', 'textdomain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Activiteit', 'textdomain' ),
		'items_list' => __( 'Activiteiten list', 'textdomain' ),
		'items_list_navigation' => __( 'Activiteiten list navigation', 'textdomain' ),
		'filter_items_list' => __( 'Filter Activiteiten list', 'textdomain' ),
	);
	$args = array(
		'label' => __( 'Activiteit', 'textdomain' ),
		'description' => __( '', 'textdomain' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-admin-post',
		'supports' => array('title'),
		'taxonomies' => array(),
		'public' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => true,
		'hierarchical' => false,
		'exclude_from_search' => false,
		'show_in_rest' => true,
		'publicly_queryable' => true,
		'capability_type' => 'post',
		'rewrite' => false,
	);
	register_post_type( 'activiteit', $args );

}

create_activiteit_cpt();