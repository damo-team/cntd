(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("antd/lib/icon"), require("antd/lib/button"), require("damo-core"), require("antd/lib/input"), require("antd/lib/menu"), require("antd/lib/message"), require("history"), require("hoist-non-react-statics"), require("react-router"), require("antd/lib/alert"), require("antd/lib/auto-complete"), require("antd/lib/breadcrumb"), require("antd/lib/collapse"), require("antd/lib/dropdown"), require("antd/lib/form"), require("antd/lib/modal"), require("antd/lib/notification"), require("antd/lib/pagination"), require("antd/lib/table"), require("antd/lib/tooltip"), require("clipboard"), require("cuid"), require("seamless-immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "antd/lib/icon", "antd/lib/button", "damo-core", "antd/lib/input", "antd/lib/menu", "antd/lib/message", "history", "hoist-non-react-statics", "react-router", "antd/lib/alert", "antd/lib/auto-complete", "antd/lib/breadcrumb", "antd/lib/collapse", "antd/lib/dropdown", "antd/lib/form", "antd/lib/modal", "antd/lib/notification", "antd/lib/pagination", "antd/lib/table", "antd/lib/tooltip", "clipboard", "cuid", "seamless-immutable"], factory);
	else if(typeof exports === 'object')
		exports["rcKit"] = factory(require("react"), require("react-dom"), require("antd/lib/icon"), require("antd/lib/button"), require("damo-core"), require("antd/lib/input"), require("antd/lib/menu"), require("antd/lib/message"), require("history"), require("hoist-non-react-statics"), require("react-router"), require("antd/lib/alert"), require("antd/lib/auto-complete"), require("antd/lib/breadcrumb"), require("antd/lib/collapse"), require("antd/lib/dropdown"), require("antd/lib/form"), require("antd/lib/modal"), require("antd/lib/notification"), require("antd/lib/pagination"), require("antd/lib/table"), require("antd/lib/tooltip"), require("clipboard"), require("cuid"), require("seamless-immutable"));
	else
		root["rcKit"] = factory(root["react"], root["react-dom"], root["antd/lib/icon"], root["antd/lib/button"], root["damo-core"], root["antd/lib/input"], root["antd/lib/menu"], root["antd/lib/message"], root["history"], root["hoist-non-react-statics"], root["react-router"], root["antd/lib/alert"], root["antd/lib/auto-complete"], root["antd/lib/breadcrumb"], root["antd/lib/collapse"], root["antd/lib/dropdown"], root["antd/lib/form"], root["antd/lib/modal"], root["antd/lib/notification"], root["antd/lib/pagination"], root["antd/lib/table"], root["antd/lib/tooltip"], root["clipboard"], root["cuid"], root["seamless-immutable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_69__, __WEBPACK_EXTERNAL_MODULE_70__, __WEBPACK_EXTERNAL_MODULE_71__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_223__, __WEBPACK_EXTERNAL_MODULE_224__, __WEBPACK_EXTERNAL_MODULE_225__, __WEBPACK_EXTERNAL_MODULE_226__, __WEBPACK_EXTERNAL_MODULE_227__, __WEBPACK_EXTERNAL_MODULE_228__, __WEBPACK_EXTERNAL_MODULE_229__, __WEBPACK_EXTERNAL_MODULE_230__, __WEBPACK_EXTERNAL_MODULE_231__, __WEBPACK_EXTERNAL_MODULE_232__, __WEBPACK_EXTERNAL_MODULE_233__, __WEBPACK_EXTERNAL_MODULE_234__, __WEBPACK_EXTERNAL_MODULE_235__, __WEBPACK_EXTERNAL_MODULE_236__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.errorReducer = exports.errorFetch = exports.CopyLogger = exports.BreadCrumb = exports.AdaptPage = exports.Validator = exports.BaseColumn = exports.SceneSelector = exports.Search = exports.SideBar = exports.DnDContext = exports.DropItem = exports.DragItem = exports.TagSearcher = exports.SceneComponent = exports.NavLink = exports.AppModal = undefined;

	var _notifier = __webpack_require__(36);

	Object.keys(_notifier).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _notifier[key];
	    }
	  });
	});

	var _appModal = __webpack_require__(209);

	var _appModal2 = _interopRequireDefault(_appModal);

	var _navLink = __webpack_require__(67);

	var _navLink2 = _interopRequireDefault(_navLink);

	var _sceneComponent = __webpack_require__(211);

	var _sceneComponent2 = _interopRequireDefault(_sceneComponent);

	var _tagSearcher = __webpack_require__(214);

	var _tagSearcher2 = _interopRequireDefault(_tagSearcher);

	var _dragItem = __webpack_require__(66);

	var _dragItem2 = _interopRequireDefault(_dragItem);

	var _dropItem = __webpack_require__(210);

	var _dropItem2 = _interopRequireDefault(_dropItem);

	var _sidebar = __webpack_require__(213);

	var _sidebar2 = _interopRequireDefault(_sidebar);

	var _search = __webpack_require__(212);

	var _search2 = _interopRequireDefault(_search);

	var _sceneSelector = __webpack_require__(217);

	var _sceneSelector2 = _interopRequireDefault(_sceneSelector);

	var _baseColumn = __webpack_require__(219);

	var _baseColumn2 = _interopRequireDefault(_baseColumn);

	var _validator = __webpack_require__(221);

	var _validator2 = _interopRequireDefault(_validator);

	var _adaptPage = __webpack_require__(218);

	var _adaptPage2 = _interopRequireDefault(_adaptPage);

	var _breadCrumb = __webpack_require__(220);

	var _breadCrumb2 = _interopRequireDefault(_breadCrumb);

	var _hoistNonReactStatics = __webpack_require__(73);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _reactDndHtml5Backend = __webpack_require__(191);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	var _reactDnd = __webpack_require__(34);

	var _copyLogger = __webpack_require__(68);

	var _copyLogger2 = _interopRequireDefault(_copyLogger);

	var _errorFetch = __webpack_require__(215);

	var _errorFetch2 = _interopRequireDefault(_errorFetch);

	var _errorReducer = __webpack_require__(216);

	var _errorReducer2 = _interopRequireDefault(_errorReducer);

	__webpack_require__(222);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DnDContext = function DnDContext() {
	  return function (BaseComponent) {
	    var Component = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(BaseComponent);
	    return (0, _hoistNonReactStatics2.default)(Component, BaseComponent);
	  };
	};

	exports.AppModal = _appModal2.default;
	exports.NavLink = _navLink2.default;
	exports.SceneComponent = _sceneComponent2.default;
	exports.TagSearcher = _tagSearcher2.default;
	exports.DragItem = _dragItem2.default;
	exports.DropItem = _dropItem2.default;
	exports.DnDContext = DnDContext;
	exports.SideBar = _sidebar2.default;
	exports.Search = _search2.default;
	exports.SceneSelector = _sceneSelector2.default;
	exports.BaseColumn = _baseColumn2.default;
	exports.Validator = _validator2.default;
	exports.AdaptPage = _adaptPage2.default;
	exports.BreadCrumb = _breadCrumb2.default;
	exports.CopyLogger = _copyLogger2.default;
	exports.errorFetch = _errorFetch2.default;
	exports.errorReducer = _errorReducer2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.format = format;
	exports.isEmptyValue = isEmptyValue;
	exports.isEmptyObject = isEmptyObject;
	exports.asyncMap = asyncMap;
	exports.complementError = complementError;
	exports.deepMerge = deepMerge;
	var formatRegExp = /%[sdj%]/g;

	var warning = exports.warning = function warning() {};

	// don't print warning message when in production env or node runtime
	if (false) {
	  exports.warning = warning = function warning(type, errors) {
	    if (typeof console !== 'undefined' && console.warn) {
	      if (errors.every(function (e) {
	        return typeof e === 'string';
	      })) {
	        console.warn(type, errors);
	      }
	    }
	  };
	}

	function format() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var i = 1;
	  var f = args[0];
	  var len = args.length;
	  if (typeof f === 'function') {
	    return f.apply(null, args.slice(1));
	  }
	  if (typeof f === 'string') {
	    var str = String(f).replace(formatRegExp, function (x) {
	      if (x === '%%') {
	        return '%';
	      }
	      if (i >= len) {
	        return x;
	      }
	      switch (x) {
	        case '%s':
	          return String(args[i++]);
	        case '%d':
	          return Number(args[i++]);
	        case '%j':
	          try {
	            return JSON.stringify(args[i++]);
	          } catch (_) {
	            return '[Circular]';
	          }
	          break;
	        default:
	          return x;
	      }
	    });
	    for (var arg = args[i]; i < len; arg = args[++i]) {
	      str += ' ' + arg;
	    }
	    return str;
	  }
	  return f;
	}

	function isNativeStringType(type) {
	  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
	}

	function isEmptyValue(value, type) {
	  if (value === undefined || value === null) {
	    return true;
	  }
	  if (type === 'array' && Array.isArray(value) && !value.length) {
	    return true;
	  }
	  if (isNativeStringType(type) && typeof value === 'string' && !value) {
	    return true;
	  }
	  return false;
	}

	function isEmptyObject(obj) {
	  return Object.keys(obj).length === 0;
	}

	function asyncParallelArray(arr, func, callback) {
	  var results = [];
	  var total = 0;
	  var arrLength = arr.length;

	  function count(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === arrLength) {
	      callback(results);
	    }
	  }

	  arr.forEach(function (a) {
	    func(a, count);
	  });
	}

	function asyncSerialArray(arr, func, callback) {
	  var index = 0;
	  var arrLength = arr.length;

	  function next(errors) {
	    if (errors && errors.length) {
	      callback(errors);
	      return;
	    }
	    var original = index;
	    index = index + 1;
	    if (original < arrLength) {
	      func(arr[original], next);
	    } else {
	      callback([]);
	    }
	  }

	  next([]);
	}

	function flattenObjArr(objArr) {
	  var ret = [];
	  Object.keys(objArr).forEach(function (k) {
	    ret.push.apply(ret, objArr[k]);
	  });
	  return ret;
	}

	function asyncMap(objArr, option, func, callback) {
	  if (option.first) {
	    var flattenArr = flattenObjArr(objArr);
	    return asyncSerialArray(flattenArr, func, callback);
	  }
	  var firstFields = option.firstFields || [];
	  if (firstFields === true) {
	    firstFields = Object.keys(objArr);
	  }
	  var objArrKeys = Object.keys(objArr);
	  var objArrLength = objArrKeys.length;
	  var total = 0;
	  var results = [];
	  var next = function next(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === objArrLength) {
	      callback(results);
	    }
	  };
	  objArrKeys.forEach(function (key) {
	    var arr = objArr[key];
	    if (firstFields.indexOf(key) !== -1) {
	      asyncSerialArray(arr, func, next);
	    } else {
	      asyncParallelArray(arr, func, next);
	    }
	  });
	}

	function complementError(rule) {
	  return function (oe) {
	    if (oe && oe.message) {
	      oe.field = oe.field || rule.fullField;
	      return oe;
	    }
	    return {
	      message: oe,
	      field: oe.field || rule.fullField
	    };
	  };
	}

	function deepMerge(target, source) {
	  if (source) {
	    for (var s in source) {
	      if (source.hasOwnProperty(s)) {
	        var value = source[s];
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
	          target[s] = _extends({}, target[s], value);
	        } else {
	          target[s] = value;
	        }
	      }
	    }
	  }
	  return target;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  required: __webpack_require__(40),
	  whitespace: __webpack_require__(83),
	  type: __webpack_require__(82),
	  range: __webpack_require__(81),
	  "enum": __webpack_require__(79),
	  pattern: __webpack_require__(80)
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(15),
	    getPrototype = __webpack_require__(140),
	    isObjectLike = __webpack_require__(11);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(54),
	    overRest = __webpack_require__(167),
	    setToString = __webpack_require__(170);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(51);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.END_DRAG = exports.DROP = exports.HOVER = exports.PUBLISH_DRAG_SOURCE = exports.BEGIN_DRAG = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.beginDrag = beginDrag;
	exports.publishDragSource = publishDragSource;
	exports.hover = hover;
	exports.drop = drop;
	exports.endDrag = endDrag;

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(6);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isObject = __webpack_require__(10);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _matchesType = __webpack_require__(43);

	var _matchesType2 = _interopRequireDefault(_matchesType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BEGIN_DRAG = exports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
	var PUBLISH_DRAG_SOURCE = exports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
	var HOVER = exports.HOVER = 'dnd-core/HOVER';
	var DROP = exports.DROP = 'dnd-core/DROP';
	var END_DRAG = exports.END_DRAG = 'dnd-core/END_DRAG';

	function beginDrag(sourceIds) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { publishSource: true, clientOffset: null };
		var publishSource = options.publishSource,
		    clientOffset = options.clientOffset,
		    getSourceClientOffset = options.getSourceClientOffset;

		(0, _invariant2.default)((0, _isArray2.default)(sourceIds), 'Expected sourceIds to be an array.');

		var monitor = this.getMonitor();
		var registry = this.getRegistry();
		(0, _invariant2.default)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');

		for (var i = 0; i < sourceIds.length; i++) {
			(0, _invariant2.default)(registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
		}

		var sourceId = null;
		for (var _i = sourceIds.length - 1; _i >= 0; _i--) {
			if (monitor.canDragSource(sourceIds[_i])) {
				sourceId = sourceIds[_i];
				break;
			}
		}
		if (sourceId === null) {
			return;
		}

		var sourceClientOffset = null;
		if (clientOffset) {
			(0, _invariant2.default)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
			sourceClientOffset = getSourceClientOffset(sourceId);
		}

		var source = registry.getSource(sourceId);
		var item = source.beginDrag(monitor, sourceId);
		(0, _invariant2.default)((0, _isObject2.default)(item), 'Item must be an object.');

		registry.pinSource(sourceId);

		var itemType = registry.getSourceType(sourceId);
		return {
			type: BEGIN_DRAG,
			itemType: itemType,
			item: item,
			sourceId: sourceId,
			clientOffset: clientOffset,
			sourceClientOffset: sourceClientOffset,
			isSourcePublic: publishSource
		};
	}

	function publishDragSource() {
		var monitor = this.getMonitor();
		if (!monitor.isDragging()) {
			return;
		}

		return { type: PUBLISH_DRAG_SOURCE };
	}

	function hover(targetIdsArg) {
		var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		    _ref$clientOffset = _ref.clientOffset,
		    clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;

		(0, _invariant2.default)((0, _isArray2.default)(targetIdsArg), 'Expected targetIds to be an array.');
		var targetIds = targetIdsArg.slice(0);

		var monitor = this.getMonitor();
		var registry = this.getRegistry();
		(0, _invariant2.default)(monitor.isDragging(), 'Cannot call hover while not dragging.');
		(0, _invariant2.default)(!monitor.didDrop(), 'Cannot call hover after drop.');

		// First check invariants.
		for (var i = 0; i < targetIds.length; i++) {
			var targetId = targetIds[i];
			(0, _invariant2.default)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');

			var target = registry.getTarget(targetId);
			(0, _invariant2.default)(target, 'Expected targetIds to be registered.');
		}

		var draggedItemType = monitor.getItemType();

		// Remove those targetIds that don't match the targetType.  This
		// fixes shallow isOver which would only be non-shallow because of
		// non-matching targets.
		for (var _i2 = targetIds.length - 1; _i2 >= 0; _i2--) {
			var _targetId = targetIds[_i2];
			var targetType = registry.getTargetType(_targetId);
			if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
				targetIds.splice(_i2, 1);
			}
		}

		// Finally call hover on all matching targets.
		for (var _i3 = 0; _i3 < targetIds.length; _i3++) {
			var _targetId2 = targetIds[_i3];
			var _target = registry.getTarget(_targetId2);
			_target.hover(monitor, _targetId2);
		}

		return {
			type: HOVER,
			targetIds: targetIds,
			clientOffset: clientOffset
		};
	}

	function drop() {
		var _this = this;

		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		var monitor = this.getMonitor();
		var registry = this.getRegistry();
		(0, _invariant2.default)(monitor.isDragging(), 'Cannot call drop while not dragging.');
		(0, _invariant2.default)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');

		var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);

		targetIds.reverse();
		targetIds.forEach(function (targetId, index) {
			var target = registry.getTarget(targetId);

			var dropResult = target.drop(monitor, targetId);
			(0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isObject2.default)(dropResult), 'Drop result must either be an object or undefined.');
			if (typeof dropResult === 'undefined') {
				dropResult = index === 0 ? {} : monitor.getDropResult();
			}

			_this.store.dispatch({
				type: DROP,
				dropResult: _extends({}, options, dropResult)
			});
		});
	}

	function endDrag() {
		var monitor = this.getMonitor();
		var registry = this.getRegistry();
		(0, _invariant2.default)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');

		var sourceId = monitor.getSourceId();
		var source = registry.getSource(sourceId, true);
		source.endDrag(monitor, sourceId);

		registry.unpinSource();

		return { type: END_DRAG };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.addSource = addSource;
	exports.addTarget = addTarget;
	exports.removeSource = removeSource;
	exports.removeTarget = removeTarget;
	var ADD_SOURCE = exports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
	var ADD_TARGET = exports.ADD_TARGET = 'dnd-core/ADD_TARGET';
	var REMOVE_SOURCE = exports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
	var REMOVE_TARGET = exports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';

	function addSource(sourceId) {
		return {
			type: ADD_SOURCE,
			sourceId: sourceId
		};
	}

	function addTarget(targetId) {
		return {
			type: ADD_TARGET,
			targetId: targetId
		};
	}

	function removeSource(sourceId) {
		return {
			type: REMOVE_SOURCE,
			sourceId: sourceId
		};
	}

	function removeTarget(targetId) {
		return {
			type: REMOVE_TARGET,
			targetId: targetId
		};
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(19);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26),
	    getRawTag = __webpack_require__(141),
	    objectToString = __webpack_require__(165);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(150);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(128),
	    getValue = __webpack_require__(142);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(32),
	    isObjectLike = __webpack_require__(11);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = checkDecoratorArguments;

	function checkDecoratorArguments(functionName, signature) {
	  if (false) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    for (var i = 0; i < args.length; i++) {
	      var arg = args[i];
	      if (arg && arg.prototype && arg.prototype.render) {
	        console.error( // eslint-disable-line no-console
	        'You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
	        return;
	      }
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function type(rule, value, callback, source, options) {
	  var ruleType = rule.type;
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, ruleType);
	    if (!(0, _util.isEmptyValue)(value, ruleType)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = type;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isDisposable;

	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}

	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(44),
	    setCacheAdd = __webpack_require__(168),
	    setCacheHas = __webpack_require__(169);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(9);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(124);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(56),
	    isLength = __webpack_require__(57);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var FILE = '__NATIVE_FILE__';
	exports.FILE = FILE;
	var URL = '__NATIVE_URL__';
	exports.URL = URL;
	var TEXT = '__NATIVE_TEXT__';
	exports.TEXT = TEXT;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _DragDropContext = __webpack_require__(193);

	exports.DragDropContext = _interopRequire(_DragDropContext);

	var _DragLayer = __webpack_require__(194);

	exports.DragLayer = _interopRequire(_DragLayer);

	var _DragSource = __webpack_require__(195);

	exports.DragSource = _interopRequire(_DragSource);

	var _DropTarget = __webpack_require__(196);

	exports.DropTarget = _interopRequire(_DropTarget);

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Notifier = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _message = __webpack_require__(71);

	var _message2 = _interopRequireDefault(_message);

	var _notification = __webpack_require__(230);

	var _notification2 = _interopRequireDefault(_notification);

	var _copyLogger = __webpack_require__(68);

	var _copyLogger2 = _interopRequireDefault(_copyLogger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 默认8秒
	_notification2.default.config({
	  duration: 8
	});
	// 默认4秒
	_message2.default.config({
	  duration: 4
	});

	var seniorNotification = Object.assign({}, _notification2.default);
	['success', 'info', 'warning', 'error', 'warn'].forEach(function (type) {
	  seniorNotification[type] = function (args) {
	    return _notification2.default[type](assign({}, args, { type: type, duration: null }));
	  };
	});

	var Notifier = exports.Notifier = (_temp = _class = function () {
	  function Notifier() {
	    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var immediate = arguments[1];

	    _classCallCheck(this, Notifier);

	    this.$opt_ = opt;
	    if (immediate) {
	      this.notify(opt);
	    }
	  }

	  _createClass(Notifier, [{
	    key: 'notify',
	    value: function notify(opt) {
	      var _this = this;

	      var strategy = Notifier.strategy;
	      // 特殊处理
	      if (opt.rid) {
	        opt = {
	          content: opt
	        };
	      }
	      opt = Object.assign({ type: 'info', level: 'one' }, this.$opt_, opt);

	      if (opt.trace) {
	        delete this.$opt_.trace;
	        delete opt.trace;
	        if (opt.content.then) {
	          opt.content.then(function (res) {
	            if (Object(res) !== res) {
	              res = {
	                message: res
	              };
	            }
	            var rid = opt.rid || res.rid;
	            if (rid) {
	              opt.content = _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  res.message
	                ),
	                _react2.default.createElement(_copyLogger2.default, { rid: rid, message: 'rid: ' + rid })
	              );
	            } else {
	              opt.content = res.message;
	            }
	            _this.notify(opt);
	          }, function (err) {
	            opt.content = err.message;
	            _this.notify(opt);
	          });
	        } else {
	          if (Object(opt.content) === opt.content) {
	            var rid = opt.rid || opt.content.rid;
	            var content = opt.content.message;
	            if (rid) {
	              opt.content = _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  content
	                ),
	                _react2.default.createElement(_copyLogger2.default, { rid: rid, message: 'rid: ' + rid })
	              );
	            } else {
	              opt.content = content;
	            }
	          }
	          this.notify(opt);
	        }
	      } else {
	        // notification 和 message的初始化方式不同
	        if (strategy[opt.level] === _notification2.default) {
	          strategy[opt.level][opt.type]({
	            message: opt.title || '提示',
	            description: opt.content,
	            btn: opt.btn,
	            icon: opt.icon,
	            key: opt.key,
	            onClose: opt.onClose,
	            duration: opt.duration
	          });
	        } else {
	          strategy[opt.level][opt.type](opt.content, opt.duration);
	        }
	      }
	    }
	  }], [{
	    key: 'notifierFactory',
	    value: function notifierFactory(type, title, content) {
	      return new Notifier({
	        level: 'two',
	        type: type,
	        title: title || '错误异常',
	        content: content,
	        trace: true
	      });
	    }
	  }, {
	    key: 'error',
	    value: function error(title, content) {
	      if (content) {
	        return new Notifier({
	          type: 'error',
	          level: 'two',
	          title: title,
	          content: content
	        }, 1);
	      } else {
	        return new Notifier({
	          type: 'error',
	          level: 'one',
	          content: title
	        }, 1);
	      }
	    }
	  }, {
	    key: 'success',
	    value: function success(title, content) {
	      if (content) {
	        return new Notifier({
	          type: 'success',
	          level: 'two',
	          title: title,
	          content: content
	        }, 1);
	      } else {
	        return new Notifier({
	          type: 'success',
	          level: 'one',
	          content: title
	        }, 1);
	      }
	    }
	  }, {
	    key: 'info',
	    value: function info(title, content) {
	      if (content) {
	        return new Notifier({
	          type: 'info',
	          level: 'two',
	          title: title,
	          content: content
	        }, 1);
	      } else {
	        return new Notifier({
	          type: 'info',
	          level: 'one',
	          content: title
	        }, 1);
	      }
	    }
	  }, {
	    key: 'warn',
	    value: function warn(title, content) {
	      if (content) {
	        return new Notifier({
	          type: 'warn',
	          level: 'two',
	          title: title,
	          content: content
	        }, 1);
	      } else {
	        return new Notifier({
	          type: 'warn',
	          level: 'one',
	          content: title
	        }, 1);
	      }
	    }
	  }]);

	  return Notifier;
	}(), _class.strategy = {
	  one: _message2.default,
	  two: _notification2.default,
	  three: seniorNotification
	}, _temp);

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(1);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating required fields.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function required(rule, value, source, errors, options, type) {
	  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
	    errors.push(util.format(options.messages.required, rule.fullField));
	  }
	}

	exports["default"] = required;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = dirtyHandlerIds;
	exports.areDirty = areDirty;

	var _xor = __webpack_require__(184);

	var _xor2 = _interopRequireDefault(_xor);

	var _intersection = __webpack_require__(177);

	var _intersection2 = _interopRequireDefault(_intersection);

	var _dragDrop = __webpack_require__(12);

	var _registry = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NONE = [];
	var ALL = [];

	function dirtyHandlerIds() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;
		var action = arguments[1];
		var dragOperation = arguments[2];

		switch (action.type) {
			case _dragDrop.HOVER:
				break;
			case _registry.ADD_SOURCE:
			case _registry.ADD_TARGET:
			case _registry.REMOVE_TARGET:
			case _registry.REMOVE_SOURCE:
				return NONE;
			case _dragDrop.BEGIN_DRAG:
			case _dragDrop.PUBLISH_DRAG_SOURCE:
			case _dragDrop.END_DRAG:
			case _dragDrop.DROP:
			default:
				return ALL;
		}

		var targetIds = action.targetIds;
		var prevTargetIds = dragOperation.targetIds;

		var result = (0, _xor2.default)(targetIds, prevTargetIds);

		var didChange = false;
		if (result.length === 0) {
			for (var i = 0; i < targetIds.length; i++) {
				if (targetIds[i] !== prevTargetIds[i]) {
					didChange = true;
					break;
				}
			}
		} else {
			didChange = true;
		}

		if (!didChange) {
			return NONE;
		}

		var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
		var innermostTargetId = targetIds[targetIds.length - 1];

		if (prevInnermostTargetId !== innermostTargetId) {
			if (prevInnermostTargetId) {
				result.push(prevInnermostTargetId);
			}
			if (innermostTargetId) {
				result.push(innermostTargetId);
			}
		}

		return result;
	}

	function areDirty(state, handlerIds) {
		if (state === NONE) {
			return false;
		}

		if (state === ALL || typeof handlerIds === 'undefined') {
			return true;
		}

		return (0, _intersection2.default)(handlerIds, state).length > 0;
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = dragOffset;
	exports.getSourceClientOffset = getSourceClientOffset;
	exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;

	var _dragDrop = __webpack_require__(12);

	var initialState = {
		initialSourceClientOffset: null,
		initialClientOffset: null,
		clientOffset: null
	};

	function areOffsetsEqual(offsetA, offsetB) {
		if (offsetA === offsetB) {
			return true;
		}
		return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
	}

	function dragOffset() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			case _dragDrop.BEGIN_DRAG:
				return {
					initialSourceClientOffset: action.sourceClientOffset,
					initialClientOffset: action.clientOffset,
					clientOffset: action.clientOffset
				};
			case _dragDrop.HOVER:
				if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
					return state;
				}
				return _extends({}, state, {
					clientOffset: action.clientOffset
				});
			case _dragDrop.END_DRAG:
			case _dragDrop.DROP:
				return initialState;
			default:
				return state;
		}
	}

	function getSourceClientOffset(state) {
		var clientOffset = state.clientOffset,
		    initialClientOffset = state.initialClientOffset,
		    initialSourceClientOffset = state.initialSourceClientOffset;

		if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
			return null;
		}
		return {
			x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
			y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
		};
	}

	function getDifferenceFromInitialOffset(state) {
		var clientOffset = state.clientOffset,
		    initialClientOffset = state.initialClientOffset;

		if (!clientOffset || !initialClientOffset) {
			return null;
		}
		return {
			x: clientOffset.x - initialClientOffset.x,
			y: clientOffset.y - initialClientOffset.y
		};
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = matchesType;

	var _isArray = __webpack_require__(6);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function matchesType(targetType, draggedItemType) {
		if ((0, _isArray2.default)(targetType)) {
			return targetType.some(function (t) {
				return t === draggedItemType;
			});
		} else {
			return targetType === draggedItemType;
		}
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(158),
	    mapCacheDelete = __webpack_require__(159),
	    mapCacheGet = __webpack_require__(160),
	    mapCacheHas = __webpack_require__(161),
	    mapCacheSet = __webpack_require__(162);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(50);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(25),
	    arrayIncludes = __webpack_require__(27),
	    arrayIncludesWith = __webpack_require__(28),
	    arrayMap = __webpack_require__(29),
	    baseUnary = __webpack_require__(30),
	    cacheHas = __webpack_require__(31);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee == null ? value : iteratee(value);

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(121),
	    isFlattenable = __webpack_require__(148);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(25),
	    arrayIncludes = __webpack_require__(27),
	    arrayIncludesWith = __webpack_require__(28),
	    cacheHas = __webpack_require__(31),
	    createSet = __webpack_require__(138),
	    setToArray = __webpack_require__(53);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 52 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(126),
	    isObjectLike = __webpack_require__(11);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(15),
	    isObject = __webpack_require__(10);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(47),
	    baseRest = __webpack_require__(8),
	    isArrayLikeObject = __webpack_require__(20);

	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.pull`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.xor
	 * @example
	 *
	 * _.without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 */
	var without = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, values)
	    : [];
	});

	module.exports = without;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashMemoize = __webpack_require__(181);

	var _lodashMemoize2 = _interopRequireDefault(_lodashMemoize);

	var isFirefox = _lodashMemoize2['default'](function () {
	  return (/firefox/i.test(navigator.userAgent)
	  );
	});

	exports.isFirefox = isFirefox;
	var isSafari = _lodashMemoize2['default'](function () {
	  return Boolean(window.safari);
	});
	exports.isSafari = isSafari;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = areOptionsEqual;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsShallowEqual = __webpack_require__(35);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	function areOptionsEqual(nextOptions, currentOptions) {
	  if (currentOptions === nextOptions) {
	    return true;
	  }

	  return currentOptions !== null && nextOptions !== null && _utilsShallowEqual2['default'](currentOptions, nextOptions);
	}

	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = decorateHandler;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _disposables = __webpack_require__(101);

	var _utilsShallowEqual = __webpack_require__(35);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsShallowEqualScalar = __webpack_require__(64);

	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

	var _lodashIsPlainObject = __webpack_require__(7);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	function decorateHandler(_ref) {
	  var DecoratedComponent = _ref.DecoratedComponent;
	  var createHandler = _ref.createHandler;
	  var createMonitor = _ref.createMonitor;
	  var createConnector = _ref.createConnector;
	  var registerHandler = _ref.registerHandler;
	  var containerDisplayName = _ref.containerDisplayName;
	  var getType = _ref.getType;
	  var collect = _ref.collect;
	  var options = _ref.options;
	  var _options$arePropsEqual = options.arePropsEqual;
	  var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;

	  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	  return (function (_Component) {
	    _inherits(DragDropContainer, _Component);

	    DragDropContainer.prototype.getHandlerId = function getHandlerId() {
	      return this.handlerId;
	    };

	    DragDropContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	      return this.decoratedComponentInstance;
	    };

	    DragDropContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	      return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2['default'](nextState, this.state);
	    };

	    _createClass(DragDropContainer, null, [{
	      key: 'DecoratedComponent',
	      value: DecoratedComponent,
	      enumerable: true
	    }, {
	      key: 'displayName',
	      value: containerDisplayName + '(' + displayName + ')',
	      enumerable: true
	    }, {
	      key: 'contextTypes',
	      value: {
	        dragDropManager: _react.PropTypes.object.isRequired
	      },
	      enumerable: true
	    }]);

	    function DragDropContainer(props, context) {
	      _classCallCheck(this, DragDropContainer);

	      _Component.call(this, props, context);
	      this.handleChange = this.handleChange.bind(this);
	      this.handleChildRef = this.handleChildRef.bind(this);

	      _invariant2['default'](typeof this.context.dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

	      this.manager = this.context.dragDropManager;
	      this.handlerMonitor = createMonitor(this.manager);
	      this.handlerConnector = createConnector(this.manager.getBackend());
	      this.handler = createHandler(this.handlerMonitor);

	      this.disposable = new _disposables.SerialDisposable();
	      this.receiveProps(props);
	      this.state = this.getCurrentState();
	      this.dispose();
	    }

	    DragDropContainer.prototype.componentDidMount = function componentDidMount() {
	      this.isCurrentlyMounted = true;
	      this.disposable = new _disposables.SerialDisposable();
	      this.currentType = null;
	      this.receiveProps(this.props);
	      this.handleChange();
	    };

	    DragDropContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (!arePropsEqual(nextProps, this.props)) {
	        this.receiveProps(nextProps);
	        this.handleChange();
	      }
	    };

	    DragDropContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.dispose();
	      this.isCurrentlyMounted = false;
	    };

	    DragDropContainer.prototype.receiveProps = function receiveProps(props) {
	      this.handler.receiveProps(props);
	      this.receiveType(getType(props));
	    };

	    DragDropContainer.prototype.receiveType = function receiveType(type) {
	      if (type === this.currentType) {
	        return;
	      }

	      this.currentType = type;

	      var _registerHandler = registerHandler(type, this.handler, this.manager);

	      var handlerId = _registerHandler.handlerId;
	      var unregister = _registerHandler.unregister;

	      this.handlerId = handlerId;
	      this.handlerMonitor.receiveHandlerId(handlerId);
	      this.handlerConnector.receiveHandlerId(handlerId);

	      var globalMonitor = this.manager.getMonitor();
	      var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });

	      this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
	    };

	    DragDropContainer.prototype.handleChange = function handleChange() {
	      if (!this.isCurrentlyMounted) {
	        return;
	      }

	      var nextState = this.getCurrentState();
	      if (!_utilsShallowEqual2['default'](nextState, this.state)) {
	        this.setState(nextState);
	      }
	    };

	    DragDropContainer.prototype.dispose = function dispose() {
	      this.disposable.dispose();
	      this.handlerConnector.receiveHandlerId(null);
	    };

	    DragDropContainer.prototype.handleChildRef = function handleChildRef(component) {
	      this.decoratedComponentInstance = component;
	      this.handler.receiveComponent(component);
	    };

	    DragDropContainer.prototype.getCurrentState = function getCurrentState() {
	      var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);

	      if (false) {
	        _invariant2['default'](_lodashIsPlainObject2['default'](nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
	      }

	      return nextState;
	    };

	    DragDropContainer.prototype.render = function render() {
	      return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	        ref: this.handleChildRef }));
	    };

	    return DragDropContainer;
	  })(_react.Component);
	}

	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isValidType;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsArray = __webpack_require__(6);

	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

	function isValidType(type, allowArray) {
	       return typeof type === 'string' || typeof type === 'symbol' || allowArray && _lodashIsArray2['default'](type) && type.every(function (t) {
	              return isValidType(t, false);
	       });
	}

	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shallowEqualScalar;

	function shallowEqualScalar(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i])) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB || typeof valA === 'object' || typeof valB === 'object') {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapConnectorHooks;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCloneWithRef = __webpack_require__(205);

	var _utilsCloneWithRef2 = _interopRequireDefault(_utilsCloneWithRef);

	var _react = __webpack_require__(2);

	function throwIfCompositeComponentElement(element) {
	  // Custom components can no longer be wrapped directly in React DnD 2.0
	  // so that we don't need to depend on findDOMNode() from react-dom.
	  if (typeof element.type === 'string') {
	    return;
	  }

	  var displayName = element.type.displayName || element.type.name || 'the component';

	  throw new Error('Only native element nodes can now be passed to React DnD connectors. ' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
	}

	function wrapHookToRecognizeElement(hook) {
	  return function () {
	    var elementOrNode = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var options = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    // When passed a node, call the hook straight away.
	    if (!_react.isValidElement(elementOrNode)) {
	      var node = elementOrNode;
	      hook(node, options);
	      return;
	    }

	    // If passed a ReactElement, clone it and attach this function as a ref.
	    // This helps us achieve a neat API where user doesn't even know that refs
	    // are being used under the hood.
	    var element = elementOrNode;
	    throwIfCompositeComponentElement(element);

	    // When no options are passed, use the hook directly
	    var ref = options ? function (node) {
	      return hook(node, options);
	    } : hook;

	    return _utilsCloneWithRef2['default'](element, ref);
	  };
	}

	function wrapConnectorHooks(hooks) {
	  var wrappedHooks = {};

	  Object.keys(hooks).forEach(function (key) {
	    var hook = hooks[key];
	    var wrappedHook = wrapHookToRecognizeElement(hook);
	    wrappedHooks[key] = function () {
	      return wrappedHook;
	    };
	  });

	  return wrappedHooks;
	}

	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDnd = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DragItem = (_dec = (0, _reactDnd.DragSource)(function (props) {
	  return props.type;
	}, {
	  beginDrag: function beginDrag(props) {
	    props.doAction(props.type, props.data);
	    return { data: props.data };
	  },
	  endDrag: function endDrag(props, monitor) {
	    props.doAction(props.type, null, monitor.didDrop());
	  }
	}, function (connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	}), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(DragItem, _Component);

	  function DragItem() {
	    _classCallCheck(this, DragItem);

	    return _possibleConstructorReturn(this, (DragItem.__proto__ || Object.getPrototypeOf(DragItem)).apply(this, arguments));
	  }

	  _createClass(DragItem, [{
	    key: 'render',
	    value: function render() {
	      var className = this.props.isDragging ? 'j-kit-drag' : '';
	      return this.props.connectDragSource(_react2.default.createElement(
	        'div',
	        { className: className },
	        this.props.children
	      ));
	    }
	  }]);

	  return DragItem;
	}(_react.Component), _class2.propTypes = {
	  type: _react.PropTypes.string.isRequired,
	  data: _react.PropTypes.object.isRequired,
	  doAction: _react.PropTypes.func.isRequired
	}, _class2.defaultProps = {
	  doAction: function doAction(noop) {
	    return noop;
	  }
	}, _temp)) || _class);
	exports.default = DragItem;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _menu = __webpack_require__(70);

	var _menu2 = _interopRequireDefault(_menu);

	var _button = __webpack_require__(38);

	var _button2 = _interopRequireDefault(_button);

	var _dropdown = __webpack_require__(227);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _icon = __webpack_require__(22);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavLink = (_temp = _class = function (_Component) {
	  _inherits(NavLink, _Component);

	  function NavLink(props) {
	    _classCallCheck(this, NavLink);

	    var _this = _possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));

	    _this.state = {
	      actions: props.links.concat(props.menus.map(function (item) {
	        item.isMenu = true;
	        return item;
	      }))
	    };
	    return _this;
	  }

	  _createClass(NavLink, [{
	    key: 'setActions',
	    value: function setActions(key, flag) {
	      var newActions = [].concat(this.state.actions);
	      var item = newActions.find(function (action) {
	        return action.key === key;
	      });
	      if (item.disabled !== undefined) {
	        item.disabled = flag;
	      } else if (item.loading !== undefined) {
	        item.loading = flag;
	      }
	      this.setState({ actions: newActions });
	      return item;
	    }
	  }, {
	    key: 'getActions',
	    value: function getActions() {
	      var links = [];
	      var menus = [];
	      this.state.actions.forEach(function (item) {
	        if (item.isMenu) {
	          menus.push(item);
	        } else {
	          links.push(item);
	        }
	      });

	      return { links: links, menus: menus };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var handleClick = function handleClick(e) {
	        var key = e.key;
	        var cancelCallback = function cancelCallback() {
	          _this2.setActions(key, false);
	        };

	        var item = _this2.setActions(key, true);
	        var action = item.action || _this2.props.onClick;
	        if (!action(e, _this2.props.data, cancelCallback)) {
	          cancelCallback();
	        }
	      };

	      var _getActions = this.getActions(),
	          links = _getActions.links,
	          menus = _getActions.menus;

	      var menu = _react2.default.createElement(
	        _menu2.default,
	        { onClick: function onClick(e) {
	            return handleClick(e);
	          } },
	        menus.map(function (item, index) {
	          return _react2.default.createElement(
	            _menu2.default.Item,
	            { key: item.key || index, disabled: item.disabled, loading: item.loading },
	            _react2.default.createElement(
	              'a',
	              null,
	              item.name
	            )
	          );
	        })
	      );
	      return _react2.default.createElement(
	        'div',
	        { className: 'antd-nav-link' },
	        links.map(function (item, index) {
	          return _react2.default.createElement(
	            _button2.default,
	            {
	              size: item.size ? item.size : 'small',
	              type: item.type ? item.type : 'button',
	              className: item.type ? '' : 'ant-btn-link',
	              key: item.key || index,
	              disabled: item.disabled,
	              loading: item.loading,
	              onClick: function onClick(e) {
	                return handleClick(item);
	              } },
	            item.href ? _react2.default.createElement(
	              'a',
	              { href: item.href, target: item.target || '_blank' },
	              item.name
	            ) : _react2.default.createElement(
	              'span',
	              null,
	              item.name
	            )
	          );
	        }),
	        links.length && menus.length ? _react2.default.createElement('span', { className: 'ant-divider' }) : null,
	        menus.length ? this.props.menuLabel ? _react2.default.createElement(
	          _dropdown2.default.Button,
	          { overlay: menu },
	          this.props.menuLabel
	        ) : _react2.default.createElement(
	          _dropdown2.default,
	          { overlay: menu },
	          _react2.default.createElement(
	            'a',
	            { className: 'ant-dropdown-link ant-btn-link' },
	            '\u66F4\u591A',
	            _react2.default.createElement(_icon2.default, { type: 'down' })
	          )
	        ) : null
	      );
	    }
	  }]);

	  return NavLink;
	}(_react.Component), _class.propsTypes = {
	  links: _react.PropTypes.array.isRequired,
	  menus: _react.PropTypes.array.isRequired,
	  onClick: _react.PropTypes.func.isRequired,
	  data: _react.PropTypes.any.isRequired,
	  menuLabel: _react.PropTypes.any.isRequired
	}, _class.defaultProps = {
	  links: [],
	  menus: []
	}, _temp);
	exports.default = NavLink;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _clipboard = __webpack_require__(234);

	var _clipboard2 = _interopRequireDefault(_clipboard);

	var _message = __webpack_require__(71);

	var _message2 = _interopRequireDefault(_message);

	var _button = __webpack_require__(38);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CopyLogger = function (_Component) {
	  _inherits(CopyLogger, _Component);

	  function CopyLogger() {
	    _classCallCheck(this, CopyLogger);

	    return _possibleConstructorReturn(this, (CopyLogger.__proto__ || Object.getPrototypeOf(CopyLogger)).apply(this, arguments));
	  }

	  _createClass(CopyLogger, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      /**
	       * copy:
	       * see: https://clipboardjs.com/
	       */
	      this.$clipboard = new _clipboard2.default(_reactDom2.default.findDOMNode(this.refs.trigger));

	      this.$clipboard.on('success', function (e) {
	        _message2.default.info('复制成功');
	        e.clearSelection();
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.$clipboard.destroy();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var inlineStyle = {
	        marginRight: '40px',
	        display: 'block',
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        wordBreak: 'break-all',
	        lineHeight: '22px'
	      };
	      return _react2.default.createElement(
	        'div',
	        { style: { whiteSpace: 'nowrap' } },
	        _react2.default.createElement(
	          _button2.default,
	          {
	            style: { float: 'right' },
	            ref: 'trigger',
	            size: 'small',
	            type: 'ghost',
	            'data-clipboard-text': this.props.rid
	          },
	          '\u590D\u5236'
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: inlineStyle },
	          this.props.message
	        )
	      );
	    }
	  }]);

	  return CopyLogger;
	}(_react.Component);

	exports.default = CopyLogger;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_69__;

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_70__;

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(76);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 76 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(1);

	var _validator = __webpack_require__(89);

	var _validator2 = _interopRequireDefault(_validator);

	var _messages2 = __webpack_require__(78);

	var _rule = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Encapsulates a validation schema.
	 *
	 *  @param descriptor An object declaring validation rules
	 *  for this schema.
	 */
	function Schema(descriptor) {
	  this.rules = null;
	  this._messages = _messages2.messages;
	  this.define(descriptor);
	}

	Schema.prototype = {
	  messages: function messages(_messages) {
	    if (_messages) {
	      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
	    }
	    return this._messages;
	  },
	  define: function define(rules) {
	    if (!rules) {
	      throw new Error('Cannot configure a schema with no rules');
	    }
	    if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object' || Array.isArray(rules)) {
	      throw new Error('Rules must be an object');
	    }
	    this.rules = {};
	    var z = void 0;
	    var item = void 0;
	    for (z in rules) {
	      if (rules.hasOwnProperty(z)) {
	        item = rules[z];
	        this.rules[z] = Array.isArray(item) ? item : [item];
	      }
	    }
	  },
	  validate: function validate(source_) {
	    var _this = this;

	    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var oc = arguments[2];

	    var source = source_;
	    var options = o;
	    var callback = oc;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!this.rules || Object.keys(this.rules).length === 0) {
	      if (callback) {
	        callback();
	      }
	      return;
	    }
	    function complete(results) {
	      var i = void 0;
	      var field = void 0;
	      var errors = [];
	      var fields = {};

	      function add(e) {
	        if (Array.isArray(e)) {
	          errors = errors.concat.apply(errors, e);
	        } else {
	          errors.push(e);
	        }
	      }

	      for (i = 0; i < results.length; i++) {
	        add(results[i]);
	      }
	      if (!errors.length) {
	        errors = null;
	        fields = null;
	      } else {
	        for (i = 0; i < errors.length; i++) {
	          field = errors[i].field;
	          fields[field] = fields[field] || [];
	          fields[field].push(errors[i]);
	        }
	      }
	      callback(errors, fields);
	    }

	    if (options.messages) {
	      var messages = this.messages();
	      if (messages === _messages2.messages) {
	        messages = (0, _messages2.newMessages)();
	      }
	      (0, _util.deepMerge)(messages, options.messages);
	      options.messages = messages;
	    } else {
	      options.messages = this.messages();
	    }

	    options.error = _rule.error;
	    var arr = void 0;
	    var value = void 0;
	    var series = {};
	    var keys = options.keys || Object.keys(this.rules);
	    keys.forEach(function (z) {
	      arr = _this.rules[z];
	      value = source[z];
	      arr.forEach(function (r) {
	        var rule = r;
	        if (typeof rule.transform === 'function') {
	          if (source === source_) {
	            source = _extends({}, source);
	          }
	          value = source[z] = rule.transform(value);
	        }
	        if (typeof rule === 'function') {
	          rule = {
	            validator: rule
	          };
	        } else {
	          rule = _extends({}, rule);
	        }
	        rule.validator = _this.getValidationMethod(rule);
	        rule.field = z;
	        rule.fullField = rule.fullField || z;
	        rule.type = _this.getType(rule);
	        if (!rule.validator) {
	          return;
	        }
	        series[z] = series[z] || [];
	        series[z].push({
	          rule: rule,
	          value: value,
	          source: source,
	          field: z
	        });
	      });
	    });
	    var errorFields = {};
	    (0, _util.asyncMap)(series, options, function (data, doIt) {
	      var rule = data.rule;
	      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof(rule.fields) === 'object' || _typeof(rule.defaultField) === 'object');
	      deep = deep && (rule.required || !rule.required && data.value);
	      rule.field = data.field;
	      function addFullfield(key, schema) {
	        return _extends({}, schema, {
	          fullField: rule.fullField + '.' + key
	        });
	      }

	      function cb() {
	        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        var errors = e;
	        if (!Array.isArray(errors)) {
	          errors = [errors];
	        }
	        if (errors.length) {
	          (0, _util.warning)('async-validator:', errors);
	        }
	        if (errors.length && rule.message) {
	          errors = [].concat(rule.message);
	        }

	        errors = errors.map((0, _util.complementError)(rule));

	        if ((options.first || options.fieldFirst) && errors.length) {
	          errorFields[rule.field] = 1;
	          return doIt(errors);
	        }
	        if (!deep) {
	          doIt(errors);
	        } else {
	          // if rule is required but the target object
	          // does not exist fail at the rule level and don't
	          // go deeper
	          if (rule.required && !data.value) {
	            if (rule.message) {
	              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
	            } else {
	              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
	            }
	            return doIt(errors);
	          }

	          var fieldsSchema = {};
	          if (rule.defaultField) {
	            for (var k in data.value) {
	              if (data.value.hasOwnProperty(k)) {
	                fieldsSchema[k] = rule.defaultField;
	              }
	            }
	          }
	          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
	          for (var f in fieldsSchema) {
	            if (fieldsSchema.hasOwnProperty(f)) {
	              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
	              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
	            }
	          }
	          var schema = new Schema(fieldsSchema);
	          schema.messages(options.messages);
	          if (data.rule.options) {
	            data.rule.options.messages = options.messages;
	            data.rule.options.error = options.error;
	          }
	          schema.validate(data.value, data.rule.options || options, function (errs) {
	            doIt(errs && errs.length ? errors.concat(errs) : errs);
	          });
	        }
	      }

	      rule.validator(rule, data.value, cb, data.source, options);
	    }, function (results) {
	      complete(results);
	    });
	  },
	  getType: function getType(rule) {
	    if (rule.type === undefined && rule.pattern instanceof RegExp) {
	      rule.type = 'pattern';
	    }
	    if (typeof rule.validator !== 'function' && rule.type && !_validator2["default"].hasOwnProperty(rule.type)) {
	      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
	    }
	    return rule.type || 'string';
	  },
	  getValidationMethod: function getValidationMethod(rule) {
	    if (typeof rule.validator === 'function') {
	      return rule.validator;
	    }
	    var keys = Object.keys(rule);
	    var messageIndex = keys.indexOf('message');
	    if (messageIndex !== -1) {
	      keys.splice(messageIndex, 1);
	    }
	    if (keys.length === 1 && keys[0] === 'required') {
	      return _validator2["default"].required;
	    }
	    return _validator2["default"][this.getType(rule)] || false;
	  }
	};

	Schema.register = function register(type, validator) {
	  if (typeof validator !== 'function') {
	    throw new Error('Cannot register a validator by type, validator is not a function');
	  }
	  _validator2["default"][type] = validator;
	};

	Schema.messages = _messages2.messages;

	exports["default"] = Schema;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.newMessages = newMessages;
	function newMessages() {
	  return {
	    "default": 'Validation error on field %s',
	    required: '%s is required',
	    "enum": '%s must be one of %s',
	    whitespace: '%s cannot be empty',
	    date: {
	      format: '%s date %s is invalid for format %s',
	      parse: '%s date could not be parsed, %s is invalid ',
	      invalid: '%s date %s is invalid'
	    },
	    types: {
	      string: '%s is not a %s',
	      method: '%s is not a %s (function)',
	      array: '%s is not an %s',
	      object: '%s is not an %s',
	      number: '%s is not a %s',
	      date: '%s is not a %s',
	      "boolean": '%s is not a %s',
	      integer: '%s is not an %s',
	      "float": '%s is not a %s',
	      regexp: '%s is not a valid %s',
	      email: '%s is not a valid %s',
	      url: '%s is not a valid %s',
	      hex: '%s is not a valid %s'
	    },
	    string: {
	      len: '%s must be exactly %s characters',
	      min: '%s must be at least %s characters',
	      max: '%s cannot be longer than %s characters',
	      range: '%s must be between %s and %s characters'
	    },
	    number: {
	      len: '%s must equal %s',
	      min: '%s cannot be less than %s',
	      max: '%s cannot be greater than %s',
	      range: '%s must be between %s and %s'
	    },
	    array: {
	      len: '%s must be exactly %s in length',
	      min: '%s cannot be less than %s in length',
	      max: '%s cannot be greater than %s in length',
	      range: '%s must be between %s and %s in length'
	    },
	    pattern: {
	      mismatch: '%s value %s does not match pattern %s'
	    },
	    clone: function clone() {
	      var cloned = JSON.parse(JSON.stringify(this));
	      cloned.clone = this.clone;
	      return cloned;
	    }
	  };
	}

	var messages = exports.messages = newMessages();

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(1);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	var ENUM = 'enum';

	/**
	 *  Rule for validating a value exists in an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, source, errors, options) {
	  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
	  if (rule[ENUM].indexOf(value) === -1) {
	    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
	  }
	}

	exports["default"] = enumerable;
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(1);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating a regular expression pattern.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, source, errors, options) {
	  if (rule.pattern instanceof RegExp) {
	    if (!rule.pattern.test(value)) {
	      errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	    }
	  }
	}

	exports["default"] = pattern;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(1);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating minimum and maximum allowed values.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function range(rule, value, source, errors, options) {
	  var len = typeof rule.len === 'number';
	  var min = typeof rule.min === 'number';
	  var max = typeof rule.max === 'number';
	  var val = value;
	  var key = null;
	  var num = typeof value === 'number';
	  var str = typeof value === 'string';
	  var arr = Array.isArray(value);
	  if (num) {
	    key = 'number';
	  } else if (str) {
	    key = 'string';
	  } else if (arr) {
	    key = 'array';
	  }
	  // if the value is not of a supported type for range validation
	  // the validation rule rule should use the
	  // type property to also test for a particular type
	  if (!key) {
	    return false;
	  }
	  if (str || arr) {
	    val = value.length;
	  }
	  if (len) {
	    if (val !== rule.len) {
	      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
	    }
	  } else if (min && !max && val < rule.min) {
	    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
	  } else if (max && !min && val > rule.max) {
	    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
	  } else if (min && max && (val < rule.min || val > rule.max)) {
	    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
	  }
	}

	exports["default"] = range;
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(1);

	var util = _interopRequireWildcard(_util);

	var _required = __webpack_require__(40);

	var _required2 = _interopRequireDefault(_required);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/* eslint max-len:0 */

	var pattern = {
	  // http://emailregex.com/
	  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
	  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	};

	var types = {
	  integer: function integer(value) {
	    return types.number(value) && parseInt(value, 10) === value;
	  },
	  "float": function float(value) {
	    return types.number(value) && !types.integer(value);
	  },
	  array: function array(value) {
	    return Array.isArray(value);
	  },
	  regexp: function regexp(value) {
	    if (value instanceof RegExp) {
	      return true;
	    }
	    try {
	      return !!new RegExp(value);
	    } catch (e) {
	      return false;
	    }
	  },
	  date: function date(value) {
	    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
	  },
	  number: function number(value) {
	    if (isNaN(value)) {
	      return false;
	    }
	    return typeof value === 'number';
	  },
	  object: function object(value) {
	    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !types.array(value);
	  },
	  method: function method(value) {
	    return typeof value === 'function';
	  },
	  email: function email(value) {
	    return typeof value === 'string' && !!value.match(pattern.email);
	  },
	  url: function url(value) {
	    return typeof value === 'string' && !!value.match(pattern.url);
	  },
	  hex: function hex(value) {
	    return typeof value === 'string' && !!value.match(pattern.hex);
	  }
	};

	/**
	 *  Rule for validating the type of a value.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function type(rule, value, source, errors, options) {
	  if (rule.required && value === undefined) {
	    (0, _required2["default"])(rule, value, source, errors, options);
	    return;
	  }
	  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
	  var ruleType = rule.type;
	  if (custom.indexOf(ruleType) > -1) {
	    if (!types[ruleType](value)) {
	      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	    }
	    // straight typeof check
	  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rule.type) {
	    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	  }
	}

	exports["default"] = type;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(1);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating whitespace.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function whitespace(rule, value, source, errors, options) {
	  if (/^\s+$/.test(value) || value === '') {
	    errors.push(util.format(options.messages.whitespace, rule.fullField));
	  }
	}

	exports["default"] = whitespace;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates an array.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function array(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, 'array');
	    if (!(0, _util.isEmptyValue)(value, 'array')) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = array;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(1);

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a boolean.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function boolean(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = boolean;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function date(rule, value, callback, source, options) {
	  // console.log('integer rule called %j', rule);
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  // console.log('validate on %s value', value);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      if (value) {
	        _rule2["default"].range(rule, value.getTime(), source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}

	exports["default"] = date;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var ENUM = 'enum';

	/**
	 *  Validates an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value) {
	      _rule2["default"][ENUM](rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = enumerable;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number is a floating point number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function floatFn(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = floatFn;
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  string: __webpack_require__(97),
	  method: __webpack_require__(91),
	  number: __webpack_require__(92),
	  "boolean": __webpack_require__(85),
	  regexp: __webpack_require__(95),
	  integer: __webpack_require__(90),
	  "float": __webpack_require__(88),
	  array: __webpack_require__(84),
	  object: __webpack_require__(93),
	  "enum": __webpack_require__(87),
	  pattern: __webpack_require__(94),
	  email: __webpack_require__(23),
	  url: __webpack_require__(23),
	  date: __webpack_require__(86),
	  hex: __webpack_require__(23),
	  required: __webpack_require__(96)
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number is an integer.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function integer(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = integer;
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a function.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function method(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = method;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function number(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = number;
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates an object.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function object(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = object;
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a regular expression pattern.
	 *
	 *  Performs validation when a rule only contains
	 *  a pattern property but is not declared as a string type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2["default"].pattern(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = pattern;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates the regular expression type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function regexp(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = regexp;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function required(rule, value, callback, source, options) {
	  var errors = [];
	  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  _rule2["default"].required(rule, value, source, errors, options, type);
	  callback(errors);
	}

	exports["default"] = required;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(3);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Performs validation for string types.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function string(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, 'string');
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	      _rule2["default"].pattern(rule, value, source, errors, options);
	      if (rule.whitespace === true) {
	        _rule2["default"].whitespace(rule, value, source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}

	exports["default"] = string;
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(24);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

	/**
	 * Represents a group of disposable resources that are disposed together.
	 */

	var CompositeDisposable = (function () {
	  function CompositeDisposable() {
	    for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
	      disposables[_key] = arguments[_key];
	    }

	    _classCallCheck(this, CompositeDisposable);

	    if (Array.isArray(disposables[0]) && disposables.length === 1) {
	      disposables = disposables[0];
	    }

	    for (var i = 0; i < disposables.length; i++) {
	      if (!_isDisposable2['default'](disposables[i])) {
	        throw new Error('Expected a disposable');
	      }
	    }

	    this.disposables = disposables;
	    this.isDisposed = false;
	  }

	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Disposable} item Disposable to add.
	   */

	  CompositeDisposable.prototype.add = function add(item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	    }
	  };

	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Disposable} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */

	  CompositeDisposable.prototype.remove = function remove(item) {
	    if (this.isDisposed) {
	      return false;
	    }

	    var index = this.disposables.indexOf(item);
	    if (index === -1) {
	      return false;
	    }

	    this.disposables.splice(index, 1);
	    item.dispose();
	    return true;
	  };

	  /**
	   * Disposes all disposables in the group and removes them from the group.
	   */

	  CompositeDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    var len = this.disposables.length;
	    var currentDisposables = new Array(len);
	    for (var i = 0; i < len; i++) {
	      currentDisposables[i] = this.disposables[i];
	    }

	    this.isDisposed = true;
	    this.disposables = [];
	    this.length = 0;

	    for (var i = 0; i < len; i++) {
	      currentDisposables[i].dispose();
	    }
	  };

	  return CompositeDisposable;
	})();

	exports['default'] = CompositeDisposable;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.__esModule = true;
	var noop = function noop() {};

	/**
	 * The basic disposable.
	 */

	var Disposable = (function () {
	  function Disposable(action) {
	    _classCallCheck(this, Disposable);

	    this.isDisposed = false;
	    this.action = action || noop;
	  }

	  Disposable.prototype.dispose = function dispose() {
	    if (!this.isDisposed) {
	      this.action.call(null);
	      this.isDisposed = true;
	    }
	  };

	  _createClass(Disposable, null, [{
	    key: "empty",
	    enumerable: true,
	    value: { dispose: noop }
	  }]);

	  return Disposable;
	})();

	exports["default"] = Disposable;
	module.exports = exports["default"];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(24);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

	var SerialDisposable = (function () {
	  function SerialDisposable() {
	    _classCallCheck(this, SerialDisposable);

	    this.isDisposed = false;
	    this.current = null;
	  }

	  /**
	   * Gets the underlying disposable.
	   * @return The underlying disposable.
	   */

	  SerialDisposable.prototype.getDisposable = function getDisposable() {
	    return this.current;
	  };

	  /**
	   * Sets the underlying disposable.
	   * @param {Disposable} value The new underlying disposable.
	   */

	  SerialDisposable.prototype.setDisposable = function setDisposable() {
	    var value = arguments[0] === undefined ? null : arguments[0];

	    if (value != null && !_isDisposable2['default'](value)) {
	      throw new Error('Expected either an empty value or a valid disposable');
	    }

	    var isDisposed = this.isDisposed;
	    var previous = undefined;

	    if (!isDisposed) {
	      previous = this.current;
	      this.current = value;
	    }

	    if (previous) {
	      previous.dispose();
	    }

	    if (isDisposed && value) {
	      value.dispose();
	    }
	  };

	  /**
	   * Disposes the underlying disposable as well as all future replacements.
	   */

	  SerialDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    this.isDisposed = true;
	    var previous = this.current;
	    this.current = null;

	    if (previous) {
	      previous.dispose();
	    }
	  };

	  return SerialDisposable;
	})();

	exports['default'] = SerialDisposable;
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;

	var _isDisposable2 = __webpack_require__(24);

	var _isDisposable3 = _interopRequireWildcard(_isDisposable2);

	exports.isDisposable = _isDisposable3['default'];

	var _Disposable2 = __webpack_require__(99);

	var _Disposable3 = _interopRequireWildcard(_Disposable2);

	exports.Disposable = _Disposable3['default'];

	var _CompositeDisposable2 = __webpack_require__(98);

	var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);

	exports.CompositeDisposable = _CompositeDisposable3['default'];

	var _SerialDisposable2 = __webpack_require__(100);

	var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);

	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _createStore = __webpack_require__(114);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _reducers = __webpack_require__(110);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _dragDrop = __webpack_require__(12);

	var dragDropActions = _interopRequireWildcard(_dragDrop);

	var _DragDropMonitor = __webpack_require__(103);

	var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragDropManager = function () {
		function DragDropManager(createBackend) {
			var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			_classCallCheck(this, DragDropManager);

			var store = (0, _createStore2.default)(_reducers2.default);
			this.context = context;
			this.store = store;
			this.monitor = new _DragDropMonitor2.default(store);
			this.registry = this.monitor.registry;
			this.backend = createBackend(this);

			store.subscribe(this.handleRefCountChange.bind(this));
		}

		_createClass(DragDropManager, [{
			key: 'handleRefCountChange',
			value: function handleRefCountChange() {
				var shouldSetUp = this.store.getState().refCount > 0;
				if (shouldSetUp && !this.isSetUp) {
					this.backend.setup();
					this.isSetUp = true;
				} else if (!shouldSetUp && this.isSetUp) {
					this.backend.teardown();
					this.isSetUp = false;
				}
			}
		}, {
			key: 'getContext',
			value: function getContext() {
				return this.context;
			}
		}, {
			key: 'getMonitor',
			value: function getMonitor() {
				return this.monitor;
			}
		}, {
			key: 'getBackend',
			value: function getBackend() {
				return this.backend;
			}
		}, {
			key: 'getRegistry',
			value: function getRegistry() {
				return this.registry;
			}
		}, {
			key: 'getActions',
			value: function getActions() {
				var manager = this;
				var dispatch = this.store.dispatch;


				function bindActionCreator(actionCreator) {
					return function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						var action = actionCreator.apply(manager, args);
						if (typeof action !== 'undefined') {
							dispatch(action);
						}
					};
				}

				return Object.keys(dragDropActions).filter(function (key) {
					return typeof dragDropActions[key] === 'function';
				}).reduce(function (boundActions, key) {
					var action = dragDropActions[key];
					boundActions[key] = bindActionCreator(action); // eslint-disable-line no-param-reassign
					return boundActions;
				}, {});
			}
		}]);

		return DragDropManager;
	}();

	exports.default = DragDropManager;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(6);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _matchesType = __webpack_require__(43);

	var _matchesType2 = _interopRequireDefault(_matchesType);

	var _HandlerRegistry = __webpack_require__(106);

	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

	var _dragOffset = __webpack_require__(42);

	var _dirtyHandlerIds = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragDropMonitor = function () {
		function DragDropMonitor(store) {
			_classCallCheck(this, DragDropMonitor);

			this.store = store;
			this.registry = new _HandlerRegistry2.default(store);
		}

		_createClass(DragDropMonitor, [{
			key: 'subscribeToStateChange',
			value: function subscribeToStateChange(listener) {
				var _this = this;

				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var handlerIds = options.handlerIds;

				(0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');
				(0, _invariant2.default)(typeof handlerIds === 'undefined' || (0, _isArray2.default)(handlerIds), 'handlerIds, when specified, must be an array of strings.');

				var prevStateId = this.store.getState().stateId;
				var handleChange = function handleChange() {
					var state = _this.store.getState();
					var currentStateId = state.stateId;
					try {
						var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, _dirtyHandlerIds.areDirty)(state.dirtyHandlerIds, handlerIds);

						if (!canSkipListener) {
							listener();
						}
					} finally {
						prevStateId = currentStateId;
					}
				};

				return this.store.subscribe(handleChange);
			}
		}, {
			key: 'subscribeToOffsetChange',
			value: function subscribeToOffsetChange(listener) {
				var _this2 = this;

				(0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');

				var previousState = this.store.getState().dragOffset;
				var handleChange = function handleChange() {
					var nextState = _this2.store.getState().dragOffset;
					if (nextState === previousState) {
						return;
					}

					previousState = nextState;
					listener();
				};

				return this.store.subscribe(handleChange);
			}
		}, {
			key: 'canDragSource',
			value: function canDragSource(sourceId) {
				var source = this.registry.getSource(sourceId);
				(0, _invariant2.default)(source, 'Expected to find a valid source.');

				if (this.isDragging()) {
					return false;
				}

				return source.canDrag(this, sourceId);
			}
		}, {
			key: 'canDropOnTarget',
			value: function canDropOnTarget(targetId) {
				var target = this.registry.getTarget(targetId);
				(0, _invariant2.default)(target, 'Expected to find a valid target.');

				if (!this.isDragging() || this.didDrop()) {
					return false;
				}

				var targetType = this.registry.getTargetType(targetId);
				var draggedItemType = this.getItemType();
				return (0, _matchesType2.default)(targetType, draggedItemType) && target.canDrop(this, targetId);
			}
		}, {
			key: 'isDragging',
			value: function isDragging() {
				return Boolean(this.getItemType());
			}
		}, {
			key: 'isDraggingSource',
			value: function isDraggingSource(sourceId) {
				var source = this.registry.getSource(sourceId, true);
				(0, _invariant2.default)(source, 'Expected to find a valid source.');

				if (!this.isDragging() || !this.isSourcePublic()) {
					return false;
				}

				var sourceType = this.registry.getSourceType(sourceId);
				var draggedItemType = this.getItemType();
				if (sourceType !== draggedItemType) {
					return false;
				}

				return source.isDragging(this, sourceId);
			}
		}, {
			key: 'isOverTarget',
			value: function isOverTarget(targetId) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { shallow: false };
				var shallow = options.shallow;

				if (!this.isDragging()) {
					return false;
				}

				var targetType = this.registry.getTargetType(targetId);
				var draggedItemType = this.getItemType();
				if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
					return false;
				}

				var targetIds = this.getTargetIds();
				if (!targetIds.length) {
					return false;
				}

				var index = targetIds.indexOf(targetId);
				if (shallow) {
					return index === targetIds.length - 1;
				} else {
					return index > -1;
				}
			}
		}, {
			key: 'getItemType',
			value: function getItemType() {
				return this.store.getState().dragOperation.itemType;
			}
		}, {
			key: 'getItem',
			value: function getItem() {
				return this.store.getState().dragOperation.item;
			}
		}, {
			key: 'getSourceId',
			value: function getSourceId() {
				return this.store.getState().dragOperation.sourceId;
			}
		}, {
			key: 'getTargetIds',
			value: function getTargetIds() {
				return this.store.getState().dragOperation.targetIds;
			}
		}, {
			key: 'getDropResult',
			value: function getDropResult() {
				return this.store.getState().dragOperation.dropResult;
			}
		}, {
			key: 'didDrop',
			value: function didDrop() {
				return this.store.getState().dragOperation.didDrop;
			}
		}, {
			key: 'isSourcePublic',
			value: function isSourcePublic() {
				return this.store.getState().dragOperation.isSourcePublic;
			}
		}, {
			key: 'getInitialClientOffset',
			value: function getInitialClientOffset() {
				return this.store.getState().dragOffset.initialClientOffset;
			}
		}, {
			key: 'getInitialSourceClientOffset',
			value: function getInitialSourceClientOffset() {
				return this.store.getState().dragOffset.initialSourceClientOffset;
			}
		}, {
			key: 'getClientOffset',
			value: function getClientOffset() {
				return this.store.getState().dragOffset.clientOffset;
			}
		}, {
			key: 'getSourceClientOffset',
			value: function getSourceClientOffset() {
				return (0, _dragOffset.getSourceClientOffset)(this.store.getState().dragOffset);
			}
		}, {
			key: 'getDifferenceFromInitialOffset',
			value: function getDifferenceFromInitialOffset() {
				return (0, _dragOffset.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
			}
		}]);

		return DragDropMonitor;
	}();

	exports.default = DragDropMonitor;

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragSource = function () {
		function DragSource() {
			_classCallCheck(this, DragSource);
		}

		_createClass(DragSource, [{
			key: "canDrag",
			value: function canDrag() {
				return true;
			}
		}, {
			key: "isDragging",
			value: function isDragging(monitor, handle) {
				return handle === monitor.getSourceId();
			}
		}, {
			key: "endDrag",
			value: function endDrag() {}
		}]);

		return DragSource;
	}();

	exports.default = DragSource;

/***/ },
/* 105 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DropTarget = function () {
		function DropTarget() {
			_classCallCheck(this, DropTarget);
		}

		_createClass(DropTarget, [{
			key: "canDrop",
			value: function canDrop() {
				return true;
			}
		}, {
			key: "hover",
			value: function hover() {}
		}, {
			key: "drop",
			value: function drop() {}
		}]);

		return DropTarget;
	}();

	exports.default = DropTarget;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(6);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _asap = __webpack_require__(75);

	var _asap2 = _interopRequireDefault(_asap);

	var _registry = __webpack_require__(13);

	var _getNextUniqueId = __webpack_require__(113);

	var _getNextUniqueId2 = _interopRequireDefault(_getNextUniqueId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HandlerRoles = {
		SOURCE: 'SOURCE',
		TARGET: 'TARGET'
	};

	function validateSourceContract(source) {
		(0, _invariant2.default)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
		(0, _invariant2.default)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
		(0, _invariant2.default)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
	}

	function validateTargetContract(target) {
		(0, _invariant2.default)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
		(0, _invariant2.default)(typeof target.hover === 'function', 'Expected hover to be a function.');
		(0, _invariant2.default)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
	}

	function validateType(type, allowArray) {
		if (allowArray && (0, _isArray2.default)(type)) {
			type.forEach(function (t) {
				return validateType(t, false);
			});
			return;
		}

		(0, _invariant2.default)(typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
	}

	function getNextHandlerId(role) {
		var id = (0, _getNextUniqueId2.default)().toString();
		switch (role) {
			case HandlerRoles.SOURCE:
				return 'S' + id;
			case HandlerRoles.TARGET:
				return 'T' + id;
			default:
				(0, _invariant2.default)(false, 'Unknown role: ' + role);
		}
	}

	function parseRoleFromHandlerId(handlerId) {
		switch (handlerId[0]) {
			case 'S':
				return HandlerRoles.SOURCE;
			case 'T':
				return HandlerRoles.TARGET;
			default:
				(0, _invariant2.default)(false, 'Cannot parse handler ID: ' + handlerId);
		}
	}

	var HandlerRegistry = function () {
		function HandlerRegistry(store) {
			_classCallCheck(this, HandlerRegistry);

			this.store = store;

			this.types = {};
			this.handlers = {};

			this.pinnedSourceId = null;
			this.pinnedSource = null;
		}

		_createClass(HandlerRegistry, [{
			key: 'addSource',
			value: function addSource(type, source) {
				validateType(type);
				validateSourceContract(source);

				var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
				this.store.dispatch((0, _registry.addSource)(sourceId));
				return sourceId;
			}
		}, {
			key: 'addTarget',
			value: function addTarget(type, target) {
				validateType(type, true);
				validateTargetContract(target);

				var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
				this.store.dispatch((0, _registry.addTarget)(targetId));
				return targetId;
			}
		}, {
			key: 'addHandler',
			value: function addHandler(role, type, handler) {
				var id = getNextHandlerId(role);
				this.types[id] = type;
				this.handlers[id] = handler;

				return id;
			}
		}, {
			key: 'containsHandler',
			value: function containsHandler(handler) {
				var _this = this;

				return Object.keys(this.handlers).some(function (key) {
					return _this.handlers[key] === handler;
				});
			}
		}, {
			key: 'getSource',
			value: function getSource(sourceId, includePinned) {
				(0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');

				var isPinned = includePinned && sourceId === this.pinnedSourceId;
				var source = isPinned ? this.pinnedSource : this.handlers[sourceId];

				return source;
			}
		}, {
			key: 'getTarget',
			value: function getTarget(targetId) {
				(0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
				return this.handlers[targetId];
			}
		}, {
			key: 'getSourceType',
			value: function getSourceType(sourceId) {
				(0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');
				return this.types[sourceId];
			}
		}, {
			key: 'getTargetType',
			value: function getTargetType(targetId) {
				(0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
				return this.types[targetId];
			}
		}, {
			key: 'isSourceId',
			value: function isSourceId(handlerId) {
				var role = parseRoleFromHandlerId(handlerId);
				return role === HandlerRoles.SOURCE;
			}
		}, {
			key: 'isTargetId',
			value: function isTargetId(handlerId) {
				var role = parseRoleFromHandlerId(handlerId);
				return role === HandlerRoles.TARGET;
			}
		}, {
			key: 'removeSource',
			value: function removeSource(sourceId) {
				var _this2 = this;

				(0, _invariant2.default)(this.getSource(sourceId), 'Expected an existing source.');
				this.store.dispatch((0, _registry.removeSource)(sourceId));

				(0, _asap2.default)(function () {
					delete _this2.handlers[sourceId];
					delete _this2.types[sourceId];
				});
			}
		}, {
			key: 'removeTarget',
			value: function removeTarget(targetId) {
				var _this3 = this;

				(0, _invariant2.default)(this.getTarget(targetId), 'Expected an existing target.');
				this.store.dispatch((0, _registry.removeTarget)(targetId));

				(0, _asap2.default)(function () {
					delete _this3.handlers[targetId];
					delete _this3.types[targetId];
				});
			}
		}, {
			key: 'pinSource',
			value: function pinSource(sourceId) {
				var source = this.getSource(sourceId);
				(0, _invariant2.default)(source, 'Expected an existing source.');

				this.pinnedSourceId = sourceId;
				this.pinnedSource = source;
			}
		}, {
			key: 'unpinSource',
			value: function unpinSource() {
				(0, _invariant2.default)(this.pinnedSource, 'No source is pinned at the time.');

				this.pinnedSourceId = null;
				this.pinnedSource = null;
			}
		}]);

		return HandlerRegistry;
	}();

	exports.default = HandlerRegistry;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createBackend;

	var _noop = __webpack_require__(58);

	var _noop2 = _interopRequireDefault(_noop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TestBackend = function () {
		function TestBackend(manager) {
			_classCallCheck(this, TestBackend);

			this.actions = manager.getActions();
		}

		_createClass(TestBackend, [{
			key: 'setup',
			value: function setup() {
				this.didCallSetup = true;
			}
		}, {
			key: 'teardown',
			value: function teardown() {
				this.didCallTeardown = true;
			}
		}, {
			key: 'connectDragSource',
			value: function connectDragSource() {
				return _noop2.default;
			}
		}, {
			key: 'connectDragPreview',
			value: function connectDragPreview() {
				return _noop2.default;
			}
		}, {
			key: 'connectDropTarget',
			value: function connectDropTarget() {
				return _noop2.default;
			}
		}, {
			key: 'simulateBeginDrag',
			value: function simulateBeginDrag(sourceIds, options) {
				this.actions.beginDrag(sourceIds, options);
			}
		}, {
			key: 'simulatePublishDragSource',
			value: function simulatePublishDragSource() {
				this.actions.publishDragSource();
			}
		}, {
			key: 'simulateHover',
			value: function simulateHover(targetIds, options) {
				this.actions.hover(targetIds, options);
			}
		}, {
			key: 'simulateDrop',
			value: function simulateDrop() {
				this.actions.drop();
			}
		}, {
			key: 'simulateEndDrag',
			value: function simulateEndDrag() {
				this.actions.endDrag();
			}
		}]);

		return TestBackend;
	}();

	function createBackend(manager) {
		return new TestBackend(manager);
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DragDropManager = __webpack_require__(102);

	Object.defineProperty(exports, 'DragDropManager', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragDropManager).default;
	  }
	});

	var _DragSource = __webpack_require__(104);

	Object.defineProperty(exports, 'DragSource', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragSource).default;
	  }
	});

	var _DropTarget = __webpack_require__(105);

	Object.defineProperty(exports, 'DropTarget', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropTarget).default;
	  }
	});

	var _createTestBackend = __webpack_require__(107);

	Object.defineProperty(exports, 'createTestBackend', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_createTestBackend).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = dragOperation;

	var _without = __webpack_require__(59);

	var _without2 = _interopRequireDefault(_without);

	var _dragDrop = __webpack_require__(12);

	var _registry = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
		itemType: null,
		item: null,
		sourceId: null,
		targetIds: [],
		dropResult: null,
		didDrop: false,
		isSourcePublic: null
	};

	function dragOperation() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			case _dragDrop.BEGIN_DRAG:
				return _extends({}, state, {
					itemType: action.itemType,
					item: action.item,
					sourceId: action.sourceId,
					isSourcePublic: action.isSourcePublic,
					dropResult: null,
					didDrop: false
				});
			case _dragDrop.PUBLISH_DRAG_SOURCE:
				return _extends({}, state, {
					isSourcePublic: true
				});
			case _dragDrop.HOVER:
				return _extends({}, state, {
					targetIds: action.targetIds
				});
			case _registry.REMOVE_TARGET:
				if (state.targetIds.indexOf(action.targetId) === -1) {
					return state;
				}
				return _extends({}, state, {
					targetIds: (0, _without2.default)(state.targetIds, action.targetId)
				});
			case _dragDrop.DROP:
				return _extends({}, state, {
					dropResult: action.dropResult,
					didDrop: true,
					targetIds: []
				});
			case _dragDrop.END_DRAG:
				return _extends({}, state, {
					itemType: null,
					item: null,
					sourceId: null,
					dropResult: null,
					didDrop: false,
					isSourcePublic: null,
					targetIds: []
				});
			default:
				return state;
		}
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = reduce;

	var _dragOffset = __webpack_require__(42);

	var _dragOffset2 = _interopRequireDefault(_dragOffset);

	var _dragOperation = __webpack_require__(109);

	var _dragOperation2 = _interopRequireDefault(_dragOperation);

	var _refCount = __webpack_require__(111);

	var _refCount2 = _interopRequireDefault(_refCount);

	var _dirtyHandlerIds = __webpack_require__(41);

	var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);

	var _stateId = __webpack_require__(112);

	var _stateId2 = _interopRequireDefault(_stateId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function reduce() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var action = arguments[1];

		return {
			dirtyHandlerIds: (0, _dirtyHandlerIds2.default)(state.dirtyHandlerIds, action, state.dragOperation),
			dragOffset: (0, _dragOffset2.default)(state.dragOffset, action),
			refCount: (0, _refCount2.default)(state.refCount, action),
			dragOperation: (0, _dragOperation2.default)(state.dragOperation, action),
			stateId: (0, _stateId2.default)(state.stateId)
		};
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = refCount;

	var _registry = __webpack_require__(13);

	function refCount() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var action = arguments[1];

		switch (action.type) {
			case _registry.ADD_SOURCE:
			case _registry.ADD_TARGET:
				return state + 1;
			case _registry.REMOVE_SOURCE:
			case _registry.REMOVE_TARGET:
				return state - 1;
			default:
				return state;
		}
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = stateId;
	function stateId() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

		return state + 1;
	}

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = getNextUniqueId;
	var nextUniqueId = 0;

	function getNextUniqueId() {
		return nextUniqueId++;
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(7);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(206);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'

	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(143),
	    hashDelete = __webpack_require__(144),
	    hashGet = __webpack_require__(145),
	    hashHas = __webpack_require__(146),
	    hashSet = __webpack_require__(147);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(153),
	    listCacheDelete = __webpack_require__(154),
	    listCacheGet = __webpack_require__(155),
	    listCacheHas = __webpack_require__(156),
	    listCacheSet = __webpack_require__(157);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17),
	    root = __webpack_require__(9);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17),
	    root = __webpack_require__(9);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 119 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(132),
	    isArguments = __webpack_require__(55),
	    isArray = __webpack_require__(6),
	    isBuffer = __webpack_require__(178),
	    isIndex = __webpack_require__(52),
	    isTypedArray = __webpack_require__(179);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(46),
	    eq = __webpack_require__(19);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(123),
	    baseIsNaN = __webpack_require__(127),
	    strictIndexOf = __webpack_require__(172);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(25),
	    arrayIncludes = __webpack_require__(27),
	    arrayIncludesWith = __webpack_require__(28),
	    arrayMap = __webpack_require__(29),
	    baseUnary = __webpack_require__(30),
	    cacheHas = __webpack_require__(31);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
	function baseIntersection(arrays, iteratee, comparator) {
	  var includes = comparator ? arrayIncludesWith : arrayIncludes,
	      length = arrays[0].length,
	      othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(othLength),
	      maxLength = Infinity,
	      result = [];

	  while (othIndex--) {
	    var array = arrays[othIndex];
	    if (othIndex && iteratee) {
	      array = arrayMap(array, baseUnary(iteratee));
	    }
	    maxLength = nativeMin(array.length, maxLength);
	    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	      ? new SetCache(othIndex && array)
	      : undefined;
	  }
	  array = arrays[0];

	  var index = -1,
	      seen = caches[0];

	  outer:
	  while (++index < length && result.length < maxLength) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (!(seen
	          ? cacheHas(seen, computed)
	          : includes(result, computed, comparator)
	        )) {
	      othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if (!(cache
	              ? cacheHas(cache, computed)
	              : includes(arrays[othIndex], computed, comparator))
	            ) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseIntersection;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(15),
	    isObjectLike = __webpack_require__(11);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(56),
	    isMasked = __webpack_require__(151),
	    isObject = __webpack_require__(10),
	    toSource = __webpack_require__(173);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(15),
	    isLength = __webpack_require__(57),
	    isObjectLike = __webpack_require__(11);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10),
	    isPrototype = __webpack_require__(152),
	    nativeKeysIn = __webpack_require__(163);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(175),
	    defineProperty = __webpack_require__(50),
	    identity = __webpack_require__(54);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ },
/* 132 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(47),
	    baseFlatten = __webpack_require__(48),
	    baseUniq = __webpack_require__(49);

	/**
	 * The base implementation of methods like `_.xor`, without support for
	 * iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of values.
	 */
	function baseXor(arrays, iteratee, comparator) {
	  var length = arrays.length;
	  if (length < 2) {
	    return length ? baseUniq(arrays[0]) : [];
	  }
	  var index = -1,
	      result = Array(length);

	  while (++index < length) {
	    var array = arrays[index],
	        othIndex = -1;

	    while (++othIndex < length) {
	      if (othIndex != index) {
	        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
	      }
	    }
	  }
	  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
	}

	module.exports = baseXor;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(20);

	/**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array|Object} Returns the cast array-like object.
	 */
	function castArrayLikeObject(value) {
	  return isArrayLikeObject(value) ? value : [];
	}

	module.exports = castArrayLikeObject;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(122),
	    baseAssignValue = __webpack_require__(46);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(9);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(8),
	    isIterateeCall = __webpack_require__(149);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(118),
	    noop = __webpack_require__(58),
	    setToArray = __webpack_require__(53);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(19);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	 * of source objects to the destination object for all destination properties
	 * that resolve to `undefined`.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function customDefaultsAssignIn(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}

	module.exports = customDefaultsAssignIn;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(166);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 142 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(18);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 144 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(18);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(18);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(18);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26),
	    isArguments = __webpack_require__(55),
	    isArray = __webpack_require__(6);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(19),
	    isArrayLike = __webpack_require__(32),
	    isIndex = __webpack_require__(52),
	    isObject = __webpack_require__(10);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 150 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(136);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 152 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 153 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(115),
	    ListCache = __webpack_require__(116),
	    Map = __webpack_require__(117);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(16);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(16);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(16);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(16);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 163 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(51);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ },
/* 165 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 166 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(45);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ },
/* 168 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 169 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(131),
	    shortOut = __webpack_require__(171);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ },
/* 171 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ },
/* 172 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ },
/* 173 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(135),
	    createAssigner = __webpack_require__(137),
	    keysIn = __webpack_require__(180);

	/**
	 * This method is like `_.assignIn` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extendWith
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignInWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keysIn(source), object, customizer);
	});

	module.exports = assignInWith;


/***/ },
/* 175 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(45),
	    assignInWith = __webpack_require__(174),
	    baseRest = __webpack_require__(8),
	    customDefaultsAssignIn = __webpack_require__(139);

	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var defaults = baseRest(function(args) {
	  args.push(undefined, customDefaultsAssignIn);
	  return apply(assignInWith, undefined, args);
	});

	module.exports = defaults;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(29),
	    baseIntersection = __webpack_require__(125),
	    baseRest = __webpack_require__(8),
	    castArrayLikeObject = __webpack_require__(134);

	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of intersecting values.
	 * @example
	 *
	 * _.intersection([2, 1], [2, 3]);
	 * // => [2]
	 */
	var intersection = baseRest(function(arrays) {
	  var mapped = arrayMap(arrays, castArrayLikeObject);
	  return (mapped.length && mapped[0] === arrays[0])
	    ? baseIntersection(mapped)
	    : [];
	});

	module.exports = intersection;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(9),
	    stubFalse = __webpack_require__(182);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(129),
	    baseUnary = __webpack_require__(30),
	    nodeUtil = __webpack_require__(164);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(120),
	    baseKeysIn = __webpack_require__(130),
	    isArrayLike = __webpack_require__(32);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(44);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 182 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(48),
	    baseRest = __webpack_require__(8),
	    baseUniq = __webpack_require__(49),
	    isArrayLikeObject = __webpack_require__(20);

	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([2], [1, 2]);
	 * // => [2, 1]
	 */
	var union = baseRest(function(arrays) {
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});

	module.exports = union;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(119),
	    baseRest = __webpack_require__(8),
	    baseXor = __webpack_require__(133),
	    isArrayLikeObject = __webpack_require__(20);

	/**
	 * Creates an array of unique values that is the
	 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	 * of the given arrays. The order of result values is determined by the order
	 * they occur in the arrays.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.without
	 * @example
	 *
	 * _.xor([2, 1], [2, 3]);
	 * // => [1, 3]
	 */
	var xor = baseRest(function(arrays) {
	  return baseXor(arrayFilter(arrays, isArrayLikeObject));
	});

	module.exports = xor;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodashUnion = __webpack_require__(183);

	var _lodashUnion2 = _interopRequireDefault(_lodashUnion);

	var _lodashWithout = __webpack_require__(59);

	var _lodashWithout2 = _interopRequireDefault(_lodashWithout);

	var EnterLeaveCounter = (function () {
	  function EnterLeaveCounter() {
	    _classCallCheck(this, EnterLeaveCounter);

	    this.entered = [];
	  }

	  EnterLeaveCounter.prototype.enter = function enter(enteringNode) {
	    var previousLength = this.entered.length;

	    this.entered = _lodashUnion2['default'](this.entered.filter(function (node) {
	      return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
	    }), [enteringNode]);

	    return previousLength === 0 && this.entered.length > 0;
	  };

	  EnterLeaveCounter.prototype.leave = function leave(leavingNode) {
	    var previousLength = this.entered.length;

	    this.entered = _lodashWithout2['default'](this.entered.filter(function (node) {
	      return document.documentElement.contains(node);
	    }), leavingNode);

	    return previousLength > 0 && this.entered.length === 0;
	  };

	  EnterLeaveCounter.prototype.reset = function reset() {
	    this.entered = [];
	  };

	  return EnterLeaveCounter;
	})();

	exports['default'] = EnterLeaveCounter;
	module.exports = exports['default'];

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodashDefaults = __webpack_require__(176);

	var _lodashDefaults2 = _interopRequireDefault(_lodashDefaults);

	var _shallowEqual = __webpack_require__(192);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _EnterLeaveCounter = __webpack_require__(185);

	var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);

	var _BrowserDetector = __webpack_require__(60);

	var _OffsetUtils = __webpack_require__(189);

	var _NativeDragSources = __webpack_require__(188);

	var _NativeTypes = __webpack_require__(33);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	var HTML5Backend = (function () {
	  function HTML5Backend(manager) {
	    _classCallCheck(this, HTML5Backend);

	    this.actions = manager.getActions();
	    this.monitor = manager.getMonitor();
	    this.registry = manager.getRegistry();

	    this.sourcePreviewNodes = {};
	    this.sourcePreviewNodeOptions = {};
	    this.sourceNodes = {};
	    this.sourceNodeOptions = {};
	    this.enterLeaveCounter = new _EnterLeaveCounter2['default']();

	    this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
	    this.handleTopDragStart = this.handleTopDragStart.bind(this);
	    this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
	    this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
	    this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
	    this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
	    this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
	    this.handleTopDragOver = this.handleTopDragOver.bind(this);
	    this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
	    this.handleTopDrop = this.handleTopDrop.bind(this);
	    this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
	    this.handleSelectStart = this.handleSelectStart.bind(this);
	    this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
	    this.endDragNativeItem = this.endDragNativeItem.bind(this);
	  }

	  HTML5Backend.prototype.setup = function setup() {
	    if (typeof window === 'undefined') {
	      return;
	    }

	    if (this.constructor.isSetUp) {
	      throw new Error('Cannot have two HTML5 backends at the same time.');
	    }
	    this.constructor.isSetUp = true;
	    this.addEventListeners(window);
	  };

	  HTML5Backend.prototype.teardown = function teardown() {
	    if (typeof window === 'undefined') {
	      return;
	    }

	    this.constructor.isSetUp = false;
	    this.removeEventListeners(window);
	    this.clearCurrentDragSourceNode();
	  };

	  HTML5Backend.prototype.addEventListeners = function addEventListeners(target) {
	    target.addEventListener('dragstart', this.handleTopDragStart);
	    target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
	    target.addEventListener('dragend', this.handleTopDragEndCapture, true);
	    target.addEventListener('dragenter', this.handleTopDragEnter);
	    target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
	    target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
	    target.addEventListener('dragover', this.handleTopDragOver);
	    target.addEventListener('dragover', this.handleTopDragOverCapture, true);
	    target.addEventListener('drop', this.handleTopDrop);
	    target.addEventListener('drop', this.handleTopDropCapture, true);
	  };

	  HTML5Backend.prototype.removeEventListeners = function removeEventListeners(target) {
	    target.removeEventListener('dragstart', this.handleTopDragStart);
	    target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
	    target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
	    target.removeEventListener('dragenter', this.handleTopDragEnter);
	    target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
	    target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
	    target.removeEventListener('dragover', this.handleTopDragOver);
	    target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
	    target.removeEventListener('drop', this.handleTopDrop);
	    target.removeEventListener('drop', this.handleTopDropCapture, true);
	  };

	  HTML5Backend.prototype.connectDragPreview = function connectDragPreview(sourceId, node, options) {
	    var _this = this;

	    this.sourcePreviewNodeOptions[sourceId] = options;
	    this.sourcePreviewNodes[sourceId] = node;

	    return function () {
	      delete _this.sourcePreviewNodes[sourceId];
	      delete _this.sourcePreviewNodeOptions[sourceId];
	    };
	  };

	  HTML5Backend.prototype.connectDragSource = function connectDragSource(sourceId, node, options) {
	    var _this2 = this;

	    this.sourceNodes[sourceId] = node;
	    this.sourceNodeOptions[sourceId] = options;

	    var handleDragStart = function handleDragStart(e) {
	      return _this2.handleDragStart(e, sourceId);
	    };
	    var handleSelectStart = function handleSelectStart(e) {
	      return _this2.handleSelectStart(e, sourceId);
	    };

	    node.setAttribute('draggable', true);
	    node.addEventListener('dragstart', handleDragStart);
	    node.addEventListener('selectstart', handleSelectStart);

	    return function () {
	      delete _this2.sourceNodes[sourceId];
	      delete _this2.sourceNodeOptions[sourceId];

	      node.removeEventListener('dragstart', handleDragStart);
	      node.removeEventListener('selectstart', handleSelectStart);
	      node.setAttribute('draggable', false);
	    };
	  };

	  HTML5Backend.prototype.connectDropTarget = function connectDropTarget(targetId, node) {
	    var _this3 = this;

	    var handleDragEnter = function handleDragEnter(e) {
	      return _this3.handleDragEnter(e, targetId);
	    };
	    var handleDragOver = function handleDragOver(e) {
	      return _this3.handleDragOver(e, targetId);
	    };
	    var handleDrop = function handleDrop(e) {
	      return _this3.handleDrop(e, targetId);
	    };

	    node.addEventListener('dragenter', handleDragEnter);
	    node.addEventListener('dragover', handleDragOver);
	    node.addEventListener('drop', handleDrop);

	    return function () {
	      node.removeEventListener('dragenter', handleDragEnter);
	      node.removeEventListener('dragover', handleDragOver);
	      node.removeEventListener('drop', handleDrop);
	    };
	  };

	  HTML5Backend.prototype.getCurrentSourceNodeOptions = function getCurrentSourceNodeOptions() {
	    var sourceId = this.monitor.getSourceId();
	    var sourceNodeOptions = this.sourceNodeOptions[sourceId];

	    return _lodashDefaults2['default'](sourceNodeOptions || {}, {
	      dropEffect: 'move'
	    });
	  };

	  HTML5Backend.prototype.getCurrentDropEffect = function getCurrentDropEffect() {
	    if (this.isDraggingNativeItem()) {
	      // It makes more sense to default to 'copy' for native resources
	      return 'copy';
	    }

	    return this.getCurrentSourceNodeOptions().dropEffect;
	  };

	  HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions = function getCurrentSourcePreviewNodeOptions() {
	    var sourceId = this.monitor.getSourceId();
	    var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];

	    return _lodashDefaults2['default'](sourcePreviewNodeOptions || {}, {
	      anchorX: 0.5,
	      anchorY: 0.5,
	      captureDraggingState: false
	    });
	  };

	  HTML5Backend.prototype.getSourceClientOffset = function getSourceClientOffset(sourceId) {
	    return _OffsetUtils.getNodeClientOffset(this.sourceNodes[sourceId]);
	  };

	  HTML5Backend.prototype.isDraggingNativeItem = function isDraggingNativeItem() {
	    var itemType = this.monitor.getItemType();
	    return Object.keys(NativeTypes).some(function (key) {
	      return NativeTypes[key] === itemType;
	    });
	  };

	  HTML5Backend.prototype.beginDragNativeItem = function beginDragNativeItem(type) {
	    this.clearCurrentDragSourceNode();

	    var SourceType = _NativeDragSources.createNativeDragSource(type);
	    this.currentNativeSource = new SourceType();
	    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
	    this.actions.beginDrag([this.currentNativeHandle]);

	    // On Firefox, if mousemove fires, the drag is over but browser failed to tell us.
	    // This is not true for other browsers.
	    if (_BrowserDetector.isFirefox()) {
	      window.addEventListener('mousemove', this.endDragNativeItem, true);
	    }
	  };

	  HTML5Backend.prototype.endDragNativeItem = function endDragNativeItem() {
	    if (!this.isDraggingNativeItem()) {
	      return;
	    }

	    if (_BrowserDetector.isFirefox()) {
	      window.removeEventListener('mousemove', this.endDragNativeItem, true);
	    }

	    this.actions.endDrag();
	    this.registry.removeSource(this.currentNativeHandle);
	    this.currentNativeHandle = null;
	    this.currentNativeSource = null;
	  };

	  HTML5Backend.prototype.endDragIfSourceWasRemovedFromDOM = function endDragIfSourceWasRemovedFromDOM() {
	    var node = this.currentDragSourceNode;
	    if (document.body.contains(node)) {
	      return;
	    }

	    if (this.clearCurrentDragSourceNode()) {
	      this.actions.endDrag();
	    }
	  };

	  HTML5Backend.prototype.setCurrentDragSourceNode = function setCurrentDragSourceNode(node) {
	    this.clearCurrentDragSourceNode();
	    this.currentDragSourceNode = node;
	    this.currentDragSourceNodeOffset = _OffsetUtils.getNodeClientOffset(node);
	    this.currentDragSourceNodeOffsetChanged = false;

	    // Receiving a mouse event in the middle of a dragging operation
	    // means it has ended and the drag source node disappeared from DOM,
	    // so the browser didn't dispatch the dragend event.
	    window.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
	  };

	  HTML5Backend.prototype.clearCurrentDragSourceNode = function clearCurrentDragSourceNode() {
	    if (this.currentDragSourceNode) {
	      this.currentDragSourceNode = null;
	      this.currentDragSourceNodeOffset = null;
	      this.currentDragSourceNodeOffsetChanged = false;
	      window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
	      return true;
	    }

	    return false;
	  };

	  HTML5Backend.prototype.checkIfCurrentDragSourceRectChanged = function checkIfCurrentDragSourceRectChanged() {
	    var node = this.currentDragSourceNode;
	    if (!node) {
	      return false;
	    }

	    if (this.currentDragSourceNodeOffsetChanged) {
	      return true;
	    }

	    this.currentDragSourceNodeOffsetChanged = !_shallowEqual2['default'](_OffsetUtils.getNodeClientOffset(node), this.currentDragSourceNodeOffset);

	    return this.currentDragSourceNodeOffsetChanged;
	  };

	  HTML5Backend.prototype.handleTopDragStartCapture = function handleTopDragStartCapture() {
	    this.clearCurrentDragSourceNode();
	    this.dragStartSourceIds = [];
	  };

	  HTML5Backend.prototype.handleDragStart = function handleDragStart(e, sourceId) {
	    this.dragStartSourceIds.unshift(sourceId);
	  };

	  HTML5Backend.prototype.handleTopDragStart = function handleTopDragStart(e) {
	    var _this4 = this;

	    var dragStartSourceIds = this.dragStartSourceIds;

	    this.dragStartSourceIds = null;

	    var clientOffset = _OffsetUtils.getEventClientOffset(e);

	    // Don't publish the source just yet (see why below)
	    this.actions.beginDrag(dragStartSourceIds, {
	      publishSource: false,
	      getSourceClientOffset: this.getSourceClientOffset,
	      clientOffset: clientOffset
	    });

	    var dataTransfer = e.dataTransfer;

	    var nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);

	    if (this.monitor.isDragging()) {
	      if (typeof dataTransfer.setDragImage === 'function') {
	        // Use custom drag image if user specifies it.
	        // If child drag source refuses drag but parent agrees,
	        // use parent's node as drag image. Neither works in IE though.
	        var sourceId = this.monitor.getSourceId();
	        var sourceNode = this.sourceNodes[sourceId];
	        var dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;

	        var _getCurrentSourcePreviewNodeOptions = this.getCurrentSourcePreviewNodeOptions();

	        var anchorX = _getCurrentSourcePreviewNodeOptions.anchorX;
	        var anchorY = _getCurrentSourcePreviewNodeOptions.anchorY;

	        var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
	        var dragPreviewOffset = _OffsetUtils.getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint);
	        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
	      }

	      try {
	        // Firefox won't drag without setting data
	        dataTransfer.setData('application/json', {});
	      } catch (err) {}
	      // IE doesn't support MIME types in setData

	      // Store drag source node so we can check whether
	      // it is removed from DOM and trigger endDrag manually.
	      this.setCurrentDragSourceNode(e.target);

	      // Now we are ready to publish the drag source.. or are we not?

	      var _getCurrentSourcePreviewNodeOptions2 = this.getCurrentSourcePreviewNodeOptions();

	      var captureDraggingState = _getCurrentSourcePreviewNodeOptions2.captureDraggingState;

	      if (!captureDraggingState) {
	        // Usually we want to publish it in the next tick so that browser
	        // is able to screenshot the current (not yet dragging) state.
	        //
	        // It also neatly avoids a situation where render() returns null
	        // in the same tick for the source element, and browser freaks out.
	        setTimeout(function () {
	          return _this4.actions.publishDragSource();
	        });
	      } else {
	        // In some cases the user may want to override this behavior, e.g.
	        // to work around IE not supporting custom drag previews.
	        //
	        // When using a custom drag layer, the only way to prevent
	        // the default drag preview from drawing in IE is to screenshot
	        // the dragging state in which the node itself has zero opacity
	        // and height. In this case, though, returning null from render()
	        // will abruptly end the dragging, which is not obvious.
	        //
	        // This is the reason such behavior is strictly opt-in.
	        this.actions.publishDragSource();
	      }
	    } else if (nativeType) {
	      // A native item (such as URL) dragged from inside the document
	      this.beginDragNativeItem(nativeType);
	    } else if (!dataTransfer.types && (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
	      // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
	      // Just let it drag. It's a native type (URL or text) and will be picked up in dragenter handler.
	      return;
	    } else {
	      // If by this time no drag source reacted, tell browser not to drag.
	      e.preventDefault();
	    }
	  };

	  HTML5Backend.prototype.handleTopDragEndCapture = function handleTopDragEndCapture() {
	    if (this.clearCurrentDragSourceNode()) {
	      // Firefox can dispatch this event in an infinite loop
	      // if dragend handler does something like showing an alert.
	      // Only proceed if we have not handled it already.
	      this.actions.endDrag();
	    }
	  };

	  HTML5Backend.prototype.handleTopDragEnterCapture = function handleTopDragEnterCapture(e) {
	    this.dragEnterTargetIds = [];

	    var isFirstEnter = this.enterLeaveCounter.enter(e.target);
	    if (!isFirstEnter || this.monitor.isDragging()) {
	      return;
	    }

	    var dataTransfer = e.dataTransfer;

	    var nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);

	    if (nativeType) {
	      // A native item (such as file or URL) dragged from outside the document
	      this.beginDragNativeItem(nativeType);
	    }
	  };

	  HTML5Backend.prototype.handleDragEnter = function handleDragEnter(e, targetId) {
	    this.dragEnterTargetIds.unshift(targetId);
	  };

	  HTML5Backend.prototype.handleTopDragEnter = function handleTopDragEnter(e) {
	    var _this5 = this;

	    var dragEnterTargetIds = this.dragEnterTargetIds;

	    this.dragEnterTargetIds = [];

	    if (!this.monitor.isDragging()) {
	      // This is probably a native item type we don't understand.
	      return;
	    }

	    if (!_BrowserDetector.isFirefox()) {
	      // Don't emit hover in `dragenter` on Firefox due to an edge case.
	      // If the target changes position as the result of `dragenter`, Firefox
	      // will still happily dispatch `dragover` despite target being no longer
	      // there. The easy solution is to only fire `hover` in `dragover` on FF.
	      this.actions.hover(dragEnterTargetIds, {
	        clientOffset: _OffsetUtils.getEventClientOffset(e)
	      });
	    }

	    var canDrop = dragEnterTargetIds.some(function (targetId) {
	      return _this5.monitor.canDropOnTarget(targetId);
	    });

	    if (canDrop) {
	      // IE requires this to fire dragover events
	      e.preventDefault();
	      e.dataTransfer.dropEffect = this.getCurrentDropEffect();
	    }
	  };

	  HTML5Backend.prototype.handleTopDragOverCapture = function handleTopDragOverCapture() {
	    this.dragOverTargetIds = [];
	  };

	  HTML5Backend.prototype.handleDragOver = function handleDragOver(e, targetId) {
	    this.dragOverTargetIds.unshift(targetId);
	  };

	  HTML5Backend.prototype.handleTopDragOver = function handleTopDragOver(e) {
	    var _this6 = this;

	    var dragOverTargetIds = this.dragOverTargetIds;

	    this.dragOverTargetIds = [];

	    if (!this.monitor.isDragging()) {
	      // This is probably a native item type we don't understand.
	      // Prevent default "drop and blow away the whole document" action.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'none';
	      return;
	    }

	    this.actions.hover(dragOverTargetIds, {
	      clientOffset: _OffsetUtils.getEventClientOffset(e)
	    });

	    var canDrop = dragOverTargetIds.some(function (targetId) {
	      return _this6.monitor.canDropOnTarget(targetId);
	    });

	    if (canDrop) {
	      // Show user-specified drop effect.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = this.getCurrentDropEffect();
	    } else if (this.isDraggingNativeItem()) {
	      // Don't show a nice cursor but still prevent default
	      // "drop and blow away the whole document" action.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'none';
	    } else if (this.checkIfCurrentDragSourceRectChanged()) {
	      // Prevent animating to incorrect position.
	      // Drop effect must be other than 'none' to prevent animation.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'move';
	    }
	  };

	  HTML5Backend.prototype.handleTopDragLeaveCapture = function handleTopDragLeaveCapture(e) {
	    if (this.isDraggingNativeItem()) {
	      e.preventDefault();
	    }

	    var isLastLeave = this.enterLeaveCounter.leave(e.target);
	    if (!isLastLeave) {
	      return;
	    }

	    if (this.isDraggingNativeItem()) {
	      this.endDragNativeItem();
	    }
	  };

	  HTML5Backend.prototype.handleTopDropCapture = function handleTopDropCapture(e) {
	    this.dropTargetIds = [];
	    e.preventDefault();

	    if (this.isDraggingNativeItem()) {
	      this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
	    }

	    this.enterLeaveCounter.reset();
	  };

	  HTML5Backend.prototype.handleDrop = function handleDrop(e, targetId) {
	    this.dropTargetIds.unshift(targetId);
	  };

	  HTML5Backend.prototype.handleTopDrop = function handleTopDrop(e) {
	    var dropTargetIds = this.dropTargetIds;

	    this.dropTargetIds = [];

	    this.actions.hover(dropTargetIds, {
	      clientOffset: _OffsetUtils.getEventClientOffset(e)
	    });
	    this.actions.drop();

	    if (this.isDraggingNativeItem()) {
	      this.endDragNativeItem();
	    } else {
	      this.endDragIfSourceWasRemovedFromDOM();
	    }
	  };

	  HTML5Backend.prototype.handleSelectStart = function handleSelectStart(e) {
	    var target = e.target;

	    // Only IE requires us to explicitly say
	    // we want drag drop operation to start
	    if (typeof target.dragDrop !== 'function') {
	      return;
	    }

	    // Inputs and textareas should be selectable
	    if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
	      return;
	    }

	    // For other targets, ask IE
	    // to enable drag and drop
	    e.preventDefault();
	    target.dragDrop();
	  };

	  return HTML5Backend;
	})();

	exports['default'] = HTML5Backend;
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MonotonicInterpolant = (function () {
	  function MonotonicInterpolant(xs, ys) {
	    _classCallCheck(this, MonotonicInterpolant);

	    var length = xs.length;

	    // Rearrange xs and ys so that xs is sorted
	    var indexes = [];
	    for (var i = 0; i < length; i++) {
	      indexes.push(i);
	    }
	    indexes.sort(function (a, b) {
	      return xs[a] < xs[b] ? -1 : 1;
	    });

	    // Get consecutive differences and slopes
	    var dys = [];
	    var dxs = [];
	    var ms = [];
	    var dx = undefined;
	    var dy = undefined;
	    for (var i = 0; i < length - 1; i++) {
	      dx = xs[i + 1] - xs[i];
	      dy = ys[i + 1] - ys[i];
	      dxs.push(dx);
	      dys.push(dy);
	      ms.push(dy / dx);
	    }

	    // Get degree-1 coefficients
	    var c1s = [ms[0]];
	    for (var i = 0; i < dxs.length - 1; i++) {
	      var _m = ms[i];
	      var mNext = ms[i + 1];
	      if (_m * mNext <= 0) {
	        c1s.push(0);
	      } else {
	        dx = dxs[i];
	        var dxNext = dxs[i + 1];
	        var common = dx + dxNext;
	        c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
	      }
	    }
	    c1s.push(ms[ms.length - 1]);

	    // Get degree-2 and degree-3 coefficients
	    var c2s = [];
	    var c3s = [];
	    var m = undefined;
	    for (var i = 0; i < c1s.length - 1; i++) {
	      m = ms[i];
	      var c1 = c1s[i];
	      var invDx = 1 / dxs[i];
	      var common = c1 + c1s[i + 1] - m - m;
	      c2s.push((m - c1 - common) * invDx);
	      c3s.push(common * invDx * invDx);
	    }

	    this.xs = xs;
	    this.ys = ys;
	    this.c1s = c1s;
	    this.c2s = c2s;
	    this.c3s = c3s;
	  }

	  MonotonicInterpolant.prototype.interpolate = function interpolate(x) {
	    var xs = this.xs;
	    var ys = this.ys;
	    var c1s = this.c1s;
	    var c2s = this.c2s;
	    var c3s = this.c3s;

	    // The rightmost point in the dataset should give an exact result
	    var i = xs.length - 1;
	    if (x === xs[i]) {
	      return ys[i];
	    }

	    // Search for the interval x is in, returning the corresponding y if x is one of the original xs
	    var low = 0;
	    var high = c3s.length - 1;
	    var mid = undefined;
	    while (low <= high) {
	      mid = Math.floor(0.5 * (low + high));
	      var xHere = xs[mid];
	      if (xHere < x) {
	        low = mid + 1;
	      } else if (xHere > x) {
	        high = mid - 1;
	      } else {
	        return ys[mid];
	      }
	    }
	    i = Math.max(0, high);

	    // Interpolate
	    var diff = x - xs[i];
	    var diffSq = diff * diff;
	    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
	  };

	  return MonotonicInterpolant;
	})();

	exports["default"] = MonotonicInterpolant;
	module.exports = exports["default"];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _nativeTypesConfig;

	exports.createNativeDragSource = createNativeDragSource;
	exports.matchNativeItemType = matchNativeItemType;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _NativeTypes = __webpack_require__(33);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
	  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
	    return resultSoFar || dataTransfer.getData(typeToTry);
	  }, null);

	  return result != null ? // eslint-disable-line eqeqeq
	  result : defaultValue;
	}

	var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
	  exposeProperty: 'files',
	  matchesTypes: ['Files'],
	  getData: function getData(dataTransfer) {
	    return Array.prototype.slice.call(dataTransfer.files);
	  }
	}), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
	  exposeProperty: 'urls',
	  matchesTypes: ['Url', 'text/uri-list'],
	  getData: function getData(dataTransfer, matchesTypes) {
	    return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
	  }
	}), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
	  exposeProperty: 'text',
	  matchesTypes: ['Text', 'text/plain'],
	  getData: function getData(dataTransfer, matchesTypes) {
	    return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
	  }
	}), _nativeTypesConfig);

	function createNativeDragSource(type) {
	  var _nativeTypesConfig$type = nativeTypesConfig[type];
	  var exposeProperty = _nativeTypesConfig$type.exposeProperty;
	  var matchesTypes = _nativeTypesConfig$type.matchesTypes;
	  var getData = _nativeTypesConfig$type.getData;

	  return (function () {
	    function NativeDragSource() {
	      _classCallCheck(this, NativeDragSource);

	      this.item = Object.defineProperties({}, _defineProperty({}, exposeProperty, {
	        get: function get() {
	          console.warn( // eslint-disable-line no-console
	          'Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
	          return null;
	        },
	        configurable: true,
	        enumerable: true
	      }));
	    }

	    NativeDragSource.prototype.mutateItemByReadingDataTransfer = function mutateItemByReadingDataTransfer(dataTransfer) {
	      delete this.item[exposeProperty];
	      this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
	    };

	    NativeDragSource.prototype.canDrag = function canDrag() {
	      return true;
	    };

	    NativeDragSource.prototype.beginDrag = function beginDrag() {
	      return this.item;
	    };

	    NativeDragSource.prototype.isDragging = function isDragging(monitor, handle) {
	      return handle === monitor.getSourceId();
	    };

	    NativeDragSource.prototype.endDrag = function endDrag() {};

	    return NativeDragSource;
	  })();
	}

	function matchNativeItemType(dataTransfer) {
	  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);

	  return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
	    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;

	    return matchesTypes.some(function (t) {
	      return dataTransferTypes.indexOf(t) > -1;
	    });
	  })[0] || null;
	}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getNodeClientOffset = getNodeClientOffset;
	exports.getEventClientOffset = getEventClientOffset;
	exports.getDragPreviewOffset = getDragPreviewOffset;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _BrowserDetector = __webpack_require__(60);

	var _MonotonicInterpolant = __webpack_require__(187);

	var _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant);

	var ELEMENT_NODE = 1;

	function getNodeClientOffset(node) {
	  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

	  if (!el) {
	    return null;
	  }

	  var _el$getBoundingClientRect = el.getBoundingClientRect();

	  var top = _el$getBoundingClientRect.top;
	  var left = _el$getBoundingClientRect.left;

	  return { x: left, y: top };
	}

	function getEventClientOffset(e) {
	  return {
	    x: e.clientX,
	    y: e.clientY
	  };
	}

	function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint) {
	  // The browsers will use the image intrinsic size under different conditions.
	  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
	  var isImage = dragPreview.nodeName === 'IMG' && (_BrowserDetector.isFirefox() || !document.documentElement.contains(dragPreview));
	  var dragPreviewNode = isImage ? sourceNode : dragPreview;

	  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
	  var offsetFromDragPreview = {
	    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
	    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
	  };

	  var sourceWidth = sourceNode.offsetWidth;
	  var sourceHeight = sourceNode.offsetHeight;
	  var anchorX = anchorPoint.anchorX;
	  var anchorY = anchorPoint.anchorY;

	  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
	  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;

	  // Work around @2x coordinate discrepancies in browsers
	  if (_BrowserDetector.isSafari() && isImage) {
	    dragPreviewHeight /= window.devicePixelRatio;
	    dragPreviewWidth /= window.devicePixelRatio;
	  } else if (_BrowserDetector.isFirefox() && !isImage) {
	    dragPreviewHeight *= window.devicePixelRatio;
	    dragPreviewWidth *= window.devicePixelRatio;
	  }

	  // Interpolate coordinates depending on anchor point
	  // If you know a simpler way to do this, let me know
	  var interpolantX = new _MonotonicInterpolant2['default']([0, 0.5, 1], [
	  // Dock to the left
	  offsetFromDragPreview.x,
	  // Align at the center
	  offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
	  // Dock to the right
	  offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
	  var interpolantY = new _MonotonicInterpolant2['default']([0, 0.5, 1], [
	  // Dock to the top
	  offsetFromDragPreview.y,
	  // Align at the center
	  offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
	  // Dock to the bottom
	  offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
	  var x = interpolantX.interpolate(anchorX);
	  var y = interpolantY.interpolate(anchorY);

	  // Work around Safari 8 positioning bug
	  if (_BrowserDetector.isSafari() && isImage) {
	    // We'll have to wait for @3x to see if this is entirely correct
	    y += (window.devicePixelRatio - 1) * dragPreviewHeight;
	  }

	  return { x: x, y: y };
	}

/***/ },
/* 190 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = getEmptyImage;
	var emptyImage = undefined;

	function getEmptyImage() {
	  if (!emptyImage) {
	    emptyImage = new Image();
	    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
	  }

	  return emptyImage;
	}

	module.exports = exports['default'];

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createHTML5Backend;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _HTML5Backend = __webpack_require__(186);

	var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);

	var _getEmptyImage = __webpack_require__(190);

	var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);

	var _NativeTypes = __webpack_require__(33);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	exports.NativeTypes = NativeTypes;
	exports.getEmptyImage = _getEmptyImage2['default'];

	function createHTML5Backend(manager) {
	  return new _HTML5Backend2['default'](manager);
	}

/***/ },
/* 192 */
35,
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slice = Array.prototype.slice;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = DragDropContext;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _dndCore = __webpack_require__(108);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _utilsCheckDecoratorArguments = __webpack_require__(21);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	function DragDropContext(backendOrModule) {
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragDropContext', 'backend'].concat(_slice.call(arguments)));

	  // Auto-detect ES6 default export for people still using ES5
	  var backend = undefined;
	  if (typeof backendOrModule === 'object' && typeof backendOrModule['default'] === 'function') {
	    backend = backendOrModule['default'];
	  } else {
	    backend = backendOrModule;
	  }

	  _invariant2['default'](typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-drop-context.html');

	  var childContext = {
	    dragDropManager: new _dndCore.DragDropManager(backend)
	  };

	  return function decorateContext(DecoratedComponent) {
	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	    return (function (_Component) {
	      _inherits(DragDropContextContainer, _Component);

	      function DragDropContextContainer() {
	        _classCallCheck(this, DragDropContextContainer);

	        _Component.apply(this, arguments);
	      }

	      DragDropContextContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };

	      DragDropContextContainer.prototype.getManager = function getManager() {
	        return childContext.dragDropManager;
	      };

	      DragDropContextContainer.prototype.getChildContext = function getChildContext() {
	        return childContext;
	      };

	      DragDropContextContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, {
	          ref: 'child' }));
	      };

	      _createClass(DragDropContextContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragDropContext(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'childContextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);

	      return DragDropContextContainer;
	    })(_react.Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slice = Array.prototype.slice;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = DragLayer;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utilsShallowEqual = __webpack_require__(35);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsShallowEqualScalar = __webpack_require__(64);

	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

	var _lodashIsPlainObject = __webpack_require__(7);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _utilsCheckDecoratorArguments = __webpack_require__(21);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	function DragLayer(collect) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragLayer', 'collect[, options]'].concat(_slice.call(arguments)));
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer ' + 'to be a function that collects props to inject into the component. ', 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the second argument to DragLayer to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', options);

	  return function decorateLayer(DecoratedComponent) {
	    var _options$arePropsEqual = options.arePropsEqual;
	    var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;

	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	    return (function (_Component) {
	      _inherits(DragLayerContainer, _Component);

	      DragLayerContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };

	      DragLayerContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2['default'](nextState, this.state);
	      };

	      _createClass(DragLayerContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragLayer(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'contextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);

	      function DragLayerContainer(props, context) {
	        _classCallCheck(this, DragLayerContainer);

	        _Component.call(this, props);
	        this.handleChange = this.handleChange.bind(this);

	        this.manager = context.dragDropManager;
	        _invariant2['default'](typeof this.manager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

	        this.state = this.getCurrentState();
	      }

	      DragLayerContainer.prototype.componentDidMount = function componentDidMount() {
	        this.isCurrentlyMounted = true;

	        var monitor = this.manager.getMonitor();
	        this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
	        this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);

	        this.handleChange();
	      };

	      DragLayerContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.isCurrentlyMounted = false;

	        this.unsubscribeFromOffsetChange();
	        this.unsubscribeFromStateChange();
	      };

	      DragLayerContainer.prototype.handleChange = function handleChange() {
	        if (!this.isCurrentlyMounted) {
	          return;
	        }

	        var nextState = this.getCurrentState();
	        if (!_utilsShallowEqual2['default'](nextState, this.state)) {
	          this.setState(nextState);
	        }
	      };

	      DragLayerContainer.prototype.getCurrentState = function getCurrentState() {
	        var monitor = this.manager.getMonitor();
	        return collect(monitor);
	      };

	      DragLayerContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	          ref: 'child' }));
	      };

	      return DragLayerContainer;
	    })(_react.Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DragSource;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(7);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _utilsCheckDecoratorArguments = __webpack_require__(21);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	var _decorateHandler = __webpack_require__(62);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerSource = __webpack_require__(203);

	var _registerSource2 = _interopRequireDefault(_registerSource);

	var _createSourceFactory = __webpack_require__(198);

	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

	var _createSourceMonitor = __webpack_require__(199);

	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

	var _createSourceConnector = __webpack_require__(197);

	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

	var _utilsIsValidType = __webpack_require__(63);

	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);

	function DragSource(type, spec, collect) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    _invariant2['default'](_utilsIsValidType2['default'](type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  _invariant2['default'](_lodashIsPlainObject2['default'](spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', spec);
	  var createSource = _createSourceFactory2['default'](spec);
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);

	  return function decorateSource(DecoratedComponent) {
	    return _decorateHandler2['default']({
	      connectBackend: function connectBackend(backend, sourceId) {
	        return backend.connectDragSource(sourceId);
	      },
	      containerDisplayName: 'DragSource',
	      createHandler: createSource,
	      registerHandler: _registerSource2['default'],
	      createMonitor: _createSourceMonitor2['default'],
	      createConnector: _createSourceConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DropTarget;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(7);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var _utilsCheckDecoratorArguments = __webpack_require__(21);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	var _decorateHandler = __webpack_require__(62);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerTarget = __webpack_require__(204);

	var _registerTarget2 = _interopRequireDefault(_registerTarget);

	var _createTargetFactory = __webpack_require__(201);

	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

	var _createTargetMonitor = __webpack_require__(202);

	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

	var _createTargetConnector = __webpack_require__(200);

	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

	var _utilsIsValidType = __webpack_require__(63);

	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);

	function DropTarget(type, spec, collect) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    _invariant2['default'](_utilsIsValidType2['default'](type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  _invariant2['default'](_lodashIsPlainObject2['default'](spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', spec);
	  var createTarget = _createTargetFactory2['default'](spec);
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);

	  return function decorateTarget(DecoratedComponent) {
	    return _decorateHandler2['default']({
	      connectBackend: function connectBackend(backend, targetId) {
	        return backend.connectDropTarget(targetId);
	      },
	      containerDisplayName: 'DropTarget',
	      createHandler: createTarget,
	      registerHandler: _registerTarget2['default'],
	      createMonitor: _createTargetMonitor2['default'],
	      createConnector: _createTargetConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceConnector;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _wrapConnectorHooks = __webpack_require__(65);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(61);

	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

	function createSourceConnector(backend) {
	  var currentHandlerId = undefined;

	  var currentDragSourceNode = undefined;
	  var currentDragSourceOptions = undefined;
	  var disconnectCurrentDragSource = undefined;

	  var currentDragPreviewNode = undefined;
	  var currentDragPreviewOptions = undefined;
	  var disconnectCurrentDragPreview = undefined;

	  function reconnectDragSource() {
	    if (disconnectCurrentDragSource) {
	      disconnectCurrentDragSource();
	      disconnectCurrentDragSource = null;
	    }

	    if (currentHandlerId && currentDragSourceNode) {
	      disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
	    }
	  }

	  function reconnectDragPreview() {
	    if (disconnectCurrentDragPreview) {
	      disconnectCurrentDragPreview();
	      disconnectCurrentDragPreview = null;
	    }

	    if (currentHandlerId && currentDragPreviewNode) {
	      disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
	    }
	  }

	  function receiveHandlerId(handlerId) {
	    if (handlerId === currentHandlerId) {
	      return;
	    }

	    currentHandlerId = handlerId;
	    reconnectDragSource();
	    reconnectDragPreview();
	  }

	  var hooks = _wrapConnectorHooks2['default']({
	    dragSource: function connectDragSource(node, options) {
	      if (node === currentDragSourceNode && _areOptionsEqual2['default'](options, currentDragSourceOptions)) {
	        return;
	      }

	      currentDragSourceNode = node;
	      currentDragSourceOptions = options;

	      reconnectDragSource();
	    },

	    dragPreview: function connectDragPreview(node, options) {
	      if (node === currentDragPreviewNode && _areOptionsEqual2['default'](options, currentDragPreviewOptions)) {
	        return;
	      }

	      currentDragPreviewNode = node;
	      currentDragPreviewOptions = options;

	      reconnectDragPreview();
	    }
	  });

	  return {
	    receiveHandlerId: receiveHandlerId,
	    hooks: hooks
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceFactory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(7);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'canDrag', 'isDragging', 'endDrag'];
	var REQUIRED_SPEC_METHODS = ['beginDrag'];

	function createSourceFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    _invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });
	  REQUIRED_SPEC_METHODS.forEach(function (key) {
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });

	  var Source = (function () {
	    function Source(monitor) {
	      _classCallCheck(this, Source);

	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }

	    Source.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };

	    Source.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };

	    Source.prototype.canDrag = function canDrag() {
	      if (!spec.canDrag) {
	        return true;
	      }

	      return spec.canDrag(this.props, this.monitor);
	    };

	    Source.prototype.isDragging = function isDragging(globalMonitor, sourceId) {
	      if (!spec.isDragging) {
	        return sourceId === globalMonitor.getSourceId();
	      }

	      return spec.isDragging(this.props, this.monitor);
	    };

	    Source.prototype.beginDrag = function beginDrag() {
	      var item = spec.beginDrag(this.props, this.monitor, this.component);
	      if (false) {
	        _invariant2['default'](_lodashIsPlainObject2['default'](item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', item);
	      }
	      return item;
	    };

	    Source.prototype.endDrag = function endDrag() {
	      if (!spec.endDrag) {
	        return;
	      }

	      spec.endDrag(this.props, this.monitor, this.component);
	    };

	    return Source;
	  })();

	  return function createSource(monitor) {
	    return new Source(monitor);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceMonitor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var isCallingCanDrag = false;
	var isCallingIsDragging = false;

	var SourceMonitor = (function () {
	  function SourceMonitor(manager) {
	    _classCallCheck(this, SourceMonitor);

	    this.internalMonitor = manager.getMonitor();
	  }

	  SourceMonitor.prototype.receiveHandlerId = function receiveHandlerId(sourceId) {
	    this.sourceId = sourceId;
	  };

	  SourceMonitor.prototype.canDrag = function canDrag() {
	    _invariant2['default'](!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');

	    try {
	      isCallingCanDrag = true;
	      return this.internalMonitor.canDragSource(this.sourceId);
	    } finally {
	      isCallingCanDrag = false;
	    }
	  };

	  SourceMonitor.prototype.isDragging = function isDragging() {
	    _invariant2['default'](!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');

	    try {
	      isCallingIsDragging = true;
	      return this.internalMonitor.isDraggingSource(this.sourceId);
	    } finally {
	      isCallingIsDragging = false;
	    }
	  };

	  SourceMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };

	  SourceMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };

	  SourceMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };

	  SourceMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };

	  SourceMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };

	  SourceMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };

	  SourceMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };

	  SourceMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };

	  SourceMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };

	  return SourceMonitor;
	})();

	function createSourceMonitor(manager) {
	  return new SourceMonitor(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetConnector;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _wrapConnectorHooks = __webpack_require__(65);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(61);

	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

	function createTargetConnector(backend) {
	  var currentHandlerId = undefined;

	  var currentDropTargetNode = undefined;
	  var currentDropTargetOptions = undefined;
	  var disconnectCurrentDropTarget = undefined;

	  function reconnectDropTarget() {
	    if (disconnectCurrentDropTarget) {
	      disconnectCurrentDropTarget();
	      disconnectCurrentDropTarget = null;
	    }

	    if (currentHandlerId && currentDropTargetNode) {
	      disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
	    }
	  }

	  function receiveHandlerId(handlerId) {
	    if (handlerId === currentHandlerId) {
	      return;
	    }

	    currentHandlerId = handlerId;
	    reconnectDropTarget();
	  }

	  var hooks = _wrapConnectorHooks2['default']({
	    dropTarget: function connectDropTarget(node, options) {
	      if (node === currentDropTargetNode && _areOptionsEqual2['default'](options, currentDropTargetOptions)) {
	        return;
	      }

	      currentDropTargetNode = node;
	      currentDropTargetOptions = options;

	      reconnectDropTarget();
	    }
	  });

	  return {
	    receiveHandlerId: receiveHandlerId,
	    hooks: hooks
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetFactory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashIsPlainObject = __webpack_require__(7);

	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);

	var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

	function createTargetFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    _invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
	  });

	  var Target = (function () {
	    function Target(monitor) {
	      _classCallCheck(this, Target);

	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }

	    Target.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };

	    Target.prototype.receiveMonitor = function receiveMonitor(monitor) {
	      this.monitor = monitor;
	    };

	    Target.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };

	    Target.prototype.canDrop = function canDrop() {
	      if (!spec.canDrop) {
	        return true;
	      }

	      return spec.canDrop(this.props, this.monitor);
	    };

	    Target.prototype.hover = function hover() {
	      if (!spec.hover) {
	        return;
	      }

	      spec.hover(this.props, this.monitor, this.component);
	    };

	    Target.prototype.drop = function drop() {
	      if (!spec.drop) {
	        return;
	      }

	      var dropResult = spec.drop(this.props, this.monitor, this.component);
	      if (false) {
	        _invariant2['default'](typeof dropResult === 'undefined' || _lodashIsPlainObject2['default'](dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', dropResult);
	      }
	      return dropResult;
	    };

	    return Target;
	  })();

	  return function createTarget(monitor) {
	    return new Target(monitor);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetMonitor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var isCallingCanDrop = false;

	var TargetMonitor = (function () {
	  function TargetMonitor(manager) {
	    _classCallCheck(this, TargetMonitor);

	    this.internalMonitor = manager.getMonitor();
	  }

	  TargetMonitor.prototype.receiveHandlerId = function receiveHandlerId(targetId) {
	    this.targetId = targetId;
	  };

	  TargetMonitor.prototype.canDrop = function canDrop() {
	    _invariant2['default'](!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target-monitor.html');

	    try {
	      isCallingCanDrop = true;
	      return this.internalMonitor.canDropOnTarget(this.targetId);
	    } finally {
	      isCallingCanDrop = false;
	    }
	  };

	  TargetMonitor.prototype.isOver = function isOver(options) {
	    return this.internalMonitor.isOverTarget(this.targetId, options);
	  };

	  TargetMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };

	  TargetMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };

	  TargetMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };

	  TargetMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };

	  TargetMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };

	  TargetMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };

	  TargetMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };

	  TargetMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };

	  TargetMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };

	  return TargetMonitor;
	})();

	function createTargetMonitor(manager) {
	  return new TargetMonitor(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 203 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = registerSource;

	function registerSource(type, source, manager) {
	  var registry = manager.getRegistry();
	  var sourceId = registry.addSource(type, source);

	  function unregisterSource() {
	    registry.removeSource(sourceId);
	  }

	  return {
	    handlerId: sourceId,
	    unregister: unregisterSource
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 204 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = registerTarget;

	function registerTarget(type, target, manager) {
	  var registry = manager.getRegistry();
	  var targetId = registry.addTarget(type, target);

	  function unregisterTarget() {
	    registry.removeTarget(targetId);
	  }

	  return {
	    handlerId: targetId,
	    unregister: unregisterTarget
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = cloneWithRef;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	function cloneWithRef(element, newRef) {
	  var previousRef = element.ref;
	  _invariant2['default'](typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

	  if (!previousRef) {
	    // When there is no ref on the element, use the new ref directly
	    return _react.cloneElement(element, {
	      ref: newRef
	    });
	  }

	  return _react.cloneElement(element, {
	    ref: function ref(node) {
	      newRef(node);

	      if (previousRef) {
	        previousRef(node);
	      }
	    }
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(207);


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(208);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(37)(module)))

/***/ },
/* 208 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _modal = __webpack_require__(229);

	var _modal2 = _interopRequireDefault(_modal);

	var _cuid = __webpack_require__(235);

	var _cuid2 = _interopRequireDefault(_cuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppModal = (_temp2 = _class = function (_Component) {
	  _inherits(AppModal, _Component);

	  function AppModal() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, AppModal);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppModal.__proto__ || Object.getPrototypeOf(AppModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(AppModal, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      AppModal.handleChange(function (config, operate) {
	        switch (operate) {
	          case 'add':
	            config.onOk = _this2.getAction(config.onOk, config.key);
	            config.onCancel = _this2.getAction(config.onCancel, config.key);
	            if (config.visible === undefined) {
	              config.visible = true;
	            }
	            _this2.setState(_defineProperty({}, config.key, config));
	            break;
	          case 'update':
	            _this2.setState(_defineProperty({}, config.key, Object.assign({}, _this2.state[config.key], config)));
	            break;
	          case 'delete':
	            // config === key
	            if (Object(config) === config) {
	              delete _this2.state[config.key];
	            } else {
	              delete _this2.state[config];
	            }
	            _this2.setState(Object.assign({}, _this2.state));
	            break;
	          default:
	            break;
	        }
	      });
	    }
	  }, {
	    key: 'getAction',
	    value: function getAction(actionFn, key) {
	      var closeModal = function closeModal() {
	        AppModal.close(key);
	      };
	      return function () {
	        if (actionFn) {
	          var ret = void 0;
	          if (actionFn.length) {
	            ret = actionFn(closeModal);
	          } else {
	            ret = actionFn();
	            if (!ret) {
	              closeModal();
	            }
	          }
	          if (ret && ret.then) {
	            AppModal.update({ key: key, confirmLoading: true });
	            ret.then(function () {
	              // It's unnecessary to set loading=false, for the Modal will be unmounted after
	              // close. AppModal.update({   key: key,   confirmLoading: false });
	              closeModal();
	            }, function () {
	              AppModal.update({ key: key, confirmLoading: false });
	            });
	          }
	        } else {
	          closeModal();
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var state = this.state;
	      var Dialog = AppModal.Modal;
	      return _react2.default.createElement(
	        'div',
	        null,
	        Object.keys(state).map(function (key) {
	          return _react2.default.createElement(
	            Dialog,
	            state[key],
	            _react2.default.createElement(
	              'div',
	              { className: state[key].prefixCls + '-body-wrapper' },
	              state[key].content
	            )
	          );
	        })
	      );
	    }
	  }]);

	  return AppModal;
	}(_react.Component), _class.$callbacks_ = [], _class.enhance = function (Modal) {
	  AppModal.Modal = Modal;
	  Modal.open = AppModal.open;
	}, _class.open = function (config) {
	  config.key = config.key || (0, _cuid2.default)();
	  AppModal.applyChange(config, 'add');
	  return {
	    closeModal: function closeModal() {
	      AppModal.close(config);
	    }
	  };
	}, _class.close = function (key) {
	  AppModal.applyChange(key, 'delete');
	}, _class.update = function (config) {
	  AppModal.applyChange(config, 'update');
	}, _class.applyChange = function (config, operate) {
	  AppModal.$callbacks_.forEach(function (callback) {
	    return callback(config, operate);
	  });
	}, _class.handleChange = function (callback) {
	  AppModal.$callbacks_.push(callback);
	}, _temp2);
	exports.default = AppModal;


	AppModal.enhance(_modal2.default);
	module.exports = exports['default'];

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDnd = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DropItem = (_dec = (0, _reactDnd.DropTarget)(function (props) {
	  return props.types;
	}, {
	  drop: function drop(props, monitor, component) {
	    var type = monitor.getItemType();
	    if (props.types.indexOf(type) > -1) {
	      props.doAction(type, monitor.getItem().data);
	    } else {
	      props.doAction(type);
	    }
	  }
	}, function (connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget(),
	    isOver: monitor.isOver(),
	    canDrop: monitor.canDrop()
	  };
	}), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(DropItem, _Component);

	  function DropItem() {
	    _classCallCheck(this, DropItem);

	    return _possibleConstructorReturn(this, (DropItem.__proto__ || Object.getPrototypeOf(DropItem)).apply(this, arguments));
	  }

	  _createClass(DropItem, [{
	    key: 'render',
	    value: function render() {
	      var className = this.props.canDrop ? 'j-kit-drop ' : ' ';
	      className += this.props.isOver ? 'j-kit-drop-over' : '';

	      return this.props.connectDropTarget(_react2.default.createElement(
	        'div',
	        { className: className },
	        this.props.children
	      ));
	    }
	  }]);

	  return DropItem;
	}(_react.Component), _class2.propTypes = {
	  types: _react.PropTypes.array.isRequired,
	  doAction: _react.PropTypes.func.isRequired
	}, _temp)) || _class);
	exports.default = DropItem;
	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _table = __webpack_require__(232);

	var _table2 = _interopRequireDefault(_table);

	var _button = __webpack_require__(38);

	var _button2 = _interopRequireDefault(_button);

	var _breadcrumb = __webpack_require__(225);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _icon = __webpack_require__(22);

	var _icon2 = _interopRequireDefault(_icon);

	var _input = __webpack_require__(69);

	var _input2 = _interopRequireDefault(_input);

	var _navLink = __webpack_require__(67);

	var _navLink2 = _interopRequireDefault(_navLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SceneComponent = (_temp = _class = function (_Component) {
	  _inherits(SceneComponent, _Component);

	  function SceneComponent(props) {
	    _classCallCheck(this, SceneComponent);

	    var _this = _possibleConstructorReturn(this, (SceneComponent.__proto__ || Object.getPrototypeOf(SceneComponent)).call(this, props));

	    var search = props.search || {};
	    _this.state = {
	      scrollLimit: true,
	      focusSearch: false,
	      keyword: search.keyword || 'keyword',
	      page: search.page || 'pageNum',
	      pageSize: search.pageSize || 'pageSize'
	    };
	    return _this;
	  }

	  _createClass(SceneComponent, [{
	    key: 'updateDimensions',
	    value: function updateDimensions(value) {
	      this.setState({ scrollLimit: value });
	    }
	  }, {
	    key: 'toFocusSearch',
	    value: function toFocusSearch(value) {
	      this.setState({ focusSearch: value });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.props.autoAdapt) {
	        this.context.adaptPage.autoAdapt(_reactDom2.default.findDOMNode(this.refs.content), function (size, screenHeight) {
	          // #! 重新设置pageSize和调整高度
	          var pageSize = Math.ceil(screenHeight / 50 - 4);
	          var _pageSize = parseInt(_this2.props.query[_this2.state.pageSize]);
	          var start = _pageSize - 1;
	          var end = _pageSize + 1;
	          if (_this2.props.list.length === _pageSize && pageSize > 1 && (pageSize > end || pageSize < start)) {
	            _this2.props.doFetch({
	              pageSize: pageSize - 1
	            });
	            if (_this2.props.scroll) {
	              _this2.updateDimensions(screenHeight + 'px');
	            }
	          } else if (_this2.props.scroll) {
	            _this2.updateDimensions(size + 'px');
	          }
	        });
	      }
	    }
	  }, {
	    key: 'search',
	    value: function search(keyword) {
	      var _this3 = this;

	      clearTimeout(this.$searchTimer_);
	      this.$searchTimer_ = setTimeout(function () {
	        if (_this3.props.search) {
	          var _this3$props$doFetch;

	          _this3.props.doFetch((_this3$props$doFetch = {}, _defineProperty(_this3$props$doFetch, _this3.state.page, 1), _defineProperty(_this3$props$doFetch, _this3.state.keyword, keyword), _this3$props$doFetch));
	        } else {
	          _this3.props.doFetch(_defineProperty({}, _this3.state.page, 1));
	        }
	      }, 200);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var scroll = this.props.scroll && {
	        x: true,
	        y: this.state.scrollLimit
	      } || undefined;
	      var query = this.props.query;
	      var search = this.props.search;
	      var keyword = search && query[this.state.keyword] || '';
	      return _react2.default.createElement(
	        'div',
	        { className: "j-scene j-scene-" + this.props.name },
	        _react2.default.createElement(
	          _breadcrumb2.default,
	          null,
	          this.props.breadcrumb.navs.map(function (item, index) {
	            if (item.link) {
	              return _react2.default.createElement(
	                _breadcrumb2.default.Item,
	                { key: index },
	                _react2.default.createElement(
	                  'a',
	                  {
	                    onClick: function onClick() {
	                      _this4.context.breadCrumb.link(item.link);
	                    } },
	                  item.text
	                )
	              );
	            } else {
	              return _react2.default.createElement(
	                _breadcrumb2.default.Item,
	                { key: index },
	                item.text
	              );
	            }
	          }),
	          _react2.default.createElement(
	            _breadcrumb2.default.Item,
	            { className: 'j-kit-elem-breadcrumb-extra' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ant-search-input-wrapper' },
	              search && !search.noSearch && _react2.default.createElement(
	                _input2.default.Group,
	                {
	                  className: this.state.focusSearch ? 'ant-search-input ant-search-input-focus' : 'ant-search-input' },
	                _react2.default.createElement(_input2.default, {
	                  placeholder: search.placeholder,
	                  ref: 'searchInput',
	                  defaultValue: keyword,
	                  onChange: function onChange(e) {
	                    return _this4.search(e.target.value);
	                  },
	                  onFocus: function onFocus(e) {
	                    return _this4.toFocusSearch(e.target === document.activeElement);
	                  },
	                  onBlur: function onBlur(e) {
	                    return _this4.toFocusSearch(false);
	                  },
	                  onPressEnter: function onPressEnter(e) {
	                    return _this4.search(e.target.value);
	                  } }),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'ant-input-group-wrap' },
	                  _react2.default.createElement(_button2.default, {
	                    icon: 'search',
	                    className: keyword.trim() ? 'ant-search-btn ant-search-btn-noempty' : 'ant-search-btn',
	                    onClick: function onClick(e) {
	                      return _this4.search(_this4.refs.searchInput.refs.input.value);
	                    } })
	                )
	              )
	            ),
	            this.props.breadcrumb.links && _react2.default.createElement(_navLink2.default, { links: this.props.breadcrumb.links }),
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'ghost', size: 'small', onClick: function onClick() {
	                  return _this4.props.doFetch();
	                } },
	              _react2.default.createElement(_icon2.default, { type: 'reload' }),
	              this.props.refreshText || '刷新'
	            )
	          )
	        ),
	        this.props.children,
	        _react2.default.createElement(_table2.default, _extends({
	          className: 'j-kit-table',
	          ref: 'content'
	        }, this.props.table, {
	          dataSource: this.props.list,
	          pagination: Object.assign({
	            current: parseInt(query[this.state.page]),
	            pageSize: parseInt(query[this.state.pageSize]),
	            total: this.props.metric.total
	          }, this.props.pagination),
	          loading: this.props.metric.loading,
	          onChange: function onChange(pager, filters, sorter) {
	            var _Object$assign;

	            _this4.props.doFetch(Object.assign((_Object$assign = {}, _defineProperty(_Object$assign, _this4.state.page, pager.current), _defineProperty(_Object$assign, 'sortField', sorter.field), _defineProperty(_Object$assign, 'sortOrder', sorter.order), _Object$assign), filters));
	          },
	          scroll: scroll }))
	      );
	    }
	  }]);

	  return SceneComponent;
	}(_react.Component), _class.propTypes = {
	  name: _react.PropTypes.string.isRequired,
	  table: _react.PropTypes.object,
	  breadcrumb: _react.PropTypes.object.isRequired,
	  metric: _react.PropTypes.object.isRequired,
	  list: _react.PropTypes.array.isRequired,
	  query: _react.PropTypes.object.isRequired,
	  search: _react.PropTypes.object,
	  autoAdapt: _react.PropTypes.bool.isRequired,
	  scroll: _react.PropTypes.bool,

	  doFetch: _react.PropTypes.func.isRequired
	}, _class.contextTypes = {
	  adaptPage: _react.PropTypes.object.isRequired,
	  breadCrumb: _react.PropTypes.object.isRequired
	}, _class.defaultProps = {
	  autoAdapt: true,
	  scroll: false,
	  table: {}
	}, _temp);
	exports.default = SceneComponent;
	module.exports = exports['default'];

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _autoComplete = __webpack_require__(224);

	var _autoComplete2 = _interopRequireDefault(_autoComplete);

	var _pagination = __webpack_require__(231);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _icon = __webpack_require__(22);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = (_temp = _class = function (_Component) {
	  _inherits(Search, _Component);

	  function Search(props, context) {
	    _classCallCheck(this, Search);

	    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

	    var selectedItem = props.options.find(function (item) {
	      return item[props.rowKey] == props.value;
	    });
	    _this.state = {
	      current: 1,
	      defaultValue: selectedItem ? '' : props.value,
	      value: selectedItem ? selectedItem[props.labelKey] : props.value,
	      selected: !!selectedItem,
	      list: props.options,
	      keyword: '',
	      disabled: props.disabled,
	      total: props.select.total,
	      loading: true
	    };
	    if (!selectedItem) {
	      _this.getData(context.dataModel, _this.state.disabled, {
	        page: 1,
	        keyword: _this.state.keyword
	      });
	    }
	    return _this;
	  }

	  _createClass(Search, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;

	      if (nextProps.value != this.props.value) {
	        if (!this.state.value) {
	          var selectedItem = nextProps.options.find(function (item) {
	            return item[_this2.props.rowKey] == nextProps.value;
	          });
	          this.setState({
	            defaultValue: selectedItem ? '' : nextProps.value,
	            value: selectedItem ? selectedItem[this.props.labelKey] : '',
	            list: nextProps.options,
	            selected: !!selectedItem,
	            disabled: nextProps.disabled
	          });
	        }
	      } else if (nextProps.disabled != this.props.disabled) {
	        this.setState({ disabled: nextProps.disabled });
	        this.getData(this.context.dataModel, !nextProps.disabled, {
	          page: this.state.current,
	          keyword: this.state.keyword
	        });
	      } else if (nextProps.options != this.props.options) {
	        if (!this.state.selected && this.state.defaultValue && this.state.defaultValue === this.state.value) {
	          var _selectedItem = nextProps.options.find(function (item) {
	            return item[_this2.props.rowKey] == _this2.state.defaultValue;
	          });

	          this.setState({
	            defaultValue: _selectedItem ? '' : this.state.defaultValue,
	            value: _selectedItem ? _selectedItem[this.props.labelKey] : '',
	            list: nextProps.options,
	            selected: !!_selectedItem,
	            disabled: nextProps.disabled
	          });
	        }
	      }
	    }
	  }, {
	    key: 'getData',
	    value: function getData(dataModel, disabled, params) {
	      var _this3 = this;

	      if (dataModel && !disabled) {
	        var promise = dataModel.getData(Object.assign(this.props.params, params));
	        promise.then(function (data) {
	          if (_this3.state.total !== undefined) {
	            _this3.setState({ list: data.list, current: params.page, total: data.total, keyword: params.keyword, loading: false });
	            data = data.list;
	          } else {
	            _this3.setState({ list: data });
	          }
	          if (!data.length) {
	            _this3.setState({
	              defaultValue: '',
	              selected: false
	            });
	            _this3.props.onChange('');
	          } else if (_this3.state.selected || _this3.state.defaultValue && _this3.state.defaultValue === _this3.state.value) {
	            var selectedItem = data.find(function (item) {
	              return item[_this3.props.rowKey] == _this3.state.value;
	            });

	            _this3.setState({
	              defaultValue: selectedItem ? '' : _this3.state.value,
	              value: selectedItem ? selectedItem[_this3.props.labelKey] : '',
	              selected: !!selectedItem
	            });
	            if (!selectedItem) {
	              _this3.props.onChange('');
	            }
	          }
	        });
	        return promise;
	      }
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(params, callback) {
	      var _this4 = this;

	      callback = callback || function () {};
	      clearTimeout(this.$timer_);
	      this.setState({ loading: true });

	      this.$timer_ = setTimeout(function () {
	        var promise = _this4.getData(_this4.context.dataModel, _this4.state.disabled, params);
	        promise && promise.then(function (res) {
	          return callback(null, res);
	        }, function (err) {
	          return callback(err);
	        });
	      }, 200);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var _props = this.props,
	          rowKey = _props.rowKey,
	          labelKey = _props.labelKey,
	          _onChange = _props.onChange,
	          select = _props.select;
	      var _state = this.state,
	          disabled = _state.disabled,
	          value = _state.value,
	          keyword = _state.keyword,
	          current = _state.current,
	          total = _state.total,
	          selected = _state.selected,
	          loading = _state.loading,
	          list = _state.list;


	      var selectProps = Object.assign(select, { disabled: disabled });

	      return _react2.default.createElement(
	        _autoComplete2.default,
	        _extends({
	          ref: function ref(search) {
	            return _this5.$search_ = search;
	          }
	        }, selectProps, {
	          value: value,
	          dropdownClassName: 'j-kit-minSearch',
	          optionLabelProp: 'label',
	          filterOption: function filterOption(value, option) {
	            if (option.key === 'miniPager') {
	              return true;
	            } else {
	              return option.key == value || option.props.children.toLocaleLowerCase().indexOf(value) > -1;
	            }
	          },
	          onSelect: function onSelect(value, option) {
	            if (value === 'miniPager') {
	              setTimeout(function () {
	                _this5.$search_._reactInternalInstance._renderedComponent._renderedComponent._instance.setOpenState(true);
	              }, 100);
	              return;
	            }
	            _this5.$val_ = value;
	            setTimeout(function () {
	              _this5.setState({ value: option.props.children, selected: true });
	            }, 100);
	            _onChange(value, option, list.find(function (item) {
	              return item[rowKey] == value;
	            }));
	          },
	          onChange: function onChange(value) {
	            if (value === undefined) {
	              _this5.setState({ current: 1, value: undefined, selected: false });
	              _this5.handleSearch({ page: 1, keyword: '' });

	              _onChange('');
	            } else if (_this5.$val_ !== value && value !== 'miniPager') {
	              _this5.setState({ current: 1, value: value, selected: false });
	              _this5.handleSearch({ page: 1, keyword: value });
	            }
	          } }),
	        list.map(function (item) {
	          return _react2.default.createElement(
	            _autoComplete2.default.Option,
	            { key: item[rowKey], label: item[rowKey] + '' },
	            item[labelKey]
	          );
	        }),
	        _react2.default.createElement(
	          _autoComplete2.default.Option,
	          { key: 'miniPager', label: keyword },
	          total !== undefined && !selected && _react2.default.createElement(_pagination2.default, {
	            size: 'small',
	            current: current,
	            total: total,
	            showLessItems: true,
	            onChange: function onChange(page) {
	              _this5.setState({ current: page, selected: false });
	              _this5.handleSearch({
	                page: page,
	                keyword: keyword
	              });
	            },
	            showTotal: function showTotal() {
	              return loading ? _react2.default.createElement(_icon2.default, { type: 'loading' }) : '\u5171\u5339\u914D ' + total + ' \u6761';
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return Search;
	}(_react.Component), _class.proptTypes = {
	  value: _react.PropTypes.string,
	  options: _react.PropTypes.array,
	  select: _react.PropTypes.object,
	  rowKey: _react.PropTypes.string.isRequired,
	  labelKey: _react.PropTypes.string.isRequired,
	  disabled: _react.PropTypes.bool,

	  onChange: _react.PropTypes.func.isRequired
	}, _class.contextTypes = {
	  dataModel: _react.PropTypes.object.isRequired
	}, _class.defaultProps = {
	  options: [],
	  select: {},
	  params: {},
	  rowKey: 'id',
	  labelKey: 'name',
	  onChange: function onChange() {}
	}, _temp);
	exports.default = Search;
	module.exports = exports['default'];

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(74);

	var _menu = __webpack_require__(70);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * + **基础BFT（广度遍历）算法**
	 *
	 * 1. 先遍历当前集合且调用其元素，再遍历其集合元素的子集
	 * 2. 每个元素调用时，传递参数值opt
	 * 3. 每个元素的调用返回值newOpt传给他的所有子集元素调用
	 */
	function BFS(menus, callback) {
	  var parentMenu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	  var result = void 0;
	  menus.every(function (menu) {
	    if (result = callback(menu, parentMenu)) {
	      return false;
	    } else {
	      var children = menu.children || menu.childRoutes;
	      if (children && (result = BFS(children, callback, parentMenu.concat(menu)))) {
	        return false;
	      } else {
	        return true;
	      }
	    }
	  });
	  return result;
	}
	var LOCAL_MENU_KEY = 'openMenu';
	var LOCAL_STRETCH_KEY = 'stretchMenu';

	var SideBar = (_temp = _class = function (_Component) {
	  _inherits(SideBar, _Component);

	  function SideBar(props, context) {
	    _classCallCheck(this, SideBar);

	    var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));

	    var pathname = props.currentPath;
	    var openKeys = [];
	    var selectedKeys = _this.props.selectedKeys || BFS(_this.props.menus, function (menu, parentMenu) {
	      if (pathname === menu.path) {
	        parentMenu.forEach(function (item) {
	          return openKeys.push(item.key);
	        });
	        return [menu.url || menu.path];
	      }
	    }) || ['introduction'];

	    _this.state = {
	      hasStretch: _this.getLocalItem(LOCAL_STRETCH_KEY, _this.props.hasStretch),
	      openKeys: openKeys.length ? openKeys : _this.getLocalItem(LOCAL_MENU_KEY, _this.props.openKeys),
	      selectedKeys: selectedKeys,
	      menus: _this.renderMenuItem(_this.props.menus)
	    };
	    return _this;
	  }

	  _createClass(SideBar, [{
	    key: 'getLocalItem',
	    value: function getLocalItem(key, defaultOpenKeys) {
	      var openKeys = void 0;
	      try {
	        openKeys = JSON.parse(sessionStorage.getItem(key)) || defaultOpenKeys;
	      } catch (e) {
	        openKeys = defaultOpenKeys;
	      }
	      return openKeys;
	    }
	  }, {
	    key: 'setLocalItem',
	    value: function setLocalItem(key, openKeys) {
	      try {
	        sessionStorage.setItem(key, JSON.stringify(openKeys));
	      } catch (e) {}
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var menus = this.props.menus;
	      if (menus !== nextProps.menus) {
	        menus = nextProps.menus;
	        this.setState({
	          menus: this.renderMenuItem(menus)
	        });
	      }

	      if (this.props.hasStretch !== nextProps.hasStretch) {
	        this.setState({ hasStretch: nextProps.hasStretch });
	        this.setLocalItem(LOCAL_STRETCH_KEY, nextProps.hasStretch);
	      } else if (this.props.selectedKeys !== nextProps.selectedKeys) {
	        this.setState({ selectedKeys: nextProps.selectedKeys });
	      } else if (this.props.currentPath !== nextProps.currentPath) {
	        var openKeys = [];
	        var selectedKeys = this.props.selectedKeys || BFS(menus, function (menu, parentMenu) {
	          if (nextProps.currentPath === menu.path) {
	            parentMenu.forEach(function (item) {
	              return openKeys.push(item.key);
	            });
	            return [menu.url || menu.path];
	          }
	        }) || ['introduction'];

	        this.setState({
	          selectedKeys: selectedKeys,
	          openKeys: openKeys
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'j-kit-dtboost-sidebar ' + (this.state.hasStretch ? 'j-kit-dtboost-sidebar-stretch' : '') },
	        _react2.default.createElement(
	          'h3',
	          { onClick: function onClick(e) {
	              return _this2.handleStretch();
	            } },
	          this.props.heading
	        ),
	        _react2.default.createElement(
	          _menu2.default,
	          {
	            theme: this.props.theme,
	            selectedKeys: this.state.selectedKeys,
	            onOpen: function onOpen(e) {
	              return _this2.handleOpenMenu();
	            },
	            onClose: function onClose(e) {
	              return _this2.handleCloseMenu();
	            },
	            defaultOpenKeys: this.state.openKeys,
	            className: 'j-kit-elem-left-nav',
	            mode: '' + (this.state.hasStretch ? 'vertical' : 'inline') },
	          this.state.menus
	        )
	      );
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(menu, isSubMenu) {
	      if (menu.path) {
	        this.setState({
	          selectedKeys: [menu.path]
	        });
	      }
	      this.props.onClick && this.props.onClick(menu, isSubMenu);
	    }
	  }, {
	    key: 'handleOpenMenu',
	    value: function handleOpenMenu(menu) {
	      var idx = this.state.openKeys.findIndex(function (key) {
	        return key === menu.key;
	      });
	      if (idx === -1) {
	        var openKeys = this.state.openKeys.concat(menu.key);
	        this.setState({
	          openKeys: openKeys
	        });
	        this.setLocalItem(LOCAL_MENU_KEY, openKeys);
	      }
	    }
	  }, {
	    key: 'handleCloseMenu',
	    value: function handleCloseMenu(menu) {
	      var idx = this.state.openKeys.findIndex(function (key) {
	        return key === menu.key;
	      });
	      if (idx > -1) {
	        var openKeys = this.state.openKeys.splice(idx, 1);
	        this.setState({
	          openKeys: openKeys
	        });
	        this.setLocalItem(LOCAL_MENU_KEY, openKeys);
	      }
	    }
	  }, {
	    key: 'handleStretch',
	    value: function handleStretch() {
	      var hasStretch = !this.state.hasStretch;
	      this.setState({ hasStretch: hasStretch });
	      this.setLocalItem(LOCAL_STRETCH_KEY, hasStretch);
	      this.props.onStretch && this.props.onStretch(hasStretch);
	    }
	    /**
	     * menu = {
	     *  key,
	     *  path,
	     *  icon,
	     *  text,
	     *  name,
	     *  disabled,
	     *  url,
	     *  target
	     * }
	     */

	  }, {
	    key: 'renderMenuItem',
	    value: function renderMenuItem(menus) {
	      var _this3 = this;

	      return menus.map(function (menu, index) {
	        var children = menu.children || menu.childRoutes;
	        if (children) {
	          return _react2.default.createElement(
	            _menu2.default.SubMenu,
	            {
	              key: menu.key,
	              title: _react2.default.createElement(
	                'span',
	                null,
	                menu.icon,
	                _react2.default.createElement(
	                  'span',
	                  { className: 'j-kit-elem-text' },
	                  menu.text || menu.name
	                )
	              ),
	              onClick: function onClick(e) {
	                return _this3.handleClick(menu, true);
	              },
	              disabled: menu.disabled },
	            _this3.renderMenuItem(children)
	          );
	        } else if (menu.url || menu.path) {
	          return _react2.default.createElement(
	            _menu2.default.Item,
	            { className: menu.key + '-wrap', key: menu.path, disabled: menu.disabled },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              {
	                to: menu.url || menu.path,
	                target: menu.target || '',
	                onClick: function onClick(e) {
	                  return _this3.handleClick(menu);
	                } },
	              menu.icon,
	              _react2.default.createElement(
	                'span',
	                { className: 'j-kit-elem-text' },
	                menu.text || menu.name
	              )
	            )
	          );
	        } else {
	          return _react2.default.createElement(_menu2.default.Item, {
	            key: menu.key,
	            title: _react2.default.createElement(
	              'span',
	              null,
	              menu.icon,
	              _react2.default.createElement(
	                'span',
	                { className: 'j-kit-elem-text' },
	                menu.text || menu.name
	              )
	            ),
	            disabled: menu.disabled });
	        }
	      });
	    }
	  }]);

	  return SideBar;
	}(_react.Component), _class.BFS = BFS, _class.propsTypes = {
	  currentPath: _react.PropTypes.string.isRequired,
	  heading: _react.PropTypes.any,
	  menus: _react.PropTypes.array.isRequired,
	  openKeys: _react.PropTypes.array,
	  selectedKeys: _react.PropTypes.array,
	  hasStretch: _react.PropTypes.bool,
	  theme: _react.PropTypes.string,
	  onStretch: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	}, _class.defaultProps = {
	  menus: [],
	  openKeys: [],
	  hasStretch: false,
	  theme: 'light',
	  heading: _react2.default.createElement(
	    'div',
	    { className: 'j-kit-elem-heading' },
	    _react2.default.createElement(
	      'i',
	      { className: 'iconfont' },
	      '\uE624'
	    )
	  )
	}, _temp);
	exports.default = SideBar;
	module.exports = exports['default'];

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _collapse = __webpack_require__(226);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _input = __webpack_require__(69);

	var _input2 = _interopRequireDefault(_input);

	var _tooltip = __webpack_require__(233);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _icon = __webpack_require__(22);

	var _icon2 = _interopRequireDefault(_icon);

	var _alert = __webpack_require__(223);

	var _alert2 = _interopRequireDefault(_alert);

	var _dragItem = __webpack_require__(66);

	var _dragItem2 = _interopRequireDefault(_dragItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TagSearcher = (_temp = _class = function (_Component) {
	  _inherits(TagSearcher, _Component);

	  function TagSearcher(props) {
	    _classCallCheck(this, TagSearcher);

	    var _this = _possibleConstructorReturn(this, (TagSearcher.__proto__ || Object.getPrototypeOf(TagSearcher)).call(this, props));

	    _this.state = {
	      keyword: '',
	      entityCode: '',
	      tagCode: '',
	      objectList: [],
	      tagsMap: {},
	      dimsMap: {}
	    };
	    _this.handleChange(props.entityCode, props.tagCode, props.objectList);
	    return _this;
	  }

	  _createClass(TagSearcher, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // #! objectList发生变化时因为请求单个entity的tagList #! 只有可能改变entityCode和tagCode, 用来定位
	      var mergeProps = {
	        entityCode: this.state.entityCode,
	        tagCode: this.state.tagCode,
	        objectList: this.state.objectList,
	        keyword: this.state.keyword
	      };
	      var keyword = this.state.keyword;
	      var hasReceive = true;
	      switch (true) {
	        case this.props.entityCode !== nextProps.entityCode:
	          mergeProps.entityCode = nextProps.entityCode;
	          break;
	        case this.props.tagCode !== nextProps.tagCode:
	          mergeProps.tagCode = nextProps.tagCode;
	          break;
	        case nextProps.objectList !== this.props.objectList:
	          mergeProps.objectList = nextProps.objectList;
	          break;
	        case this.props.keyword !== nextProps.keyword:
	          keyword = '';
	          // #! 因为setState是异步的
	          this.setState({ keyword: '' });
	          mergeProps.keyword = nextProps.keyword;
	          break;
	        default:
	          hasReceive = false;
	          break;
	      }
	      if (hasReceive) {
	        // #! 搜索时，请求tagList会导致objectList更新
	        if (keyword) {
	          var _state$keyword$split = this.state.keyword.split('.'),
	              _state$keyword$split2 = _slicedToArray(_state$keyword$split, 1),
	              entityCodeOrName = _state$keyword$split2[0];

	          var objectList = nextProps.objectList.filter(function (item) {
	            return item.entityCode.indexOf(entityCodeOrName) > -1 || item.entityName.indexOf(entityCodeOrName) > -1;
	          });
	          this.handleChange(mergeProps.entityCode, mergeProps.tagCode, objectList);
	        } else if (mergeProps.keyword) {
	          this.handleSearch(mergeProps.keyword);
	        } else {
	          this.handleChange(mergeProps.entityCode, mergeProps.tagCode, mergeProps.objectList);
	        }
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return this.props !== nextProps || this.state !== nextState;
	    }
	  }, {
	    key: 'getDims',
	    value: function getDims(object) {
	      // #! entity
	      if (object.dims) {
	        return object.dims.map(function (dim) {
	          return { name: dim.dimCode, code: dim.dimId, entityCode: object.entityCode };
	        });
	        // #! link
	      } else if (object.objects) {
	        return object.objects.map(function (obj) {
	          return {
	            name: obj.entityCode + '.' + obj.dims[0].dimCode,
	            code: obj.relationshipId,
	            entityCode: object.entityCode
	          };
	        });
	      }
	    }

	    // #! 展开object或者定位object和tag

	  }, {
	    key: 'handleChange',
	    value: function handleChange(entityCode, tagCode, objectList) {
	      var tagsMap = {};
	      var dimsMap = {};
	      var object = entityCode ? objectList.find(function (item) {
	        return item.entityCode === entityCode;
	      }) : objectList[0];
	      var focusItem = void 0;
	      if (object) {
	        // #! 需要定位的元素, 定位到entity
	        if (entityCode) {
	          focusItem = object;
	        }
	        if (object.tagList) {
	          tagsMap[entityCode] = {
	            list: object.tagList
	          };
	          if (tagCode) {
	            // #! 如果有tagCode则是定位到tag
	            focusItem = object.tagList.find(function (tag) {
	              return tag.tagCode === tagCode;
	            });
	            tagsMap[entityCode].tagCode = focusItem ? focusItem.tagCode : '';
	          }
	        } else if (entityCode) {
	          tagsMap[entityCode] = {
	            loading: true,
	            list: []
	          };
	          // #! 请求
	          this.props.doFetchTagList(entityCode);
	        }
	        dimsMap[entityCode] = this.getDims(object);
	      }
	      if (focusItem) {// undefined表示collaspse的点击
	        // 延迟200毫秒后定位
	      }
	      this.setState({
	        tagCode: tagCode,
	        entityCode: entityCode,
	        objectList: objectList,
	        tagsMap: tagsMap,
	        dimsMap: dimsMap
	      });
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(keyword) {
	      var _this2 = this;

	      var _keyword$split = keyword.split('.'),
	          _keyword$split2 = _slicedToArray(_keyword$split, 2),
	          entityCodeOrName = _keyword$split2[0],
	          tagCodeOrName = _keyword$split2[1];

	      var tagsMap = {};
	      var dimsMap = {};
	      var objectList = this.props.objectList;
	      if (entityCodeOrName) {
	        objectList = objectList.filter(function (item) {
	          // #! 匹配name或者code
	          if (item.entityCode.indexOf(entityCodeOrName) > -1 || item.entityName.indexOf(entityCodeOrName) > -1) {
	            if (tagCodeOrName) {
	              if (item.tagList) {
	                // #! 匹配name或者code
	                tagsMap[item.entityCode] = {
	                  list: item.tagList.filter(function (tag) {
	                    return tag.tagCode.indexOf(tagCodeOrName) > -1 || tag.tagName.indexOf(tagCodeOrName) > -1;
	                  })
	                };
	              } else {
	                tagsMap[item.entityCode] = {
	                  loading: true,
	                  list: []
	                };
	                _this2.props.doFetchTagList(item.entityCode);
	              }
	            } else {
	              if (item.tagList) {
	                tagsMap[item.entityCode] = {
	                  list: item.tagList
	                };
	              } else {
	                tagsMap[item.entityCode] = {
	                  loading: true,
	                  list: []
	                };
	                _this2.props.doFetchTagList(item.entityCode);
	              }
	              dimsMap[item.entityCode] = _this2.getDims(item);
	            }
	            return true;
	          }
	        });
	      }

	      var entityCode = objectList[0] && objectList[0].entityCode;
	      var tagCode = tagsMap[entityCode] && tagsMap[entityCode].list.length && tagsMap[entityCode].list[0].tagCode;
	      this.setState({ entityCode: entityCode, tagCode: tagCode, objectList: objectList, tagsMap: tagsMap, dimsMap: dimsMap });
	    }
	  }, {
	    key: 'clearSearch',
	    value: function clearSearch() {
	      this.setState({ keyword: '' });
	      this.handleSearch('');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _state = this.state,
	          keyword = _state.keyword,
	          entityCode = _state.entityCode,
	          objectList = _state.objectList,
	          tagsMap = _state.tagsMap,
	          dimsMap = _state.dimsMap;
	      // #! 判断是否需要拖拽

	      var doDrag = this.props.doDrag;
	      var ItemDom = _dragItem2.default;
	      if (!doDrag) {
	        ItemDom = _react2.default.createClass({
	          displayName: 'ItemDom',
	          render: function render() {
	            return _react2.default.createElement(
	              'div',
	              null,
	              this.props.children
	            );
	          }
	        });
	      }

	      // #! 遍历输出所有object,
	      // 展开的object必然有dims，不展开则没有；展开的object必然有tagList（分为空和有列表数据，！！完全找不到则需要发请求去拿），不展开则没有
	      // 。 #! handleChange，展开object；handleSearch，搜索object或tag
	      return _react2.default.createElement(
	        'div',
	        { className: 'j-kit-tagSearcher' },
	        _react2.default.createElement(_input2.default.Search, {
	          placeholder: this.props.searchPlaceholder || '使用 实体.标签 进行模糊搜索',
	          value: keyword,
	          suffix: keyword ? _react2.default.createElement(_icon2.default, { type: 'close-circle', onClick: function onClick(e) {
	              return _this3.clearSearch();
	            } }) : null,
	          onChange: function onChange(e) {
	            _this3.setState({ keyword: e.target.value });
	          },
	          onSearch: function onSearch(e) {
	            return _this3.handleSearch(_this3.state.keyword);
	          } }),
	        _react2.default.createElement(
	          'div',
	          { className: 'j-kit-elem-oltList' },
	          this.props.keyword ? _react2.default.createElement(_alert2.default, { message: '\u901A\u8FC7\u5224\u5B9A\u5F0F\u5B9A\u4F4D', type: 'info', closable: true, onClose: function onClose(e) {
	              return _this3.clearSearch();
	            } }) : null,
	          _react2.default.createElement(
	            _collapse2.default,
	            {
	              accordion: true,
	              activeKey: entityCode,
	              onChange: function onChange(key) {
	                return _this3.handleChange(key, '', objectList);
	              } },
	            objectList.map(function (entity) {
	              return _react2.default.createElement(
	                _collapse2.default.Panel,
	                {
	                  key: entity.entityCode,
	                  header: _react2.default.createElement(
	                    ItemDom,
	                    { key: entity.entityCode, doAction: doDrag, type: 'entity', data: entity },
	                    _react2.default.createElement('div', { className: 'j-kit-elem-icon-entity' }),
	                    _react2.default.createElement(
	                      'span',
	                      { title: entity.entityCode + '(' + entity.entityName + ')' },
	                      entity.entityCode + '(' + entity.entityName + ')'
	                    )
	                  ) },
	                _react2.default.createElement(
	                  'ul',
	                  null,
	                  dimsMap[entity.entityCode] && dimsMap[entity.entityCode].map(function (dim) {
	                    return _react2.default.createElement(
	                      'li',
	                      null,
	                      _react2.default.createElement(
	                        ItemDom,
	                        { key: dim.code, doAction: doDrag, type: 'dim', data: dim },
	                        _react2.default.createElement('div', { className: 'j-kit-elem-icon-dim' }),
	                        _react2.default.createElement(
	                          _tooltip2.default,
	                          {
	                            placement: 'right',
	                            title: (entity.entityType === 'object' && '实体' || '关系') + '(' + entity.entityName + ')\u4E0B\u53EF\u7528\u7684\u6807\u7B7E' },
	                          _react2.default.createElement(_icon2.default, { type: 'pushpin-o', className: 'j-kit-elem-icon-pushpin-o' })
	                        ),
	                        _react2.default.createElement(
	                          'span',
	                          { title: dim.name },
	                          dim.name
	                        )
	                      )
	                    );
	                  })
	                ),
	                _react2.default.createElement(
	                  'ul',
	                  null,
	                  tagsMap[entity.entityCode] && (tagsMap[entity.entityCode].loading ? _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      'span',
	                      null,
	                      '\u6B63\u5728\u62C9\u53D6...'
	                    )
	                  ) : tagsMap[entity.entityCode].list.length ? tagsMap[entity.entityCode].list.map(function (tag) {
	                    return _react2.default.createElement(
	                      'li',
	                      null,
	                      _react2.default.createElement(
	                        ItemDom,
	                        { key: tag.tagCode, doAction: doDrag, type: 'tag', data: tag },
	                        _react2.default.createElement('div', { className: 'j-kit-elem-icon-tag' }),
	                        _react2.default.createElement(
	                          _tooltip2.default,
	                          {
	                            placement: 'right',
	                            title: (entity.entityType === 'object' && '实体' || '关系') + '(' + entity.entityName + ')\u4E0B\u53EF\u7528\u7684\u6807\u7B7E' },
	                          _react2.default.createElement(_icon2.default, { type: 'tag-o', className: 'j-kit-elem-icon-tag-o' })
	                        ),
	                        _react2.default.createElement(
	                          'span',
	                          { title: tag.tagCode + '(' + tag.tagName + ')' },
	                          tag.tagCode + '(' + tag.tagName + ')'
	                        )
	                      )
	                    );
	                  }) : _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      'span',
	                      null,
	                      '\u65E0\u6807\u7B7E'
	                    )
	                  ))
	                )
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return TagSearcher;
	}(_react.Component), _class.propTypes = {
	  entityCode: _react.PropTypes.string.isRequired,
	  tagCode: _react.PropTypes.string.isRequired,
	  keyword: _react.PropTypes.string.isRequired,
	  objectList: _react.PropTypes.array.isRequired,
	  doFetchTagList: _react.PropTypes.func.isRequired
	}, _class.defaultProps = {
	  entityCode: '',
	  tagCode: '',
	  keyword: '',
	  objectList: []
	}, _temp);
	exports.default = TagSearcher;
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = errorFetch;

	var _index = __webpack_require__(36);

	function errorFetch(res, errorNotification) {
	  var checkStatus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	  var statusResult = checkStatus(res);
	  if (statusResult) {
	    var error = new Error(statusResult.message || res.message || '');
	    error.response = res;
	    error.errorNotification = new _index.Notifier({
	      type: 'error',
	      level: 'two',
	      trace: true,
	      title: statusResult.title || '错误提示'
	    });
	    throw error;
	  }
	  return res;
	}
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = errorReducer;

	var _index = __webpack_require__(36);

	function errorReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	  var action = arguments[1];

	  if (!action.error || action.suppressGlobalErrorNotification) {
	    return state;
	  }

	  if (action.error.errorNotification) {
	    action.error.errorNotification.notify({
	      content: action.error.message || action.error.response,
	      trace: true
	    });
	  } else {
	    var errorNotification = _index.Notifier.notifierFactory('error', action.error.title, action.error.response || action.error.message);
	    errorNotification.notify({
	      trace: true
	    });
	  }
	  return action.error;
	} /**
	   * ### 集成到reducer中
	   * 在redux体系中，一旦有action触发，所有的reducer都会调用一次，而errorReducer会专门判断action是否包含error属性，包含即认定action发生了错误。
	   * 
	   * 识别action发生错误的基本结构：
	   * 
	   * ```javascript
	   *  action = {
	   *    suppressGlobalErrorNotification: Boolean, // 为true表示忽略错误 
	   *    error: { // 否则认定发生了错误，需要做提示。
	   *      errorNotification: Notifier, // 存在则通过告警器来做提示
	   *      response: Response, // 发生错误的响应体，比如http请求的返回结果
	   *      message: String, // 简单错误提示
	   *    }
	   *  }
	   * ```
	   */
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _history = __webpack_require__(72);

	var _seamlessImmutable = __webpack_require__(236);

	var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

	var _damoCore = __webpack_require__(39);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SceneSelector = function (_RxSelector) {
	  _inherits(SceneSelector, _RxSelector);

	  function SceneSelector(initParams, forceKeep) {
	    _classCallCheck(this, SceneSelector);

	    var _this = _possibleConstructorReturn(this, (SceneSelector.__proto__ || Object.getPrototypeOf(SceneSelector)).call(this));

	    _this.$initParams_ = initParams;
	    _this.$query_ = (0, _seamlessImmutable2.default)(initParams);
	    _this.$forceKeep_ = forceKeep;
	    return _this;
	  }

	  _createClass(SceneSelector, [{
	    key: '_sync',
	    value: function _sync(ownProps) {
	      this.$pathname_ = ownProps.location.pathname;

	      var newParams = {};
	      for (var key in this.$initParams_) {
	        if (ownProps.location.query[key] === undefined) {
	          newParams[key] = this.$initParams_[key];
	        } else {
	          newParams[key] = ownProps.location.query[key];
	        }
	      }
	      this.setQuery(newParams);
	    }
	  }, {
	    key: 'setQuery',
	    value: function setQuery(params) {
	      if (params) {
	        for (var key in this.$query_) {
	          if (params[key] !== undefined) {
	            var type = _typeof(this.$query_[key]);
	            if (_typeof(params[key]) === type) {
	              this.$query_ = this.$query_.set(key, params[key]);
	            } else {
	              this.$query_ = this.$query_.set(key, new Function('return ' + params[key])());
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: 'getQuery',
	    value: function getQuery() {
	      return this.$query_;
	    }
	  }, {
	    key: 'replace',
	    value: function replace() {
	      var breadCrumb = this.getService('breadCrumb');
	      breadCrumb && breadCrumb.go(this.$pathname_, this.$query_.asMutable(), true);
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize(ownProps, parentSelector) {
	      var _this2 = this;

	      var prevQuery = this.getQuery();
	      this._sync(ownProps);
	      var nextQuery = this.getQuery();

	      var keep = !this.$forceKeep_;
	      if (keep) {
	        for (var key in prevQuery) {
	          if (prevQuery[key] !== nextQuery[key]) {
	            keep = false;
	            break;
	          }
	        }
	      }

	      if (keep) {
	        this.once('afterInitialize', function () {
	          var breadCrumb = _this2.getService('breadCrumb');
	          breadCrumb && breadCrumb.setPrevLocation(ownProps.location);
	        });
	      }
	    }
	  }]);

	  return SceneSelector;
	}(_damoCore.RxSelector);

	exports.default = SceneSelector;
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var w = window,
	    documentElement = document.documentElement,
	    body = document.body;

	var AdaptPage = function () {
	  _createClass(AdaptPage, [{
	    key: "setOffsetHeight",
	    value: function setOffsetHeight(offsetHeight) {
	      this.$offsetHeight_ = offsetHeight;
	    }
	  }, {
	    key: "getScreenHeight",
	    value: function getScreenHeight() {
	      return (w.innerHeight || documentElement.clientHeight || body.clientHeight) - this.$offsetHeight_;
	    }
	  }], [{
	    key: "inIframe",

	    /**
	     * identify in an iframe
	     * see: http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
	     */
	    value: function inIframe() {
	      try {
	        return window.self !== window.top;
	      } catch (e) {
	        return true;
	      }
	    }
	  }]);

	  function AdaptPage() {
	    var _this = this;

	    _classCallCheck(this, AdaptPage);

	    this.$offsetHeight_ = 0;
	    this.$isInIframe_ = AdaptPage.inIframe();
	    this.$watchers = [];
	    this.$adapter = function () {
	      clearTimeout(_this.$timer);
	      _this.$timer = setTimeout(function () {
	        var watcher = void 0;
	        var index = 0;
	        while (watcher = _this.$watchers[index]) {
	          if (!watcher.el || watcher.el.offsetParent === null) {
	            _this.$watchers.splice(index, 1);
	          } else {
	            watcher.fn(watcher.el);
	            index++;
	          }
	        }
	      }, 200);
	    };

	    /**
	     * + add resize
	     * see: http://stackoverflow.com/questions/19014250/reactjs-rerender-on-browser-resize
	     */
	    window.addEventListener("resize", this.$adapter);
	  }

	  _createClass(AdaptPage, [{
	    key: "onAdapt",
	    value: function onAdapt(el, callback) {
	      this.$watchers.push({ el: el, fn: callback });
	      callback(el, this.$isInIframe_);
	    }
	  }, {
	    key: "autoAdaptDim",
	    value: function autoAdaptDim(el, setter) {
	      var _this2 = this;

	      var callback = function callback(el, isInIframe) {
	        setter(el.offsetHeight - _this2.$offsetHeight_, isInIframe, _this2.getScreenHeight());
	      };
	      this.onAdapt(el, callback);
	    }
	  }, {
	    key: "autoAdapt",
	    value: function autoAdapt(dom, action) {
	      this.autoAdaptDim(dom, function (size, isInIframe, screenHeight) {
	        action(size, screenHeight, isInIframe);
	      });
	    }
	  }, {
	    key: "dispose",
	    value: function dispose(fn) {
	      this.$watchers = [];
	      window.removeEventListener("resize", this.$adapter);
	    }
	  }]);

	  return AdaptPage;
	}();

	exports.default = AdaptPage;
	module.exports = exports["default"];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _damoCore = __webpack_require__(39);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseColumn = function () {
	  function BaseColumn() {
	    _classCallCheck(this, BaseColumn);
	  }

	  _createClass(BaseColumn, [{
	    key: 'columns',
	    set: function set(cols) {
	      this.$columns_ = cols;
	    },
	    get: function get() {
	      var _this = this;

	      var tableColumns = this.$columns_ || this.getColumns();
	      return tableColumns.map(function (item) {
	        if (!item.render) {
	          item.render = function (text, record) {
	            var funcName = 'render' + (0, _damoCore.ucfirst)((0, _damoCore.toCamlCase)(item.dataIndex));
	            if (_this[funcName]) {
	              return _this[funcName](text, record);
	            } else {
	              return text;
	            }
	          };
	        }
	        return item;
	      });
	    }
	  }]);

	  return BaseColumn;
	}();

	exports.default = BaseColumn;
	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _history = __webpack_require__(72);

	var _react = __webpack_require__(2);

	var _reactRouter = __webpack_require__(74);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BLink = function (_Component) {
	  _inherits(BLink, _Component);

	  function BLink() {
	    _classCallCheck(this, BLink);

	    return _possibleConstructorReturn(this, (BLink.__proto__ || Object.getPrototypeOf(BLink)).apply(this, arguments));
	  }

	  _createClass(BLink, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      if (Object(props.to) === props.to) {
	        props.to.query = Object.assign(props.to.query || {}, BreadCrumb.query);
	      } else {
	        props.query = Object.assign(props.query || {}, BreadCrumb.query);
	      }
	      return React.createElement(_reactRouter.Link, props);
	    }
	  }]);

	  return BLink;
	}(_react.Component);
	// see:
	// https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md


	var BreadCrumb = (_temp = _class = function () {
	  function BreadCrumb(router) {
	    _classCallCheck(this, BreadCrumb);

	    this.$router_ = router;
	  }
	  /**
	   * 这里的参数不能为混淆处理
	   * see: http://blog.csdn.net/raphealguo/article/details/26075943
	   */


	  _createClass(BreadCrumb, [{
	    key: 'setPrevLocation',
	    value: function setPrevLocation(location) {
	      location.query = Object.assign(location.query || {}, BreadCrumb.query);
	      this.$prevLocation_ = location;
	    }
	  }, {
	    key: 'canGoBack',
	    value: function canGoBack(location) {
	      if (Object(location) === location) {
	        return false;
	      } else {
	        return this.$prevLocation_ && this.$prevLocation_.pathname.indexOf(location) > -1;
	      }
	    }
	  }, {
	    key: 'goBack',
	    value: function goBack(location, query) {
	      if (this.canGoBack(location)) {
	        this.$router_.replace(this.$prevLocation_);
	      } else {
	        this.go(location, query);
	      }
	    }
	  }, {
	    key: 'go',
	    value: function go(location, query, isUpdate) {
	      if (typeof location === 'string') {
	        location = (0, _history.createLocation)(location);
	      }
	      query = Object.assign(query || {}, BreadCrumb.query);
	      location.query = query;
	      if (isUpdate) {
	        this.$prevLocation_ = location;
	      }
	      this.$router_.replace(location);
	    }
	  }, {
	    key: 'link',
	    value: function link(location, query) {
	      if (typeof location === 'string') {
	        location = (0, _history.createLocation)(location);
	      }
	      query = Object.assign(query || {}, BreadCrumb.query);
	      location.query = query;
	      this.$router_.push(location);
	    }
	  }]);

	  return BreadCrumb;
	}(), _class.Link = BLink, _class.query = {}, _class.$inject = ['router'], _temp);
	exports.default = BreadCrumb;
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp; /**
	                    * # 通用校验模块
	                    * 1. 通过定义校验规则用于校验数据合法
	                    * 2. 集成antd-form，校验表单合法
	                    */


	var _asyncValidator = __webpack_require__(77);

	var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

	var _damoCore = __webpack_require__(39);

	var _hoistNonReactStatics = __webpack_require__(73);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _form = __webpack_require__(228);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var noop = function noop() {};

	/**
	 * + async-validator@1.6.6
	 * > see: https://github.com/yiminghe/async-validator
	 */
	var Validator = (_temp = _class = function () {
	  function Validator(props, validateRules) {
	    _classCallCheck(this, Validator);

	    for (var key in validateRules) {
	      validateRules[key] = this.pack(validateRules[key]);
	    }
	    this.$validateRules_ = validateRules || {};
	    this.$handleSubmit_ = function (errors, values) {
	      if (errors) {
	        return false;
	      } else {
	        return values;
	      }
	    };
	  }
	  /**
	   * + 校验规则
	   * ```
	   * fieldRules = [{
	   *  [fieldName]: {
	   *    type: ['string', 'number', 'boolean', 'method', 'regexp', 'integer', 'float', 'array', 'object', 'enum', 'date', 'url', 'hex', 'email'],
	   *    required,
	   *    pattern,
	   *    whitespace,
	   *    transform,
	   *    message,
	   *    validator,
	   *    [range(min, max): 'string' | 'array' | 'integer'],
	   *    [length: 'string' | 'array']
	   *    [enum: 'enum'],
	   *    [fields: 'deep rules'],
	   *    [defaultField: 'array' | 'object']
	   *  }
	   * },...]
	   * ```
	   */


	  _createClass(Validator, [{
	    key: 'pack',
	    value: function pack(rule) {
	      if (Array.isArray(rule)) {
	        rule = rule.map(function (item) {
	          if (typeof item.pattern === 'string') {
	            item.pattern = Validator.templates.pattern[item.pattern];
	          }
	          return item;
	        });
	      } else {
	        if (typeof rule.pattern === 'string') {
	          rule.pattern = Validator.templates.pattern[rule.pattern];
	        }
	      }
	      return rule;
	    }
	  }, {
	    key: 'setForm',
	    value: function setForm(form, submitCallback) {
	      this.$form_ = form;
	      if (submitCallback) {
	        this.$handleSubmit_ = submitCallback;
	      }
	    }
	  }, {
	    key: 'submit',
	    value: function submit(callback) {
	      var _this = this;

	      return this.validateFieldsAndScroll(function (errors, values) {
	        values = _this.$handleSubmit_(errors, values);
	        if (values === false) {
	          return false;
	        } else {
	          return callback(values);
	        }
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.$form_.resetFields();
	    }
	  }, {
	    key: 'getProps',
	    value: function getProps(fieldName, rule) {
	      if (this.$validateRules_[fieldName]) {
	        return assignDeep(this.$validateRules_[fieldName], rule && this.pack(rule));
	      } else {
	        return rule && this.pack(rule);
	      }
	    }
	  }, {
	    key: 'validate',
	    value: function validate(source, callback) {
	      new _asyncValidator2.default(this.$validateRules_).validate(source, function (errors, values) {
	        if (Validator.errorHandler(errors, values) !== false) {
	          callback && callback(errors, values);
	        }
	      });
	    }

	    // #! for antd-form

	  }, {
	    key: 'getFieldProps',
	    value: function getFieldProps(fieldName, option) {
	      if (!option.rules && option.rule) {
	        option.rules = [option.rule];
	      }
	      if (this.$validateRules_[fieldName]) {
	        // option.rules = assignDeep([].concat(this.$validateRules_[fieldName]), option.rules && this.pack(option.rules) || []);
	        option.rules = [].concat(this.$validateRules_[fieldName], option.rules && this.pack(option.rules) || []);
	      } else if (option.rules) {
	        option.rules = this.pack(option.rules);
	      }
	      return this.$form_.getFieldProps(fieldName, option);
	    }
	  }, {
	    key: 'getFieldDecorator',
	    value: function getFieldDecorator(fieldName, option) {
	      if (!option.rules && option.rule) {
	        option.rules = [option.rule];
	      }
	      if (this.$validateRules_[fieldName]) {
	        // option.rules = assignDeep([].concat(this.$validateRules_[fieldName]), option.rules && this.pack(option.rules) || []);
	        option.rules = [].concat(this.$validateRules_[fieldName], option.rules && this.pack(option.rules) || []);
	      } else if (option.rules) {
	        option.rules = this.pack(option.rules);
	      }
	      return this.$form_.getFieldDecorator(fieldName, option);
	    }
	  }, {
	    key: 'validateFields',
	    value: function validateFields() {
	      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

	      var defer = new _damoCore.Deferred();
	      this.$form_.validateFields(function (errors, values) {
	        if (Validator.errorHandler(errors, values) !== false) {
	          var result = callback(errors, values);
	          if (result && result.then) {
	            result.then(defer.resolve, defer.reject);
	          } else if (result === false) {
	            defer.reject(false);
	          } else {
	            defer.resolve(result);
	          }
	        }
	      });
	      return defer.promise;
	    }
	  }, {
	    key: 'validateFieldsAndScroll',
	    value: function validateFieldsAndScroll() {
	      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

	      var defer = new _damoCore.Deferred();
	      this.$form_.validateFieldsAndScroll(function (errors, values) {
	        if (Validator.errorHandler(errors, values) !== false) {
	          var result = callback(errors, values);
	          if (result && result.then) {
	            result.then(defer.resolve, defer.reject);
	          } else if (result === false) {
	            defer.reject(false);
	          } else {
	            defer.resolve(result);
	          }
	        }
	      });
	      return defer.promise;
	    }
	  }]);

	  return Validator;
	}(), _class.enhanceForm = function (option) {
	  return function (BaseComponent) {
	    var Component = _form2.default.create(option)(BaseComponent);
	    return (0, _hoistNonReactStatics2.default)(Component, BaseComponent);
	  };
	}, _class.validate = function (rules, source, callback) {
	  var descriptor = {};
	  for (var key in rules) {
	    if (typeof rules[key] === 'boolean') {
	      descriptor[key] = {
	        type: 'string',
	        required: rules[key]
	      };
	    } else {
	      descriptor[key] = rules[key];
	    }
	    fields[key] = source[key];
	  }
	  var validator = new _asyncValidator2.default(descriptor);
	  validator.validate(source, callback);
	}, _class.errorHandler = function () {}, _class.templates = {
	  pattern: {
	    // #! 中英字母数字下划线
	    legal: /^[A-Za-z0-9_\u4e00-\u9fa5]*$/,
	    // #! 必须是字母数字、下划线、中划线以及
	    light_legal: /^[A-Za-z0-9\._\-]*$/,
	    // #! 以字母开头，不能包含中文或特殊字符
	    light_light_legal: /^[a-zA-Z]\w*$/,
	    // #! 中英字母数字下划线
	    dark_legal: /^[A-Za-z0-9\_\u4e00-\u9fa5]*$/,
	    // #! 必须是中英字母数字下划线以及.
	    dark_dark_legal: /^[A-Za-z0-9\._\u4e00-\u9fa5]*$/
	  } }, _class.$inject = ['props', 'validateRules'], _temp);
	exports.default = Validator;


	function assignDeep(obj, newObj) {
	  if (Array.isArray(obj)) {
	    return obj.map(function (item, index) {
	      return assignDeep(item, newObj[index]);
	    });
	  } else {
	    return Object.assign(obj, newObj);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_223__;

/***/ },
/* 224 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_224__;

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_225__;

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_226__;

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_227__;

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_228__;

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_229__;

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_230__;

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_231__;

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_232__;

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_233__;

/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_234__;

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_235__;

/***/ },
/* 236 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_236__;

/***/ }
/******/ ])))
});
;