<?php
/**
 * Plugin Name:       Cart Notifications
 * Description:       Plugin to display the notification for products adding to cart.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Ammar
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cart-notifications
 *
 * @package           cart-notifications
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Define plugin constants
define( 'CART_NOTIFICATIONS_VERSION', '1.0.0' );
define( 'CART_NOTIFICATIONS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'CART_NOTIFICATIONS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Include the main plugin class and other necessary files
require_once CART_NOTIFICATIONS_PLUGIN_DIR . 'inc/class-cart-notifications.php';

// Initialize the plugin
Cart_Notifications::instance();
