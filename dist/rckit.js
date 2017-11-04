(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("antd/lib/icon"), require("antd/lib/button"), require("react-dnd"), require("antd/lib/input"), require("antd/lib/menu"), require("antd/lib/message"), require("damo-core"), require("antd/lib/alert"), require("antd/lib/breadcrumb"), require("antd/lib/collapse"), require("antd/lib/dropdown"), require("antd/lib/modal"), require("antd/lib/notification"), require("antd/lib/pagination"), require("antd/lib/select"), require("antd/lib/table"), require("antd/lib/tooltip"), require("clipboard"), require("cuid"), require("history"), require("hoist-non-react-statics"), require("react-dnd-html5-backend"), require("react-router"), require("seamless-immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "antd/lib/icon", "antd/lib/button", "react-dnd", "antd/lib/input", "antd/lib/menu", "antd/lib/message", "damo-core", "antd/lib/alert", "antd/lib/breadcrumb", "antd/lib/collapse", "antd/lib/dropdown", "antd/lib/modal", "antd/lib/notification", "antd/lib/pagination", "antd/lib/select", "antd/lib/table", "antd/lib/tooltip", "clipboard", "cuid", "history", "hoist-non-react-statics", "react-dnd-html5-backend", "react-router", "seamless-immutable"], factory);
	else if(typeof exports === 'object')
		exports["rcKit"] = factory(require("react"), require("react-dom"), require("antd/lib/icon"), require("antd/lib/button"), require("react-dnd"), require("antd/lib/input"), require("antd/lib/menu"), require("antd/lib/message"), require("damo-core"), require("antd/lib/alert"), require("antd/lib/breadcrumb"), require("antd/lib/collapse"), require("antd/lib/dropdown"), require("antd/lib/modal"), require("antd/lib/notification"), require("antd/lib/pagination"), require("antd/lib/select"), require("antd/lib/table"), require("antd/lib/tooltip"), require("clipboard"), require("cuid"), require("history"), require("hoist-non-react-statics"), require("react-dnd-html5-backend"), require("react-router"), require("seamless-immutable"));
	else
		root["rcKit"] = factory(root["react"], root["react-dom"], root["antd/lib/icon"], root["antd/lib/button"], root["react-dnd"], root["antd/lib/input"], root["antd/lib/menu"], root["antd/lib/message"], root["damo-core"], root["antd/lib/alert"], root["antd/lib/breadcrumb"], root["antd/lib/collapse"], root["antd/lib/dropdown"], root["antd/lib/modal"], root["antd/lib/notification"], root["antd/lib/pagination"], root["antd/lib/select"], root["antd/lib/table"], root["antd/lib/tooltip"], root["clipboard"], root["cuid"], root["history"], root["hoist-non-react-statics"], root["react-dnd-html5-backend"], root["react-router"], root["seamless-immutable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__) {
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

	__webpack_require__(31);

	var context = __webpack_require__(14);

	var exportObj = {};
	context.keys().forEach(function (key) {
	  Object.assign(exportObj, context(key));
	});

	exports.default = exportObj;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Notifier = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _message = __webpack_require__(12);

	var _message2 = _interopRequireDefault(_message);

	var _notification = __webpack_require__(37);

	var _notification2 = _interopRequireDefault(_notification);

	var _copyLogger = __webpack_require__(9);

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
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDnd = __webpack_require__(6);

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavLink = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _menu = __webpack_require__(11);

	var _menu2 = _interopRequireDefault(_menu);

	var _button = __webpack_require__(5);

	var _button2 = _interopRequireDefault(_button);

	var _dropdown = __webpack_require__(35);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _icon = __webpack_require__(3);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavLink = exports.NavLink = (_temp2 = _class = function (_Component) {
	  _inherits(NavLink, _Component);

	  function NavLink() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, NavLink);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      tick: +new Date().getTime()
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(NavLink, [{
	    key: 'setAction',
	    value: function setAction(key, flag) {
	      var item = void 0;
	      if (Object(key) === key) {
	        item = key;
	      } else {
	        item = this.props.links.find(function (item) {
	          return item.key === key;
	        }) || this.props.menus.find(function (item) {
	          return item.key === key;
	        });
	      }

	      if (item.propName) {
	        item[item.propName] = flag;
	      }

	      this.setState({
	        tick: +new Date().getTime()
	      });

	      return item;
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var _this2 = this;

	      var key = e.key;

	      var item = this.setAction(key, true);
	      var action = item.action || this.props.onClick;

	      var cancelCallback = function cancelCallback() {
	        _this2.setAction(item, false);
	      };

	      if (!action(e, this.props.data, cancelCallback)) {
	        cancelCallback();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var handleClick = this.handleClick.bind(this);
	      var _props = this.props,
	          links = _props.links,
	          menus = _props.menus;

	      var menu = _react2.default.createElement(
	        _menu2.default,
	        { onClick: function onClick(e) {
	            return handleClick(e);
	          } },
	        menus.map(function (item, index) {
	          return _react2.default.createElement(
	            _menu2.default.Item,
	            {
	              key: item.key || index,
	              disabled: item.disabled,
	              loading: item.loading },
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
	}, _temp2);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _clipboard = __webpack_require__(42);

	var _clipboard2 = _interopRequireDefault(_clipboard);

	var _message = __webpack_require__(12);

	var _message2 = _interopRequireDefault(_message);

	var _button = __webpack_require__(5);

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
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./components/dataset/index.jsx": 15,
		"./components/dnd/index.jsx": 18,
		"./components/modal/index.jsx": 19,
		"./components/navLink/index.jsx": 8,
		"./components/notifier/index.js": 22,
		"./components/sceneComponent/index.jsx": 23,
		"./components/search/index.jsx": 25,
		"./components/sidebar/index.jsx": 26,
		"./components/tagSearcher/index.jsx": 27
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 14;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DataSet = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _damoCore = __webpack_require__(13);

	var _theme = __webpack_require__(16);

	var _theme2 = _interopRequireDefault(_theme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DataSet = exports.DataSet = (_temp = _class = function (_Component) {
	  _inherits(DataSet, _Component);

	  function DataSet(props, context) {
	    _classCallCheck(this, DataSet);

	    var _this = _possibleConstructorReturn(this, (DataSet.__proto__ || Object.getPrototypeOf(DataSet)).call(this, props, context));

	    _this.state = {};
	    _this.stateUpdater = {};

	    // 组件类型来选择具体模板
	    if (props.type && DataSet.themeOptions[type]) {
	      Object.assign(_this.state, DataSet.themeOptions[type]);
	    }

	    /**
	     * prop = {
	     *  value: Object | Function,
	     *  format: String,
	     *  formatter: Function,
	     *  setter: String | Function
	     * }
	     */
	    Object.keys(props.attrs).forEach(function (name) {
	      var prop = props.attrs[name];
	      var originValue = typeof prop.value === 'function' ? props.attrs[name].value.call(_this, _this.props) : prop.value;
	      var formatter = prop.formatter || prop.format && DataSet.formatters[prop.format];
	      // formatter是一系列解决组件schema的格式化函数
	      if (formatter) {
	        _this.state[name] = formatter.call(_this, originValue, prop.schema);
	      } else {
	        _this.state[name] = originValue;
	      }
	      _this.stateUpdater[prop.setter] = function (updateFn, callback) {
	        return _this.setState(function (_ref) {
	          var stateName = _ref.stateName;
	          return function () {
	            var newValue = typeof updateFn === 'function' ? updateFn.call(_this, stateName) : updateFn;
	            var formatter = prop.formatter || prop.format && DataSet.formatters[prop.format];
	            if (formatter) {
	              newValue = formatter.call(_this, newValue, prop.schema);
	            } else {
	              newValue = newValue;
	            }
	            return newValue;
	          };
	        }, callback);
	      };
	    });
	    return _this;
	  }

	  _createClass(DataSet, [{
	    key: 'getModel',
	    value: function getModel(modelName) {
	      if (Object(modelName) === modelName) {
	        modelName = modelName.displayName;
	      }
	      return _damoCore.BaseSelector.appStore.models[modelName];
	    }
	  }, {
	    key: 'isState',
	    value: function isState(obj) {
	      return Object(obj) === obj;
	    }
	    /**
	     * action = {
	     *  request,
	     *  url,
	     *  method,
	     *  header,
	     *
	     *  error,
	     *  success,
	     *  getParams,
	     *  immediate
	     * }
	     */

	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var _this2 = this;

	      if (this.$dataModel_) {
	        this.$dataModel_.setProps(this.props);
	      } else {
	        var actions = this.props.actions;
	        var requestObj = {};
	        var newActions = {};
	        var immediateActions = [];

	        var _loop = function _loop(name) {
	          var action = actions[name];
	          requestObj[name] = function (params, callback) {
	            params = action.getParams ? action.getParams.apply(action, _toConsumableArray(args)) : params || {};
	            var error = typeof action.error === 'function' ? action.error.bind(_this2) : action.error && DataSet.getNotifier(action.error);
	            var success = typeof action.success === 'function' ? action.success.bind(_this2) : action.success && DataSet.getFallback(action.success);
	            var newCallback = function newCallback(err, res) {
	              if (err) {
	                error && error(err);
	              } else if (success) {
	                var result = success(res);
	                if (_this2.isState(result)) {
	                  _this2.setState(result);
	                }
	              }
	              callback && callback(err, res);
	            };
	            if (action.request) {
	              return action.request(params, newCallback);
	            } else {
	              return _this2.$dataModel_.request(name, params, newCallback);
	            }
	          };
	          if (!action.request) {
	            newActions[name] = action;
	          }
	          if (action.immediate) {
	            immediateActions.push(name);
	          }
	        };

	        for (var name in actions) {
	          _loop(name);
	        }

	        this.$dataModel_ = new _damoCore.ResourceModel({
	          actions: newActions
	        }, this.props);

	        immediateActions.forEach(function (name) {
	          requestObj[name]();
	        });
	        Object.assign(this.$dataModel_, requestObj);
	      }
	      return { dataModel: this.$dataModel_ };
	    }
	  }, {
	    key: 'getRealInstance',
	    value: function getRealInstance() {
	      return this.$instance_;
	    }
	  }, {
	    key: 'request',
	    value: function request(name, params) {
	      var _this3 = this;

	      return this.context.dataModel[name](params, function (err, res) {
	        var nextState = _this3.props.actions[name].updater === true ? res : _this3.props.actions[name].updater(err, res, _this3.props);
	        if (Object(nextState) === nextState) {
	          _this3.setState(nextState);
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      if (this.props.component) {
	        if (this.props.children) {
	          return _react2.default.createElement(
	            this.props.component,
	            _extends({
	              ref: function ref(instance) {
	                return _this4.$instance_ = instance;
	              }
	            }, this.props, this.state, this.stateUpdater),
	            this.props.children
	          );
	        } else {
	          return _react2.default.createElement(this.props.component, _extends({
	            ref: function ref(instance) {
	              return _this4.$instance_ = instance;
	            }
	          }, this.props, this.state, this.stateUpdater));
	        }
	      } else {
	        return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), _extends({
	          ref: function ref(instance) {
	            return _this4.$instance_ = instance;
	          }
	        }, this.props, this.state, this.stateUpdater));
	      }
	    }
	  }]);

	  return DataSet;
	}(_react.Component), _class.formatters = {}, _class.themeOptions = {}, _class.theme = function (themeOptions) {
	  DataSet.themeOptions = themeOptions;
	}, _class.getNotifier = function () {}, _class.getFallback = function () {}, _class.getActionName = function (name) {
	  return name;
	}, _class.childContextTypes = {
	  dataModel: _react.PropTypes.object
	}, _class.propTypes = {
	  type: _react.PropTypes.string,
	  component: _react.PropTypes.element,
	  attrs: _react.PropTypes.object,
	  actions: _react.PropTypes.object
	}, _temp);

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDnd = __webpack_require__(6);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DnDContext = exports.DropItem = exports.DragItem = undefined;

	var _hoistNonReactStatics = __webpack_require__(45);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _reactDndHtml5Backend = __webpack_require__(46);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	var _reactDnd = __webpack_require__(6);

	var _dragItem = __webpack_require__(7);

	var _dragItem2 = _interopRequireDefault(_dragItem);

	var _dropItem = __webpack_require__(17);

	var _dropItem2 = _interopRequireDefault(_dropItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DnDContext = function DnDContext() {
	    return function (BaseComponent) {
	        var Component = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(BaseComponent);
	        return (0, _hoistNonReactStatics2.default)(Component, BaseComponent);
	    };
	};

	exports.DragItem = _dragItem2.default;
	exports.DropItem = _dropItem2.default;
	exports.DnDContext = DnDContext;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AppModal = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _modal = __webpack_require__(36);

	var _modal2 = _interopRequireDefault(_modal);

	var _cuid = __webpack_require__(43);

	var _cuid2 = _interopRequireDefault(_cuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppModal = exports.AppModal = (_temp2 = _class = function (_Component) {
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


	AppModal.enhance(_modal2.default);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = errorFetch;

	var _notifier = __webpack_require__(4);

	function errorFetch(res, errorNotification) {
	  var checkStatus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	  var statusResult = checkStatus(res);
	  if (statusResult) {
	    var error = new Error(statusResult.message || res.message || '');
	    error.response = res;
	    error.errorNotification = new _notifier.Notifier({
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = errorReducer;

	var _notifier = __webpack_require__(4);

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
	    var errorNotification = _notifier.Notifier.notifierFactory('error', action.error.title, action.error.response || action.error.message);
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.errorReducer = exports.errorFetch = exports.CopyLogger = undefined;

	var _notifier = __webpack_require__(4);

	Object.keys(_notifier).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _notifier[key];
	        }
	    });
	});

	var _copyLogger = __webpack_require__(9);

	var _copyLogger2 = _interopRequireDefault(_copyLogger);

	var _errorFetch = __webpack_require__(20);

	var _errorFetch2 = _interopRequireDefault(_errorFetch);

	var _errorReducer = __webpack_require__(21);

	var _errorReducer2 = _interopRequireDefault(_errorReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.CopyLogger = _copyLogger2.default;
	exports.errorFetch = _errorFetch2.default;
	exports.errorReducer = _errorReducer2.default;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Selector = exports.SceneComponent = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _table = __webpack_require__(40);

	var _table2 = _interopRequireDefault(_table);

	var _button = __webpack_require__(5);

	var _button2 = _interopRequireDefault(_button);

	var _breadcrumb = __webpack_require__(33);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _icon = __webpack_require__(3);

	var _icon2 = _interopRequireDefault(_icon);

	var _input = __webpack_require__(10);

	var _input2 = _interopRequireDefault(_input);

	var _navLink = __webpack_require__(8);

	var _navLink2 = _interopRequireDefault(_navLink);

	var _selector = __webpack_require__(24);

	var _selector2 = _interopRequireDefault(_selector);

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
	exports.SceneComponent = SceneComponent;
	exports.Selector = _selector2.default;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _history = __webpack_require__(44);

	var _seamlessImmutable = __webpack_require__(48);

	var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

	var _damoCore = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SceneSelector = function (_RxSelector) {
	  _inherits(SceneSelector, _RxSelector);

	  function SceneSelector(initParams, forceKeep) {
	    _classCallCheck(this, SceneSelector);

	    var _this = _possibleConstructorReturn(this, (SceneSelector.__proto__ || Object.getPrototypeOf(SceneSelector)).call(this));

	    _this.sync(initParams, forceKeep);
	    return _this;
	  }

	  _createClass(SceneSelector, [{
	    key: 'sync',
	    value: function sync(initParams, forceKeep) {
	      this.$initParams_ = initParams;
	      this.$query_ = (0, _seamlessImmutable2.default)(initParams);
	      this.$forceKeep_ = forceKeep;
	    }
	  }, {
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Search = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _select = __webpack_require__(39);

	var _select2 = _interopRequireDefault(_select);

	var _pagination = __webpack_require__(38);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _icon = __webpack_require__(3);

	var _icon2 = _interopRequireDefault(_icon);

	__webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = exports.Search = (_temp = _class = function (_Component) {
	  _inherits(Search, _Component);

	  function Search(props, context) {
	    _classCallCheck(this, Search);

	    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props, context));

	    var value = void 0;
	    if (props.multiple) {
	      value = props.value || [];
	    } else {
	      value = props.value || '';
	    }

	    // value是真实的值，keyword是搜索词，value优先级高，否则才有keyword
	    _this.state = {
	      current: 1,
	      value: value,
	      multiMap: {},
	      list: props.options,
	      keyword: props.keyword,
	      disabled: props.disabled,
	      total: 0,
	      loading: true
	    };
	    if (!props.multiple && props.selectedItem) {
	      _this.state.keyword = '';
	      _this.select(props.selectedItem, true);
	    } else if (!props.options.length && !props.disabled) {
	      if (props.multiple) {
	        if (value) {
	          _this.getData({ page: 1, ids: value, value: value, keyword: '' });
	        } else {
	          _this.getData({ page: 1, keyword: props.keyword });
	        }
	      } else {
	        if (value) {
	          _this.getItem({ id: value });
	        } else {
	          _this.getData({ page: 1, keyword: '' });
	        }
	      }
	    }
	    return _this;
	  }

	  _createClass(Search, [{
	    key: 'toSelect',
	    value: function toSelect(item, flag) {
	      if (item[this.props.rowKey]) {
	        if (item[this.props.labelKey]) {
	          // value 和 keyword只能二选一
	          if (flag) {
	            Object.assign(this.state, {
	              value: item[this.props.rowKey] + '',
	              list: [item]
	            });
	          } else {
	            this.setState({
	              value: item[this.props.rowKey] + '',
	              list: [item]
	            });
	          }
	        } else {
	          this.getItem({
	            id: item[this.props.rowKey]
	          });
	        }
	      }
	    }
	  }, {
	    key: 'select',
	    value: function select(item, flag) {
	      if (item instanceof Promise) {
	        item.then(this.toSelect.bind(this));
	      } else {
	        this.toSelect(item, flag);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var enabled = false;
	      if (this.props.disabled) {
	        if (!nextProps.disabled) {
	          enabled = true;
	        }
	      } else if (!nextProps.disabled) {
	        enabled = true;
	      }

	      if (enabled) {
	        var hasValue = this.props.multiple ? this.props.value && this.props.value.length : this.props.value;
	        if (nextProps.value && !hasValue) {
	          // 此时value必须输入selectedItem
	          if (nextProps.multiple) {
	            this.getData({ page: 1, value: nextProps.value, ids: nextProps.value, keyword: '' });
	          } else {
	            if (nextProps.selectedItem) {
	              if (nextProps.selectedItem[this.props.rowKey] != nextProps.value) {
	                this.select(nextProps.selectedItem);
	              }
	            } else if (nextProps.noSearch) {
	              if (nextProps.options.length) {
	                var value = params.value || (this.props.multiple ? [] : '');
	                this.setState({ list: nextProps.options, value: value, keyword: '', total: 0, loading: false });
	              } else {
	                this.getData({ page: 1, keyword: '', value: nextProps.value });
	              }
	            } else {
	              if (nextProps.value != this.state.value) {
	                this.getItem({ id: nextProps.value });
	              }
	            }
	          }
	        } else if (nextProps.keyword != this.props.keyword) {
	          this.getData({ page: 1, keyword: nextProps.keyword });
	        } else if (this.props.disabled) {
	          this.getData({ page: 1, keyword: '' });
	        }
	      }
	    }
	  }, {
	    key: 'getItem',
	    value: function getItem(params) {
	      var _this2 = this;

	      this.setState({ keyword: '' });
	      var dataModel = this.context.dataModel;
	      if (dataModel && dataModel.getItem) {
	        var _params = Object.assign(this.props.params, params);

	        var promise = dataModel.getItem(_params);
	        promise.then(function (data) {
	          if (_this2.state.keyword) {
	            return;
	          }

	          _this2.setState({
	            list: [data],
	            value: params.id + '',
	            total: 0,
	            loading: false
	          });
	        });
	        return promise;
	      } else {
	        this.setState({
	          value: params.id + '',
	          total: 0,
	          loading: false
	        });
	      }
	    }
	  }, {
	    key: 'getData',
	    value: function getData(params) {
	      var _this3 = this;

	      this.setState({ loading: true });
	      var dataModel = this.context.dataModel;
	      var rowKey = this.props.rowKey;
	      if (dataModel) {
	        var keyword = params.keyword;
	        var _params = Object.assign(this.props.params, params);
	        if (keyword) {
	          _params.keyword = encodeURIComponent(keyword);
	        }
	        var promise = dataModel.getData(_params);
	        promise.then(function (data) {
	          var hasValue = _this3.props.multiple ? _this3.state.value.length : _this3.state.value;
	          if (!params.ids && (hasValue || params.keyword !== _this3.state.keyword)) {
	            _this3.setState({ loading: false });
	            return;
	          }
	          var value = params.value || (_this3.props.multiple ? [] : '');
	          var newState = {
	            value: value,
	            keyword: params.keyword,
	            total: 0,
	            loading: false
	          };
	          if (_this3.props.noSearch) {
	            newState.list = data;
	          } else {
	            if (data.list.length == data.total) {
	              newState.list = data.list;
	            } else {
	              newState.list = data.list;
	              newState.total = data.total;
	              newState.current = params.page;
	            }
	          }
	          if (_this3.props.multiple) {
	            var multiMap = {};
	            if (params.ids) {
	              newState.list.forEach(function (item) {
	                if (params.ids.indexOf(item[rowKey]) > -1) {
	                  multiMap[item[rowKey]] = item;
	                }
	              });
	              newState.multiMap = multiMap;
	            } else if (_this3.state.value.length) {
	              newState.list = newState.list.filter(function (item) {
	                if (_this3.state.multiMap[item[rowKey]]) {
	                  return false;
	                } else {
	                  return true;
	                }
	              });
	              for (var key in _this3.state.multiMap) {
	                newState.list.unshift(_this3.state.multiMap[key]);
	              }
	            }
	          }
	          _this3.setState(newState);

	          return newState.list;
	        });
	        return promise;
	      }
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(params, callback) {
	      var _this4 = this;

	      if (this.props.noSearch) {
	        return;
	      }
	      callback = callback || function () {};
	      clearTimeout(this.$timer_);

	      this.$timer_ = setTimeout(function () {
	        var value = _this4.props.multiple ? _this4.state.value : '';
	        _this4.setState({
	          keyword: params.keyword,
	          current: params.page || 1,
	          value: value
	        });
	        if (!_this4.props.multiple && _this4.state.value) {
	          _this4.props.onChange(value);
	        }
	        var promise = _this4.getData(params);
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
	      var _this5 = this,
	          _list$concat;

	      var _props = this.props,
	          rowKey = _props.rowKey,
	          labelKey = _props.labelKey,
	          _onChange = _props.onChange,
	          noSearch = _props.noSearch,
	          select = _props.select,
	          multiple = _props.multiple,
	          disabled = _props.disabled;
	      var _state = this.state,
	          value = _state.value,
	          keyword = _state.keyword,
	          current = _state.current,
	          loading = _state.loading,
	          total = _state.total,
	          list = _state.list;


	      var selectProps = Object.assign(select, {
	        disabled: disabled,
	        multiple: multiple,
	        value: value || keyword || undefined
	      });
	      var options = list.concat((_list$concat = {}, _defineProperty(_list$concat, rowKey, 'miniPager'), _defineProperty(_list$concat, labelKey, !noSearch && total ? _react2.default.createElement(_pagination2.default, {
	        size: 'small',
	        current: current,
	        total: total,
	        showLessItems: true,
	        onChange: function onChange(page) {
	          _this5.handleSearch({ page: page, keyword: keyword });
	        },
	        showTotal: function showTotal() {
	          return loading ? _react2.default.createElement(_icon2.default, { type: 'loading' }) : '\u5171\u5339\u914D ' + total + ' \u6761';
	        } }) : null), _list$concat));
	      var selectedValue = null;
	      return _react2.default.createElement(
	        _select2.default,
	        _extends({
	          ref: function ref(search) {
	            return _this5.$search_ = search;
	          }
	        }, selectProps, {
	          placeholder: selectProps.placeholder,
	          dropdownClassName: 'j-kit-minSearch',
	          filterOption: function filterOption(value, option) {
	            if (option.key === 'miniPager' || _react2.default.isValidElement(value)) {
	              return true;
	            } else {
	              return option.key == value || option.props.children.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1;
	            }
	          },
	          onSelect: function onSelect(value, option) {
	            selectedValue = value;
	            if (value === 'miniPager') {
	              setTimeout(function () {
	                _this5.setOpenState();
	              }, 100);
	              return;
	            }
	            var item = void 0;
	            if (multiple) {
	              item = list.find(function (item) {
	                return item[rowKey] == value;
	              });
	              _this5.state.multiMap[value] = item;
	              value = _this5.state.value.concat(value);
	            } else {
	              var _item;

	              item = (_item = {}, _defineProperty(_item, rowKey, option.props.value), _defineProperty(_item, labelKey, option.props.children), _item);
	            }
	            _this5.setState({ current: 1, value: value, keyword: '' });
	            _onChange(value, item);
	          },
	          onDeselect: function onDeselect(value) {
	            selectedValue = null;
	            if (multiple) {
	              var idx = _this5.state.value.findIndex(function (v) {
	                return v == value;
	              });
	              delete _this5.state.multiMap[value];
	              value = _this5.state.value.slice(0, idx).concat(_this5.state.value.slice(idx + 1));
	              _this5.setState({ current: 1, value: value, keyword: '' });
	              _onChange(value);
	            }
	          },
	          onChange: function onChange(value) {
	            selectedValue = null;
	            if (value === undefined) {
	              _this5.getData({ page: 1, keyword: '' });
	              _this5.setState({ current: 1, value: '', multiMap: {}, keyword: '' });
	              _onChange(value);
	            }
	          },
	          onSearch: function onSearch(value) {
	            if (selectedValue) return;
	            _this5.handleSearch({
	              page: 1,
	              keyword: value || '' /*, () => { if (multiple && !value) { this.setOpenState(); } }*/ });
	          } }),
	        options.map(function (item) {
	          return _react2.default.createElement(
	            _select2.default.Option,
	            { key: item[rowKey] },
	            item[labelKey]
	          );
	        })
	      );
	    }
	  }, {
	    key: 'setOpenState',
	    value: function setOpenState() {
	      if (this.$search_._reactInternalInstance._renderedComponent._instance.setOpenState) {
	        this.$search_._reactInternalInstance._renderedComponent._instance.setOpenState(true);
	      }
	    }
	  }]);

	  return Search;
	}(_react.Component), _class.proptTypes = {
	  value: _react.PropTypes.any,
	  selectedItem: _react.PropTypes.object,
	  options: _react.PropTypes.array,
	  select: _react.PropTypes.object,
	  multiple: _react.PropTypes.bool,
	  rowKey: _react.PropTypes.string.isRequired,
	  labelKey: _react.PropTypes.string.isRequired,
	  disabled: _react.PropTypes.bool,
	  onChange: _react.PropTypes.func.isRequired
	}, _class.contextTypes = {
	  dataModel: _react.PropTypes.object.isRequired
	}, _class.defaultProps = {
	  options: [],
	  multiple: false,
	  keyword: '',
	  select: {
	    showSearch: true,
	    allowClear: true
	  },
	  params: {},
	  rowKey: 'id',
	  labelKey: 'name',
	  onChange: function onChange() {}
	}, _temp);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SideBar = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(47);

	var _menu = __webpack_require__(11);

	var _menu2 = _interopRequireDefault(_menu);

	__webpack_require__(29);

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

	var SideBar = exports.SideBar = (_temp = _class = function (_Component) {
	  _inherits(SideBar, _Component);

	  function SideBar(props, context) {
	    _classCallCheck(this, SideBar);

	    var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));

	    var pathname = props.currentPath;
	    var openKeys = [];
	    var selectedKeys = _this.props.selectedKeys || BFS(_this.props.menus, function (menu, parentMenu) {
	      if (pathname === menu.path) {
	        parentMenu.forEach(function (item) {
	          return openKeys.push(item[props.itemKey]);
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
	      var _this2 = this;

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
	              return openKeys.push(item[[_this2.props.itemKey]]);
	            });
	            return [menu.url || menu.path];
	          }
	        }) || ['introduction'];

	        this.setState({ selectedKeys: selectedKeys, openKeys: openKeys });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'j-kit-sidebar ' + (this.state.hasStretch ? 'j-kit-sidebar-stretch' : '') },
	        _react2.default.createElement(
	          'h3',
	          { onClick: function onClick(e) {
	              return _this3.handleStretch();
	            } },
	          this.props.heading
	        ),
	        _react2.default.createElement(
	          _menu2.default,
	          {
	            inlineIndent: this.props.inlineIndent,
	            theme: this.props.theme,
	            selectedKeys: this.state.selectedKeys,
	            onOpen: function onOpen(e) {
	              return _this3.handleOpenMenu();
	            },
	            onClose: function onClose(e) {
	              return _this3.handleCloseMenu();
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
	      var _this4 = this;

	      var idx = this.state.openKeys.findIndex(function (key) {
	        return key === menu[_this4.props.itemKey];
	      });
	      if (idx === -1) {
	        var openKeys = this.state.openKeys.concat(menu[this.props.itemKey]);
	        this.setState({ openKeys: openKeys });
	        this.setLocalItem(LOCAL_MENU_KEY, openKeys);
	      }
	    }
	  }, {
	    key: 'handleCloseMenu',
	    value: function handleCloseMenu(menu) {
	      var _this5 = this;

	      var idx = this.state.openKeys.findIndex(function (key) {
	        return key === menu[_this5.props.itemKey];
	      });
	      if (idx > -1) {
	        var openKeys = this.state.openKeys.splice(idx, 1);
	        this.setState({ openKeys: openKeys });
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
	      var _this6 = this;

	      return menus.map(function (menu, index) {
	        var children = menu.children || menu.childRoutes;
	        if (children) {
	          return _react2.default.createElement(
	            _menu2.default.SubMenu,
	            {
	              key: menu[_this6.props.itemKey],
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
	                return _this6.handleClick(menu, true);
	              },
	              disabled: menu.disabled },
	            _this6.renderMenuItem(children)
	          );
	        } else if (menu.url || menu.path) {
	          return _react2.default.createElement(
	            _menu2.default.Item,
	            {
	              className: menu[_this6.props.itemKey.split('/').join('_')] + '-wrap',
	              key: menu[_this6.props.itemKey],
	              disabled: menu.disabled },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              {
	                to: menu.url || menu.path,
	                target: menu.target || '',
	                onClick: function onClick(e) {
	                  return _this6.handleClick(menu);
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
	          return _react2.default.createElement(
	            _menu2.default.Item,
	            { key: menu[_this6.props.itemKey], disabled: menu.disabled },
	            _react2.default.createElement(
	              'span',
	              null,
	              menu.icon,
	              _react2.default.createElement(
	                'span',
	                { className: 'j-kit-elem-text' },
	                menu.text || menu.name
	              )
	            )
	          );
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
	  onClick: _react.PropTypes.func,
	  itemKey: _react.PropTypes.string
	}, _class.defaultProps = {
	  itemKey: 'key',
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

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TagSearcher = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _collapse = __webpack_require__(34);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _input = __webpack_require__(10);

	var _input2 = _interopRequireDefault(_input);

	var _tooltip = __webpack_require__(41);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _icon = __webpack_require__(3);

	var _icon2 = _interopRequireDefault(_icon);

	var _alert = __webpack_require__(32);

	var _alert2 = _interopRequireDefault(_alert);

	var _dragItem = __webpack_require__(7);

	var _dragItem2 = _interopRequireDefault(_dragItem);

	__webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TagSearcher = exports.TagSearcher = (_temp = _class = function (_Component) {
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

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 29 */
28,
/* 30 */
28,
/* 31 */
28,
/* 32 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }
/******/ ])))
});
;