/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/DisplayControl.js":
/*!******************************************!*\
  !*** ./src/components/DisplayControl.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// DisplayControl.js

const DisplayControl = ({
  conditions,
  initialOptions,
  onConditionChange,
  onAddCondition,
  onRemoveCondition
}) => {
  const isOptionSelected = optionValue => {
    return conditions.includes(optionValue);
  };
  const delIcon = cartNotificationsData.imagesUrl + 'del.svg';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications-conditions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Display Condition"), conditions.map((condition, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "cart-notifications-conditions-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: condition,
    onChange: e => onConditionChange(index, e.target.value)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Select Condition"), initialOptions.map((option, optionIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: optionIndex,
    value: option.value,
    disabled: index !== 0 && isOptionSelected(option.value)
  }, option.label))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onClick: () => onRemoveCondition(index),
    className: "cart-notifications-delete-condition"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: delIcon,
    alt: "Delete"
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onClick: onAddCondition,
    className: "add-more-field"
  }, "Add Display Condition"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayControl);

/***/ }),

/***/ "./src/components/LayoutRadioControl.js":
/*!**********************************************!*\
  !*** ./src/components/LayoutRadioControl.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// LayoutRadioControl.js

const LayoutRadioControl = ({
  selected,
  onLayoutChange
}) => {
  const layoutImg1 = cartNotificationsData.imagesUrl + 'layout1.svg';
  const layoutImg2 = cartNotificationsData.imagesUrl + 'layout2.svg';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications-layouts"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Layout"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications-frames"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "layout1",
    type: "radio",
    name: "layout",
    checked: selected === 'layout1',
    onChange: () => onLayoutChange('layout1')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "layout1",
    className: "view-frame"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: layoutImg1,
    alt: "Layout 1"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "layout2",
    type: "radio",
    name: "layout",
    checked: selected === 'layout2',
    onChange: () => onLayoutChange('layout2')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "layout2",
    className: "view-frame"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: layoutImg2,
    alt: "Layout 2"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutRadioControl);

/***/ }),

/***/ "./src/components/Notices.js":
/*!***********************************!*\
  !*** ./src/components/Notices.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);

// Notices.js




const Notices = () => {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store).getNotices().filter(notice => notice.type === 'snackbar'), []);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SnackbarList, {
    className: "cart-notifications-notices",
    notices: notices,
    onRemove: removeNotice
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notices);

/***/ }),

/***/ "./src/components/PositionRadioControl.js":
/*!************************************************!*\
  !*** ./src/components/PositionRadioControl.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);

// PositionRadioControl.js

const PositionRadioControl = ({
  selected,
  onPositionChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications-btn-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Position"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications-inner-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "top",
    type: "radio",
    name: "position",
    checked: selected === 'top',
    onChange: () => onPositionChange('top')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "top"
  }, "Top"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "bottom",
    type: "radio",
    name: "position",
    checked: selected === 'bottom',
    onChange: () => onPositionChange('bottom')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "bottom"
  }, "Bottom")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PositionRadioControl);

/***/ }),

/***/ "./src/components/TimeSliderControl.js":
/*!*********************************************!*\
  !*** ./src/components/TimeSliderControl.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// TimeSliderControl.js

const TimeSliderControl = ({
  sliderValue,
  onSliderChange
}) => {
  const handleSliderChange = event => {
    const newValue = event.target.value;
    onSliderChange(newValue);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "cart-notifications-slider"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Close After (Seconds)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications-slider-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "range",
    min: "1",
    max: "10",
    value: sliderValue,
    className: "slider",
    id: "notifications-range",
    onChange: handleSliderChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: "range-value"
  }, sliderValue)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeSliderControl);

/***/ }),

/***/ "./src/admin.scss":
/*!************************!*\
  !*** ./src/admin.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["api"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.scss */ "./src/admin.scss");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_LayoutRadioControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/LayoutRadioControl */ "./src/components/LayoutRadioControl.js");
/* harmony import */ var _components_PositionRadioControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/PositionRadioControl */ "./src/components/PositionRadioControl.js");
/* harmony import */ var _components_TimeSliderControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/TimeSliderControl */ "./src/components/TimeSliderControl.js");
/* harmony import */ var _components_DisplayControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/DisplayControl */ "./src/components/DisplayControl.js");
/* harmony import */ var _components_Notices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Notices */ "./src/components/Notices.js");

