/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cart-notification.scss":
/*!************************************!*\
  !*** ./src/cart-notification.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/cart-notification.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_notification_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-notification.scss */ "./src/cart-notification.scss");

jQuery(document).ready(function ($) {
  function shouldDisplayNotification() {
    var displaySettings = cartNotificationsData.displaySettings || [];
    if (displaySettings.includes('all_pages')) {
      return true;
    }
    if (displaySettings.includes('shop_archive') && $('body').hasClass('woocommerce-shop')) {
      return true;
    }
    if (displaySettings.includes('shop_archive_categories') && $('body').hasClass('tax-product_cat')) {
      return true;
    }
    if (displaySettings.includes('shop_archive_tags') && $('body').hasClass('tax-product_tag')) {
      return true;
    }
    return false;
  }
  if (shouldDisplayNotification()) {
    // Standard WooCommerce Add to Cart
    $(document.body).on('added_to_cart', function (event, fragments, cart_hash, $button) {
      var product_id = $button.data('product_id');
      displayNotification(product_id);
    });

    // WooCommerce Gutenberg Blocks Add to Cart
    $(document.body).on('wc-blocks_added_to_cart', function () {
      displayNotification(); // No product ID is passed here
    });
  }

  function displayNotification(product_id = 0) {
    $.ajax({
      url: cartNotificationsData.ajaxurl,
      // URL from localized script
      type: 'POST',
      dataType: 'json',
      data: {
        action: 'get_product_details',
        // The same as your add_action hook
        product_id: product_id
      },
      success: function (response) {
        if (response.success) {
          // Append the HTML to the start of the body
          document.body.insertAdjacentHTML('afterbegin', response.data.html);

          // Removing the card after time interval 
          var notificationElement = document.querySelector('.cart-notifications-pops');
          var time = notificationElement.dataset.time;
          setTimeout(function () {
            if (notificationElement) {
              notificationElement.classList.add('slide-out');

              // Remove the element after the animation
              notificationElement.addEventListener('animationend', function () {
                notificationElement.remove();
              });
            }
          }, time); // Time until the slide-out starts
        }
      },

      error: function () {
        console.error('AJAX request failed.');
      }
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=cart-notification.js.map