<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 * 
 * Template Name: Actor
 *
 * @link    https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Shapely
 */



;





wp_enqueue_script( 'index.js', get_stylesheet_directory_uri() . '/index.js', array( 'jquery' ) );

get_header(); ?>
<?php $layout_class = shapely_get_layout_class(); ?>

		
		
		
			<div id="filmFinder">
					<input type="text" id="term" class="textInput" placeholder="Find that film!"></input>
					<ul id="suggestedTitles"></ul>
					<input type="submit" id="search"></input>

					<div id="poster" class="hide"></div>
			</div>
		
			<div class="empty-div">
				
			</div>
		

<?php
get_footer();