// admin.js
// Importing styles and necessary packages from WordPress.








// Importing custom components for the settings page.






// The main App component where the state and logic of the plugin's admin page is managed.
const App = () => {
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({
    layout: 'layout1',
    position: 'top',
    time: 3,
    conditions: [],
    isAPILoaded: false
  });

  // Fetch settings when the component mounts.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    _wordpress_api__WEBPACK_IMPORTED_MODULE_2___default().loadPromise.then(() => {
      const settings = new (_wordpress_api__WEBPACK_IMPORTED_MODULE_2___default().models).Settings();
      if (!state.isAPILoaded) {
        settings.fetch().then(response => {
          setState({
            ...state,
            layout: response['cart_notifications_plugin_layout'] || layout,
            position: response['cart_notifications_plugin_position'] || position,
            time: response['cart_notifications_plugin_slider'] || time,
            conditions: response['cart_notifications_plugin_display'] || conditions,
            isAPILoaded: true
          });
        });
      }
    });
  }, []); // Empty dependency array ensures this effect runs only once.

  const initialOptions = [{
    label: 'All pages',
    value: 'all_pages'
  }, {
    label: 'Shop Archive',
    value: 'shop_archive'
  }, {
    label: 'Shop Archive Categories',
    value: 'shop_archive_categories'
  }, {
    label: 'Shop Archive Tags',
    value: 'shop_archive_tags'
  }, {
    label: 'Shop Archive Product Attributes',
    value: 'shop_archive_product_attributes'
  }, {
    label: 'Single Products',
    value: 'single_products'
  }];

  // Handler functions for setting changes.
  const onLayoutChange = layout => {
    setState({
      ...state,
      layout
    });
  };
  const onPositionChange = position => {
    setState({
      ...state,
      position
    });
  };
  const onSliderChange = time => {
    setState({
      ...state,
      time
    });
  };
  const onConditionChange = (index, newCondition) => {
    if (newCondition !== '') {
      const newConditions = state.conditions.map((condition, i) => {
        return i === index ? newCondition : condition;
      });
      setState({
        ...state,
        conditions: newConditions
      });
    }
  };
  const addCondition = () => {
    setState(prevState => ({
      ...prevState,
      conditions: [...prevState.conditions, '']
    }));
  };
  const removeCondition = index => {
    const newConditions = state.conditions.filter((_, i) => i !== index);
    setState({
      ...state,
      conditions: newConditions
    });
  };

  // Handler functions for saving setting.
  const savingData = () => {
    const settings = new (_wordpress_api__WEBPACK_IMPORTED_MODULE_2___default().models).Settings({
      ['cart_notifications_plugin_layout']: state.layout,
      ['cart_notifications_plugin_position']: state.position,
      ['cart_notifications_plugin_slider']: state.time,
      ['cart_notifications_plugin_display']: state.conditions
    });
    settings.save();
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/notices').createNotice('success', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Settings Saved', 'wholesome-plugin'), {
      type: 'snackbar',
      isDismissible: true
    });
  };
  const {
    layout,
    position,
    time,
    isAPILoaded,
    conditions
  } = state;

  // Rendering the settings page layout.
  if (!isAPILoaded) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications__container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications__title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Cart Notifications Settings', 'cart-notifications'), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: "admin-plugins"
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications__main"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Make adjustments to cart notification settings', 'cart-notifications'),
    icon: "admin-plugins"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_LayoutRadioControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selected: layout,
    onLayoutChange: onLayoutChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PositionRadioControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selected: position,
    onPositionChange: onPositionChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_TimeSliderControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sliderValue: time,
    onSliderChange: onSliderChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_DisplayControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    conditions: conditions,
    initialOptions: initialOptions,
    onConditionChange: onConditionChange,
    onAddCondition: addCondition,
    onRemoveCondition: removeCondition
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isPrimary: true,
    isLarge: true,
    onClick: savingData
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Save Settings', 'cart-notifications'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cart-notifications__notices"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Notices__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
};

// Rendering the App component once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
  const htmlOutput = document.getElementById('cart-notifications-settings');
  if (htmlOutput) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null), htmlOutput);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map