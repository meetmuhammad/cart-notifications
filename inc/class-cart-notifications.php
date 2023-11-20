<?php
/**
 * Cart Notifications Class
 *
 * Handles the functionality of cart notifications in the WordPress site.
 */
class Cart_Notifications {
    /**
     * Singleton instance of the class.
     *
     * @var Cart_Notifications|null
     */
    private static $instance = null;

    /**
     * Returns an instance of this class. Singleton pattern.
     *
     * @return Cart_Notifications
     */
    public static function instance() {
        if ( null === self::$instance ) {
            self::$instance = new self();
            self::$instance->init_hooks();
        }

        return self::$instance;
    }


    /**
     * Initializes WordPress hooks.
     */
    private function init_hooks() {
        add_action( 'init', [ $this, 'init' ] );
        add_action( 'admin_menu', [ $this, 'add_admin_menu' ] );
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_admin_scripts' ] );
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_front_scripts' ] );

        add_action( 'wp_ajax_nopriv_get_product_details', [$this, 'add_to_cart_ajax'] );
        add_action( 'wp_ajax_get_product_details', [$this, 'add_to_cart_ajax'] );
    }

    /**
     * Initializes the class functionalities.
     */
    public function init() {
        // Register block types, settings, etc.
        $this->register_settings();
    }

    /**
     * Adds the settings page to the admin menu.
     */
    public function add_admin_menu() {
        add_options_page(
            __( 'Cart Notifications', 'cart-notifications' ),
            __( 'Cart Notifications', 'cart-notifications' ),
            'manage_options',
            'cart_notifications_plugin_settings',
            [ $this, 'render_settings_page' ]
        );
    }

    /**
     * Registers settings for the plugin.
     */
    private function register_settings() {
        register_setting(
            'cart_notifications_plugin_settings',
            'cart_notifications_plugin_layout',
            [
                'default'      => '',
                'show_in_rest' => true,
                'type'         => 'string',
            ]
        );

        register_setting(
            'cart_notifications_plugin_settings',
            'cart_notifications_plugin_position',
            [
                'default'      => '',
                'show_in_rest' => true,
                'type'         => 'string',
            ]
        );

        register_setting(
            'cart_notifications_plugin_settings',
            'cart_notifications_plugin_slider',
            [
                'default'      => '',
                'show_in_rest' => true,
                'type'         => 'number',
            ]
        );

        register_setting(
            'cart_notifications_plugin_settings',
            'cart_notifications_plugin_display',
            [
                'default'      => '',
                'show_in_rest' => [
                    'schema' => [
                        'type'  => 'array',
                        'items' => [
                            'type' => 'string'
                        ],
                    ],
                ],
                'type' => 'array',
            ]
        );
    }

    /**
     * Renders the settings page.
     */
    public function render_settings_page() {
        ?>
        <div id="cart-notifications-settings"></div>
        <?php
    }

    /**
     * Enqueues admin scripts and styles.
     */
    public function enqueue_admin_scripts() {
        $dir = CART_NOTIFICATIONS_PLUGIN_DIR;

        $script_asset_path = "$dir/build/admin.asset.php";
        if ( ! file_exists( $script_asset_path ) ) {
            throw new Error(
                'You need to run `npm start` or `npm run build` for the "Cart Notifications" block first.'
            );
        }
        $admin_js     = 'build/admin.js';
        $script_asset = require( $script_asset_path );
        wp_enqueue_script(
            'cart_notifications-plugin-admin-editor',
            CART_NOTIFICATIONS_PLUGIN_URL . $admin_js,
            $script_asset['dependencies'],
            $script_asset['version']
        );
        wp_set_script_translations( 'cart_notifications-plugin-block-editor', 'cart-notifications' );

        // Localize script with paths to images
        wp_localize_script( 'cart_notifications-plugin-admin-editor', 'cartNotificationsData', array(
            'imagesUrl' => CART_NOTIFICATIONS_PLUGIN_URL . 'assets/images/',
        ));

        $admin_css = 'build/admin.css';
        wp_enqueue_style(
            'cart_notifications-plugin-admin',
            CART_NOTIFICATIONS_PLUGIN_URL . $admin_css,
            ['wp-components'],
            filemtime( "$dir/$admin_css" )
        );
    }

    /**
     * Enqueues front-end scripts and styles.
     */
    public function enqueue_front_scripts() {
        $dir = CART_NOTIFICATIONS_PLUGIN_DIR;

        // Enqueue the cart-notification.js script
        $front_js = 'build/cart-notification.js';
        // Check if the built file exists
        if (file_exists("$dir/$front_js")) {
            wp_enqueue_script(
                'cart_notifications-plugin-front-script',
                CART_NOTIFICATIONS_PLUGIN_URL . $front_js,
                array('jquery'), 
                filemtime("$dir/$front_js"),
                true
            );

            // Localize the script if you need to pass data from PHP to JS
            wp_localize_script('cart_notifications-plugin-front-script', 'cartNotificationsData', array(
                'imagesUrl' => CART_NOTIFICATIONS_PLUGIN_URL . 'assets/images/',
                'ajaxurl' => admin_url('admin-ajax.php'),
                'displaySettings' => get_option('cart_notifications_plugin_display')

            ));
        }

        $front_css = 'build/cart-notification.css';
        if (file_exists("$dir/$front_css")) {
            wp_enqueue_style(
                'cart_notifications-plugin-front-style',
                CART_NOTIFICATIONS_PLUGIN_URL . $front_css,
                array(), 
                filemtime("$dir/$front_css")
            );
        }
    }

    /**
     * AJAX handler for adding to cart.
     */
    public function add_to_cart_ajax() {
        $product_id = isset($_POST['product_id']) ? intval($_POST['product_id']) : 0;

        // If product_id is not provided, fetch the last item from the cart
        if (!$product_id && function_exists('WC')) {
            $cart_items = WC()->cart->get_cart_contents();
            $last_item = end($cart_items);
            $product_id = $last_item ? $last_item['product_id'] : 0;
        }

        $product = wc_get_product($product_id);

        if (!$product) {
            wp_send_json_error('Product not found');
            return;
        }

        $product_image_url  = wp_get_attachment_url($product->get_image_id());
        $product_title      = $product->get_title();
        $product_price      = $product->get_price_html();
        $cart_url           = wc_get_cart_url();


        $layout             = get_option('cart_notifications_plugin_layout');
        $position_option    = get_option('cart_notifications_plugin_position');
        $timeout            = apply_filters('cart_notifications_timeout', get_option('cart_notifications_plugin_slider')) * 1000;

        $layout2            = ($layout == 'layout2' ? 'pops-layout-2' : '');
        $bottom             = ($position_option == 'bottom' ? 'bottom' : '');


        $html = '<div class="cart-notifications-pops '.$layout2.' '.$bottom.'" data-time="'.$timeout.'">
                    <button class="close-pops">Close</button>
                    <h3>Added to cart</h3>
                    <div class="cart-notifications-pops-iner">
                        <div class="cart-notifications-item-img">
                            <img src="' . esc_url($product_image_url) . '" alt="' . esc_attr($product_title) . '">
                        </div>
                        <div class="cart-notifications-item-caption">
                            <h4><a href="' . esc_url(get_permalink($product_id)) . '">' . esc_html($product_title) . '</a></h4>
                            <p><b>Price:</b> ' . $product_price . '</p>
                        </div>
                    </div>
                    <a href="' . esc_url($cart_url) . '" class="pop-btn">View Cart</a>
                </div>';


        wp_send_json_success(array('html' => $html));

        die;
    }
}
