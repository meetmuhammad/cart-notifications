import './cart-notification.scss';

jQuery(document).ready(function ($) {
	function shouldDisplayNotification() {
		var displaySettings = cartNotificationsData.displaySettings || [];

		if (displaySettings.includes('all_pages')) {
			return true;
		}
		if (
			displaySettings.includes('shop_archive') &&
			$('body').hasClass('woocommerce-shop')
		) {
			return true;
		}
		if (
			displaySettings.includes('shop_archive_categories') &&
			$('body').hasClass('tax-product_cat')
		) {
			return true;
		}
		if (
			displaySettings.includes('shop_archive_tags') &&
			$('body').hasClass('tax-product_tag')
		) {
			return true;
		}

		return false;
	}

	if (shouldDisplayNotification()) {
		// Standard WooCommerce Add to Cart
		$(document.body).on(
			'added_to_cart',
			function (event, fragments, cart_hash, $button) {
				var product_id = $button.data('product_id');
				displayNotification(product_id);
			}
		);

		// WooCommerce Gutenberg Blocks Add to Cart
		$(document.body).on('wc-blocks_added_to_cart', function () {
			displayNotification(); // No product ID is passed here
		});
	}

	function displayNotification(product_id = 0) {
		$.ajax({
			url: cartNotificationsData.ajaxurl, // URL from localized script
			type: 'POST',
			dataType: 'json',
			data: {
				action: 'get_product_details', // The same as your add_action hook
				product_id: product_id,
			},
			success: function (response) {
				if (response.success) {
					// Append the HTML to the start of the body
					document.body.insertAdjacentHTML(
						'afterbegin',
						response.data.html
					);

					// Removing the card after time interval
					var notificationElement = document.querySelector(
						'.cart-notifications-pops'
					);
					var time = notificationElement.dataset.time;
					setTimeout(function () {
						if (notificationElement) {
							notificationElement.classList.add('slide-out');

							// Remove the element after the animation
							notificationElement.addEventListener(
								'animationend',
								function () {
									notificationElement.remove();
								}
							);
						}
					}, time); // Time until the slide-out starts
				}
			},
			error: function () {
				console.error('AJAX request failed.');
			},
		});
	}
});
