(()=>{"use strict";jQuery(document).ready((function(t){var a;function o(a=0){t.ajax({url:cartNotificationsData.ajaxurl,type:"POST",dataType:"json",data:{action:"get_product_details",product_id:a},success:function(t){if(t.success){document.body.insertAdjacentHTML("afterbegin",t.data.html);var a=document.querySelector(".cart-notifications-pops"),o=a.dataset.time;setTimeout((function(){a&&(a.classList.add("slide-out"),a.addEventListener("animationend",(function(){a.remove()})))}),o)}},error:function(){console.error("AJAX request failed.")}})}((a=cartNotificationsData.displaySettings||[]).includes("all_pages")||a.includes("shop_archive")&&t("body").hasClass("woocommerce-shop")||a.includes("shop_archive_categories")&&t("body").hasClass("tax-product_cat")||a.includes("shop_archive_tags")&&t("body").hasClass("tax-product_tag"))&&(t(document.body).on("added_to_cart",(function(t,a,e,c){o(c.data("product_id"))})),t(document.body).on("wc-blocks_added_to_cart",(function(){o()})))}))})();