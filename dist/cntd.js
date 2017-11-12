(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("prop-types"), require("antd/lib/icon"), require("antd/lib/button"), require("damo-core"), require("antd/lib/input"), require("react-dnd"), require("antd/lib/form"), require("antd/lib/menu"), require("antd/lib/message"), require("antd/lib/modal"), require("antd/lib/select"), require("history"), require("hoist-non-react-statics"), require("react-router"), require("antd/lib/alert"), require("antd/lib/breadcrumb"), require("antd/lib/card"), require("antd/lib/cascader"), require("antd/lib/checkbox"), require("antd/lib/collapse"), require("antd/lib/date-picker"), require("antd/lib/dropdown"), require("antd/lib/input-number"), require("antd/lib/notification"), require("antd/lib/pagination"), require("antd/lib/radio"), require("antd/lib/switch"), require("antd/lib/table"), require("antd/lib/time-picker"), require("antd/lib/tooltip"), require("async-validator"), require("clipboard"), require("cuid"), require("react-dnd-html5-backend"), require("seamless-immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "prop-types", "antd/lib/icon", "antd/lib/button", "damo-core", "antd/lib/input", "react-dnd", "antd/lib/form", "antd/lib/menu", "antd/lib/message", "antd/lib/modal", "antd/lib/select", "history", "hoist-non-react-statics", "react-router", "antd/lib/alert", "antd/lib/breadcrumb", "antd/lib/card", "antd/lib/cascader", "antd/lib/checkbox", "antd/lib/collapse", "antd/lib/date-picker", "antd/lib/dropdown", "antd/lib/input-number", "antd/lib/notification", "antd/lib/pagination", "antd/lib/radio", "antd/lib/switch", "antd/lib/table", "antd/lib/time-picker", "antd/lib/tooltip", "async-validator", "clipboard", "cuid", "react-dnd-html5-backend", "seamless-immutable"], factory);
	else if(typeof exports === 'object')
		exports["cntd"] = factory(require("react"), require("react-dom"), require("prop-types"), require("antd/lib/icon"), require("antd/lib/button"), require("damo-core"), require("antd/lib/input"), require("react-dnd"), require("antd/lib/form"), require("antd/lib/menu"), require("antd/lib/message"), require("antd/lib/modal"), require("antd/lib/select"), require("history"), require("hoist-non-react-statics"), require("react-router"), require("antd/lib/alert"), require("antd/lib/breadcrumb"), require("antd/lib/card"), require("antd/lib/cascader"), require("antd/lib/checkbox"), require("antd/lib/collapse"), require("antd/lib/date-picker"), require("antd/lib/dropdown"), require("antd/lib/input-number"), require("antd/lib/notification"), require("antd/lib/pagination"), require("antd/lib/radio"), require("antd/lib/switch"), require("antd/lib/table"), require("antd/lib/time-picker"), require("antd/lib/tooltip"), require("async-validator"), require("clipboard"), require("cuid"), require("react-dnd-html5-backend"), require("seamless-immutable"));
	else
		root["cntd"] = factory(root["react"], root["react-dom"], root["prop-types"], root["antd/lib/icon"], root["antd/lib/button"], root["damo-core"], root["antd/lib/input"], root["react-dnd"], root["antd/lib/form"], root["antd/lib/menu"], root["antd/lib/message"], root["antd/lib/modal"], root["antd/lib/select"], root["history"], root["hoist-non-react-statics"], root["react-router"], root["antd/lib/alert"], root["antd/lib/breadcrumb"], root["antd/lib/card"], root["antd/lib/cascader"], root["antd/lib/checkbox"], root["antd/lib/collapse"], root["antd/lib/date-picker"], root["antd/lib/dropdown"], root["antd/lib/input-number"], root["antd/lib/notification"], root["antd/lib/pagination"], root["antd/lib/radio"], root["antd/lib/switch"], root["antd/lib/table"], root["antd/lib/time-picker"], root["antd/lib/tooltip"], root["async-validator"], root["clipboard"], root["cuid"], root["react-dnd-html5-backend"], root["seamless-immutable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_65__) {
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

	__webpack_require__(44);

	var context = __webpack_require__(24);

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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
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

	var _message = __webpack_require__(18);

	var _message2 = _interopRequireDefault(_message);

	var _notification = __webpack_require__(54);

	var _notification2 = _interopRequireDefault(_notification);

	var _copyLogger = __webpack_require__(14);

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
	                _react2.default.createElement(_copyLogger.CopyLogger, { rid: rid, message: 'rid: ' + rid })
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
	                _react2.default.createElement(_copyLogger.CopyLogger, { rid: rid, message: 'rid: ' + rid })
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
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

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

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _menu = __webpack_require__(17);

	var _menu2 = _interopRequireDefault(_menu);

	var _button = __webpack_require__(6);

	var _button2 = _interopRequireDefault(_button);

	var _dropdown = __webpack_require__(52);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _icon = __webpack_require__(4);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavLink = exports.NavLink = (_temp2 = _class = function (_React$PureComponent) {
	  _inherits(NavLink, _React$PureComponent);

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
	}(_react2.default.PureComponent), _class.propsTypes = {
	  links: _propTypes2.default.array.isRequired,
	  menus: _propTypes2.default.array.isRequired,
	  onClick: _propTypes2.default.func.isRequired,
	  data: _propTypes2.default.any.isRequired,
	  menuLabel: _propTypes2.default.any.isRequired
	}, _class.defaultProps = {
	  links: [],
	  menus: []
	}, _temp2);

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tableColumn = __webpack_require__(12);

	var _tableColumn2 = _interopRequireDefault(_tableColumn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var schemaFormatters = {
	  tableColumn: _tableColumn2.default
	};
	exports.default = schemaFormatters;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = tableColumnFormatter;

	var _modal = __webpack_require__(19);

	var _modal2 = _interopRequireDefault(_modal);

	var _navLink = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function tableColumnFormatter(value, schema) {
	  var _this = this;

	  var columns = [];
	  for (var name in schema.properties) {
	    var item = schema.properties[name];
	    item.key = item.dataIndex = name;
	    item.title = item.title || name;
	    if (!item.disabled) {
	      // 操作
	      if (item.actions) {
	        (function () {
	          var menus = [];
	          var links = [];
	          if (Array.isArray(item.actions)) {
	            item.actions.forEach(function (action) {
	              var navItem = void 0;
	              var actionCallback = void 0;
	              var name = void 0;
	              var key = void 0;
	              if (Object(action) === action) {
	                if (typeof action.action === 'function') {
	                  name = action.title || action.name;
	                  key = action.name || action.title;
	                  actionCallback = action.action;
	                } else {
	                  name = action.title || action.name || action.action;
	                  key = action.name || action.action || action.title;

	                  if (action.modal) {
	                    var modal = Object(action.modal) === action.modal ? action.modal : {
	                      title: action.title || '操作提示',
	                      content: '请确认是否继续操作？'
	                    };
	                    actionCallback = function actionCallback(e, record, cancelCallback) {
	                      var modalInst = _modal2.default.confirm(Object.assign(modal, {
	                        maskCloasable: false,
	                        onOk: function onOk() {
	                          var actionCallback = _this.getAction(action.action);
	                          return actionCallback && actionCallback(record);
	                        },
	                        onCancel: cancelCallback
	                      }));

	                      return modalInst;
	                    };
	                  } else {
	                    actionCallback = _this.getAction(action.action);
	                  }
	                }
	                navItem = {
	                  key: key,
	                  name: name,
	                  action: actionCallback,
	                  disabled: action.disabled || false
	                };
	                Object.assign(navItem, action.getProps && action.getProps(record));
	                if (action.isMenu) {
	                  menus.push(navItem);
	                } else {
	                  links.push(navItem);
	                }
	              } else {
	                if (typeof action === 'function') {
	                  actionCallback = action;
	                  name = new Date().getTime();
	                } else {
	                  name = action;
	                  actionCallback = _this.getAction(action);
	                }
	                navItem = {
	                  key: name,
	                  name: name,
	                  disabled: false,
	                  action: actionCallback
	                };
	                links.push(navItem);
	              }
	            });
	          }
	          item.render = function (text, record) {
	            return React.createElement(_navLink.NavLink, { menus: menus, links: links });
	          };
	        })();
	      } else {
	        if (item.ellipsis) {
	          item.className = "td-ellipsis";
	          if (item.render) {
	            (function () {
	              var render = item.render;
	              item.render = function (text, record) {
	                return React.createElement(
	                  'div',
	                  { className: 'text-ellipsis', title: text },
	                  render(text, record)
	                );
	              };
	            })();
	          } else {
	            item.render = function (text) {
	              return React.createElement(
	                'div',
	                { className: 'text-ellipsis', title: text },
	                text
	              );
	            };
	          }
	        }
	      }
	      columns.push(item);
	    }
	  }
	  return columns;
	}
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DragItem = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDnd = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DragItem = exports.DragItem = (_dec = (0, _reactDnd.DragSource)(function (props) {
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
	}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
	  _inherits(DragItem, _React$PureComponent);

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
	}(_react2.default.PureComponent), _class2.propTypes = {
	  type: _propTypes2.default.string.isRequired,
	  data: _propTypes2.default.object.isRequired,
	  doAction: _propTypes2.default.func.isRequired
	}, _class2.defaultProps = {
	  doAction: function doAction(noop) {
	    return noop;
	  }
	}, _temp)) || _class);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CopyLogger = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _clipboard = __webpack_require__(62);

	var _clipboard2 = _interopRequireDefault(_clipboard);

	var _message = __webpack_require__(18);

	var _message2 = _interopRequireDefault(_message);

	var _button = __webpack_require__(6);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CopyLogger = exports.CopyLogger = function (_React$PureComponent) {
	  _inherits(CopyLogger, _React$PureComponent);

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
	}(_react2.default.PureComponent);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Validator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp; /**
	                    * # 通用校验模块
	                    * 1. 通过定义校验规则用于校验数据合法
	                    * 2. 集成antd-form，校验表单合法
	                    */


	var _asyncValidator = __webpack_require__(61);

	var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

	var _damoCore = __webpack_require__(7);

	var _hoistNonReactStatics = __webpack_require__(22);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _form = __webpack_require__(16);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var noop = function noop() {};

	/**
	 * + async-validator@1.6.6
	 * > see: https://github.com/yiminghe/async-validator
	 */
	var Validator = exports.Validator = (_temp = _class = function () {
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
	    value: function setForm(form, validateRules, submitCallback) {
	      this.$form_ = form;
	      if (submitCallback) {
	        this.$handleSubmit_ = submitCallback;
	        if (validateRules) {
	          for (var key in validateRules) {
	            validateRules[key] = this.pack(validateRules[key]);
	          }
	          this.$validateRules_ = validateRules;
	        }
	      } else if (validateRules) {
	        this.$handleSubmit_ = validateRules;
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
	        // option.rules = assignDeep([].concat(this.$validateRules_[fieldName]),
	        // option.rules && this.pack(option.rules) || []);
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
	        // option.rules = assignDeep([].concat(this.$validateRules_[fieldName]),
	        // option.rules && this.pack(option.rules) || []);
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
	    var Component = _form2.default.create(Object.assign(option || {}, { wrappedComponentRef: true }))(BaseComponent);
	    Component.prototype.getRealInstance = function () {
	      return this.refs.wrappedComponent.refs.formWrappedComponent;
	    };
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


	function assignDeep(obj, newObj) {
	  if (Array.isArray(obj)) {
	    return obj.map(function (item, index) {
	      return assignDeep(item, newObj[index]);
	    });
	  } else {
	    return Object.assign(obj, newObj);
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./components/customForm/index.jsx": 25,
		"./components/dataset/formatter/index.js": 11,
		"./components/dataset/formatter/tableColumn.js": 12,
		"./components/dataset/index.jsx": 26,
		"./components/dataset/schemaParser.js": 27,
		"./components/dnd/dragItem.jsx": 13,
		"./components/dnd/dropItem.jsx": 28,
		"./components/dnd/index.jsx": 29,
		"./components/modal/index.jsx": 30,
		"./components/navLink/index.jsx": 8,
		"./components/notifier/copyLogger.jsx": 14,
		"./components/notifier/errorFetch.js": 31,
		"./components/notifier/errorReducer.js": 32,
		"./components/notifier/notifier.js": 5,
		"./components/sceneComponent/index.jsx": 33,
		"./components/sceneComponent/selector.js": 34,
		"./components/search/index.jsx": 35,
		"./components/sidebar/index.jsx": 36,
		"./components/tagSearcher/index.jsx": 37,
		"./services/adaptPage.js": 38,
		"./services/baseColumn.js": 39,
		"./services/breadCrumb.js": 40,
		"./services/validator.js": 15
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
	webpackContext.id = 24;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CustomForm = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _form = __webpack_require__(16);

	var _form2 = _interopRequireDefault(_form);

	var _input = __webpack_require__(9);

	var _input2 = _interopRequireDefault(_input);

	var _inputNumber = __webpack_require__(53);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _select = __webpack_require__(20);

	var _select2 = _interopRequireDefault(_select);

	var _datePicker = __webpack_require__(51);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _timePicker = __webpack_require__(59);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _radio = __webpack_require__(56);

	var _radio2 = _interopRequireDefault(_radio);

	var _checkbox = __webpack_require__(49);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _switch = __webpack_require__(57);

	var _switch2 = _interopRequireDefault(_switch);

	var _cascader = __webpack_require__(48);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _card = __webpack_require__(47);

	var _card2 = _interopRequireDefault(_card);

	var _button = __webpack_require__(6);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(4);

	var _icon2 = _interopRequireDefault(_icon);

	var _validator = __webpack_require__(15);

	var _notifier = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CustomForm = exports.CustomForm = (_dec = _validator.Validator.enhanceForm(), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
	  _inherits(CustomForm, _React$PureComponent);

	  function CustomForm(props) {
	    _classCallCheck(this, CustomForm);

	    var _this = _possibleConstructorReturn(this, (CustomForm.__proto__ || Object.getPrototypeOf(CustomForm)).call(this, props));

	    _this.state = {};

	    _this.$validator_ = new _validator.Validator();
	    _this.$validator_.setForm(props.form, props.validateRules, function (errors, values) {
	      if (errors) {
	        new _notifier.Notifier({
	          level: 'one',
	          type: 'error',
	          content: '表单校验失败'
	        }, true);
	        return false;
	      } else {
	        return values;
	      }
	    });
	    return _this;
	  }

	  _createClass(CustomForm, [{
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      var _this2 = this;

	      return this.$validator_.submit(function (body) {
	        body = _this2.props.beforeSave ? _this2.props.beforeSave(body) : body;

	        if (body === false) {
	          return;
	        }

	        _this2.props.submit(body, _this2.props.dataSource);
	      });
	    }
	  }, {
	    key: 'renderInput',
	    value: function renderInput(option, key) {
	      var _this3 = this;

	      if (!option.name) return null;
	      if (option.children) {
	        var renderInput = this.renderInput.bind(this);
	        return _react2.default.createElement(
	          _card2.default,
	          {
	            key: key,
	            style: {
	              padding: '15px 15px 7px'
	            },
	            title: option.title || option.name },
	          option.children.map(renderInput)
	        );
	      }
	      var propsByState = option.getProps ? option.getProps(this.props.dataSource, this.state, function (nextState) {
	        return _this3.setState(nextState);
	      }) : {};
	      var defaultProps = {
	        disabled: option.disabled,
	        placeholder: option.placeholder
	      };
	      var decoratorProps = {
	        initialValue: this.props.dataSource[option.name]
	      };
	      var input = void 0;
	      if (option.component) {
	        if (option.component.prototype.isReactComponent) {
	          input = _react2.default.createElement(option.component, _extends({}, defaultProps, propsByState));
	        } else {
	          input = option.component;
	        }
	      } else {
	        switch (option.type) {
	          case 'number':
	          case 'integer':
	            var maxLength = option.maxLength ? option.maxLength : 10;
	            maxLength = +new Array(maxLength).join(9);
	            if (option.maximum) {
	              maxLength = Number(maxLength + '0.' + option.maximum);
	            }

	            input = _react2.default.createElement(_inputNumber2.default, _extends({
	              style: {
	                width: 250
	              },
	              min: option.minLength ? option.minLength : 0,
	              max: maxLength
	            }, defaultProps, propsByState));
	            break;
	          case 'boolean':
	            var ps = [].concat(option.placeholder || []);
	            input = _react2.default.createElement(_switch2.default, _extends({
	              disabled: option.disabled,
	              unCheckedChildren: ps[0],
	              checkedChildren: ps[1]
	            }, propsByState));
	            break;
	          case 'string':
	            switch (option.format) {
	              case 'DATE_TIME':
	                input = _react2.default.createElement(_datePicker2.default, _extends({
	                  showTime: true,
	                  format: 'YYYY-MM-DD HH:mm:ss'
	                }, defaultProps, propsByState));
	                break;
	              case 'DATE':
	                input = _react2.default.createElement(_datePicker2.default, _extends({}, defaultProps, propsByState));
	                break;
	              case 'TIME':
	                input = _react2.default.createElement(_timePicker2.default, _extends({}, defaultProps, propsByState));
	                break;
	              case 'DATE_RANGE':
	                input = _react2.default.createElement(_datePicker2.default.RangePicker, _extends({}, defaultProps, propsByState));
	                break;
	              case 'CDN_PIC':
	                Object.assign(decoratorProps, {
	                  valuePropName: 'fileList',
	                  getValueFromEvent: function getValueFromEvent(e) {
	                    if (Array.isArray(e)) {
	                      return e;
	                    }
	                    return e && e.fileList;
	                  }
	                });
	                if (option.dragger) {
	                  input = _react2.default.createElement(
	                    Upload.Dragger,
	                    _extends({}, defaultProps, propsByState, {
	                      listType: 'picture',
	                      action: option.action }),
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'ant-upload-drag-icon' },
	                      _react2.default.createElement(_icon2.default, { type: 'inbox' })
	                    ),
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'ant-upload-text' },
	                      '\u70B9\u51FB\u6216\u8005\u6258\u8F6C\u6587\u4EF6\u5230\u4E0A\u4F20\u533A\u57DF'
	                    )
	                  );
	                } else {
	                  input = _react2.default.createElement(
	                    Upload,
	                    _extends({}, defaultProps, propsByState, {
	                      action: option.action,
	                      listType: 'picture' }),
	                    _react2.default.createElement(
	                      _button2.default,
	                      null,
	                      _react2.default.createElement(_icon2.default, { type: 'upload' }),
	                      '\u4E0A\u4F20\u56FE\u7247'
	                    )
	                  );
	                }
	                break;
	              case 'FILE':
	                Object.assign(decoratorProps, {
	                  valuePropName: 'fileList',
	                  getValueFromEvent: function getValueFromEvent(e) {
	                    if (Array.isArray(e)) {
	                      return e;
	                    }
	                    return e && e.fileList;
	                  }
	                });

	                if (option.dragger) {
	                  input = _react2.default.createElement(
	                    Upload.Dragger,
	                    _extends({}, defaultProps, propsByState, {
	                      listType: 'text',
	                      action: option.action }),
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'ant-upload-drag-icon' },
	                      _react2.default.createElement(_icon2.default, { type: 'inbox' })
	                    ),
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'ant-upload-text' },
	                      '\u70B9\u51FB\u6216\u8005\u6258\u8F6C\u6587\u4EF6\u5230\u4E0A\u4F20\u533A\u57DF'
	                    )
	                  );
	                } else {
	                  input = _react2.default.createElement(
	                    Upload,
	                    _extends({}, defaultProps, propsByState, {
	                      action: option.action,
	                      listType: 'text' }),
	                    _react2.default.createElement(
	                      _button2.default,
	                      null,
	                      _react2.default.createElement(_icon2.default, { type: 'upload' }),
	                      '\u4E0A\u4F20\u6587\u4EF6'
	                    )
	                  );
	                }
	                break;
	              case 'SELECT':
	                input = _react2.default.createElement(
	                  _select2.default,
	                  _extends({ mode: option.mode }, defaultProps, propsByState),
	                  option.options.map(function (item) {
	                    return _react2.default.createElement(
	                      _select2.default.Option,
	                      {
	                        key: item.value || item.id,
	                        value: item.value || item.id,
	                        disabled: item.disabled },
	                      item.name || item.text
	                    );
	                  })
	                );
	                break;
	              case 'TEXT':
	                input = _react2.default.createElement(_input2.default, _extends({
	                  type: 'textarea',
	                  autosize: {
	                    minRows: 4,
	                    maxRows: 10
	                  }
	                }, defaultProps, propsByState));
	                break;
	              default:
	                input = _react2.default.createElement(_input2.default, _extends({}, defaultProps, propsByState));
	                break;
	            }
	            break;
	        }
	      }
	      var formItemProps = Object.assign({
	        label: option.title || option.name,
	        required: option.required,
	        hasFeedback: option.hasFeedback
	      }, this.props.formLayout);
	      return _react2.default.createElement(
	        _form2.default.Item,
	        _extends({ key: key }, formItemProps),
	        this.$validator_.getFieldDecorator(option.name, decoratorProps)(input)
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var dataSource = this.props.dataSource;
	      var renderInput = this.renderInput.bind(this);
	      return _react2.default.createElement(
	        _form2.default,
	        {
	          layout: this.props.layout,
	          onSubmit: function onSubmit(e) {
	            e.preventDefault();
	            _this4.handleSubmit();
	          } },
	        this.props.options.map(renderInput),
	        ' ',
	        !this.props.noButton ? _react2.default.createElement(
	          _form2.default.Item,
	          { wrapperCol: { offset: this.props.formLayout.labelCol.span, span: this.props.formLayout.wrapperCol.span } },
	          this.props.buttons.map(function (btn, index) {
	            return _react2.default.createElement(
	              _button2.default,
	              { style: { marginRight: 10 }, key: index, type: btn.type },
	              btn.name
	            );
	          })
	        ) : null
	      );
	    }
	  }]);

	  return CustomForm;
	}(_react2.default.PureComponent), _class2.proptTypes = {
	  dataSource: _propTypes2.default.object,
	  options: _propTypes2.default.array.isRequired,
	  formLayout: _propTypes2.default.object,
	  validateRules: _propTypes2.default.array,
	  beforeSave: _propTypes2.default.func,
	  submit: _propTypes2.default.func,
	  layout: _propTypes2.default.string,
	  buttons: _propTypes2.default.object,
	  noButton: _propTypes2.default.bool
	}, _class2.defaultProps = {
	  layout: 'horizontal',
	  dataSource: {},
	  formLayout: {
	    labelCol: {
	      span: 3
	    },
	    wrapperCol: {
	      span: 20
	    },
	    hasFeedback: true,
	    required: true
	  },
	  buttons: [{
	    type: 'primary',
	    name: '保存'
	  }, {
	    type: 'default',
	    name: '取消'
	  }]
	}, _temp)) || _class);

/***/ },
/* 26 */
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

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _damoCore = __webpack_require__(7);

	var _formatter = __webpack_require__(11);

	var _formatter2 = _interopRequireDefault(_formatter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DataSet = exports.DataSet = (_temp = _class = function (_React$PureComponent) {
	  _inherits(DataSet, _React$PureComponent);

	  function DataSet(props, context) {
	    _classCallCheck(this, DataSet);

	    var _this = _possibleConstructorReturn(this, (DataSet.__proto__ || Object.getPrototypeOf(DataSet)).call(this, props, context));

	    _this.state = {};
	    _this.stateUpdater = {};

	    _this.setActions();

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
	      var originValue = typeof prop.value === 'function' ? prop.value.call(_this, _this.props) : prop.value;
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
	  } //{};

	  _createClass(DataSet, [{
	    key: 'getModel',
	    value: function getModel() {
	      this.$dataModel_;
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
	    key: 'setActions',
	    value: function setActions() {
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
	                var result = success(res, function (state) {
	                  _this2.setState(state);
	                });
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
	    }
	  }, {
	    key: 'getAction',
	    value: function getAction(action) {
	      return this.$dataModel_[action] && this.$dataModel_[action].bind(this.$dataModel_);
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

	      var option = {},
	          type = void 0;
	      if (this.props.component) {
	        type = this.props.component.name;
	        if (type && DataSet.themeOptions[type]) {
	          option = DataSet.themeOptions[type];
	        }

	        if (this.props.children) {
	          return _react2.default.createElement(
	            this.props.component,
	            _extends({
	              ref: function ref(instance) {
	                return _this4.$instance_ = instance;
	              }
	            }, option, this.props, this.state, this.stateUpdater),
	            this.props.children
	          );
	        } else {
	          return _react2.default.createElement(this.props.component, _extends({
	            ref: function ref(instance) {
	              return _this4.$instance_ = instance;
	            }
	          }, option, this.props, this.state, this.stateUpdater));
	        }
	      } else {
	        type = this.props.children.type.name;
	        if (type && DataSet.themeOptions[type]) {
	          option = DataSet.themeOptions[type];
	        }
	        return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), _extends({
	          ref: function ref(instance) {
	            return _this4.$instance_ = instance;
	          }
	        }, option, this.props, this.state, this.stateUpdater));
	      }
	    }
	  }]);

	  return DataSet;
	}(_react2.default.PureComponent), _class.formatters = _formatter2.default, _class.themeOptions = {}, _class.theme = function (themeOptions) {
	  DataSet.themeOptions = themeOptions;
	}, _class.getNotifier = function () {}, _class.getFallback = function () {}, _class.getActionName = function (name) {
	  return name;
	}, _class.childContextTypes = {
	  dataModel: _propTypes2.default.object
	}, _class.propTypes = {
	  type: _propTypes2.default.string,
	  component: _propTypes2.default.element,
	  attrs: _propTypes2.default.object,
	  actions: _propTypes2.default.object
	}, _temp);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.schemaParser = schemaParser;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypesMap = {};
	var overrideMap = {
	  instanceOf: true,
	  objectOf: true,
	  arrayOf: true,
	  oneOf: true,
	  oneOfType: true,
	  shape: true,
	  exact: true
	};
	function hackType(key, propTypes) {
	  if (overrideMap[key]) {
	    var checker = propTypes[key];
	    propTypes[key] = function (data) {
	      var result = checker(data);
	      result.data = data;
	      result.type = key;
	      return result;
	    };
	    propTypes[key].isRequired = function (data) {
	      var requiredResult = checker.isRequired(data);
	      requiredResult.data = data;
	      requiredResult.type = key + 'Required';
	      requiredResult.required = true;
	      return requiredResult;
	    };
	  }
	  propTypes[key].type = key;
	  if (propTypes[key].isRequired) {
	    propTypes[key].isRequired.type = key + 'Required';
	  }
	}
	for (var key in _react.PropTypes) {
	  hackType(key, _react.PropTypes);

	  propTypesMap[key] = { type: key };
	  propTypesMap[key + 'Required'] = {
	    type: key,
	    required: true
	  };
	}
	for (var _key in _propTypes2.default) {
	  hackType(_key, _propTypes2.default);
	}

	function parseObject(obj) {
	  var schema = {
	    type: 'object',
	    properties: {}
	  };
	  var type = void 0;
	  for (var _key2 in obj) {
	    type = _typeof(obj[_key2]);
	    if (type === 'object') {
	      schema.properties[_key2] = parseObject(obj[_key2]);
	    } else if (type === 'function') {
	      if (obj[_key2].isReactComponent) {
	        schema.properties[_key2] = {
	          type: 'any',
	          format: 'antd'
	        };
	      } else {
	        schema.properties[_key2] = {
	          type: 'any',
	          format: 'func'
	        };
	      }
	    } else {
	      schema.properties[_key2] = {
	        type: type
	      };
	    }
	  }
	}

	function schemaParser(component) {
	  var schema = {
	    type: 'object',
	    properties: {},
	    required: [],
	    definitions: {}
	  };
	  var defaultProps = component.defaultProps || {};
	  var item = void 0,
	      prop = void 0;
	  for (var _key3 in component.propTypes) {
	    prop = propTypesMap[component.propTypes[_key3].type];
	    if (defaultProps[_key3] === undefined) {
	      item = {
	        title: _key3,
	        name: _key3
	      };
	    } else {
	      item = {
	        title: _key3,
	        name: _key3,
	        default: defaultProps[_key3]
	      };
	    }
	    if (prop.required) {
	      schema.required.push(_key3);
	    }
	    if (overrideMap[prop.type]) {
	      switch (prop.type) {
	        case 'instanceOf':
	        case 'objectOf':
	        case 'oneOf':
	        case 'arrayOf':
	          item.type = 'any';
	          item.enum = component.propTypes[_key3].data;
	          break;
	        case 'oneOfType':
	          item.type = 'string';
	          item.enum = component.propTypes[_key3].data.map(function (item) {
	            return item.type || (typeof item === 'undefined' ? 'undefined' : _typeof(item));
	          });
	          break;
	        case 'shape':
	        case 'exact':
	          item.type = 'object';
	          item['$ref'] = '#/definitions/' + _key3;
	          schema.definitions[_key3] = parseObject(component.propTypes[_key3].data);
	          break;
	      }
	    } else {
	      item.type = prop.type;
	    }
	    schema.properties[_key3] = item;
	  }
	  return schema;
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DropItem = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDnd = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DropItem = exports.DropItem = (_dec = (0, _reactDnd.DropTarget)(function (props) {
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
	}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
	  _inherits(DropItem, _React$PureComponent);

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
	}(_react2.default.PureComponent), _class2.propTypes = {
	  types: _propTypes2.default.array.isRequired,
	  doAction: _propTypes2.default.func.isRequired
	}, _temp)) || _class);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DnDContext = undefined;

	var _hoistNonReactStatics = __webpack_require__(22);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _reactDndHtml5Backend = __webpack_require__(64);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	var _reactDnd = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DnDContext = exports.DnDContext = function DnDContext() {
	  return function (BaseComponent) {
	    var Component = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(BaseComponent);
	    return (0, _hoistNonReactStatics2.default)(Component, BaseComponent);
	  };
	};

/***/ },
/* 30 */
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

	var _modal = __webpack_require__(19);

	var _modal2 = _interopRequireDefault(_modal);

	var _cuid = __webpack_require__(63);

	var _cuid2 = _interopRequireDefault(_cuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppModal = exports.AppModal = (_temp2 = _class = function (_React$PureComponent) {
	  _inherits(AppModal, _React$PureComponent);

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
	}(_react2.default.PureComponent), _class.$callbacks_ = [], _class.enhance = function (Modal) {
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.errorFetch = errorFetch;

	var _notifier = __webpack_require__(5);

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

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.errorReducer = errorReducer;

	var _notifier = __webpack_require__(5);

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

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SceneComponent = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _table = __webpack_require__(58);

	var _table2 = _interopRequireDefault(_table);

	var _button = __webpack_require__(6);

	var _button2 = _interopRequireDefault(_button);

	var _breadcrumb = __webpack_require__(46);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _icon = __webpack_require__(4);

	var _icon2 = _interopRequireDefault(_icon);

	var _input = __webpack_require__(9);

	var _input2 = _interopRequireDefault(_input);

	var _navLink = __webpack_require__(8);

	var _navLink2 = _interopRequireDefault(_navLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SceneComponent = exports.SceneComponent = (_temp = _class = function (_React$PureComponent) {
	  _inherits(SceneComponent, _React$PureComponent);

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
	}(_react2.default.PureComponent), _class.propTypes = {
	  name: _propTypes2.default.string.isRequired,
	  table: _propTypes2.default.object,
	  breadcrumb: _propTypes2.default.object.isRequired,
	  metric: _propTypes2.default.object.isRequired,
	  list: _propTypes2.default.array.isRequired,
	  query: _propTypes2.default.object.isRequired,
	  search: _propTypes2.default.object,
	  autoAdapt: _propTypes2.default.bool.isRequired,
	  scroll: _propTypes2.default.bool,

	  doFetch: _propTypes2.default.func.isRequired
	}, _class.contextTypes = {
	  adaptPage: _propTypes2.default.object.isRequired,
	  breadCrumb: _propTypes2.default.object.isRequired
	}, _class.defaultProps = {
	  autoAdapt: true,
	  scroll: false,
	  table: {}
	}, _temp);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SceneSelector = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _history = __webpack_require__(21);

	var _seamlessImmutable = __webpack_require__(65);

	var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

	var _damoCore = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SceneSelector = exports.SceneSelector = function (_RxSelector) {
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

/***/ },
/* 35 */
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

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _select = __webpack_require__(20);

	var _select2 = _interopRequireDefault(_select);

	var _pagination = __webpack_require__(55);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _icon = __webpack_require__(4);

	var _icon2 = _interopRequireDefault(_icon);

	__webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = exports.Search = (_temp = _class = function (_React$PureComponent) {
	  _inherits(Search, _React$PureComponent);

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
	}(_react2.default.PureComponent), _class.proptTypes = {
	  value: _propTypes2.default.any,
	  selectedItem: _propTypes2.default.object,
	  options: _propTypes2.default.array,
	  select: _propTypes2.default.object,
	  multiple: _propTypes2.default.bool,
	  rowKey: _propTypes2.default.string.isRequired,
	  labelKey: _propTypes2.default.string.isRequired,
	  disabled: _propTypes2.default.bool,
	  onChange: _propTypes2.default.func.isRequired
	}, _class.contextTypes = {
	  dataModel: _propTypes2.default.object.isRequired
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
/* 36 */
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

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(23);

	var _menu = __webpack_require__(17);

	var _menu2 = _interopRequireDefault(_menu);

	__webpack_require__(42);

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

	var SideBar = exports.SideBar = (_temp = _class = function (_React$PureComponent) {
	  _inherits(SideBar, _React$PureComponent);

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
	            onOpenChange: function onOpenChange(openKeys) {
	              _this3.setState({ openKeys: openKeys });
	              _this3.setLocalItem(LOCAL_MENU_KEY, openKeys);
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
	      var _this4 = this;

	      return menus.map(function (menu, index) {
	        var children = menu.children || menu.childRoutes;
	        if (children) {
	          return _react2.default.createElement(
	            _menu2.default.SubMenu,
	            {
	              key: menu[_this4.props.itemKey],
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
	                return _this4.handleClick(menu, true);
	              },
	              disabled: menu.disabled },
	            _this4.renderMenuItem(children)
	          );
	        } else if (menu.url || menu.path) {
	          return _react2.default.createElement(
	            _menu2.default.Item,
	            {
	              className: menu[_this4.props.itemKey.split('/').join('_')] + '-wrap',
	              key: menu[_this4.props.itemKey],
	              disabled: menu.disabled },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              {
	                to: menu.url || menu.path,
	                target: menu.target || '',
	                onClick: function onClick(e) {
	                  return _this4.handleClick(menu);
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
	            { key: menu[_this4.props.itemKey], disabled: menu.disabled },
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
	}(_react2.default.PureComponent), _class.BFS = BFS, _class.propsTypes = {
	  currentPath: _propTypes2.default.string.isRequired,
	  heading: _propTypes2.default.any,
	  menus: _propTypes2.default.array.isRequired,
	  openKeys: _propTypes2.default.array,
	  selectedKeys: _propTypes2.default.array,
	  hasStretch: _propTypes2.default.bool,
	  theme: _propTypes2.default.string,
	  onStretch: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  itemKey: _propTypes2.default.string
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
/* 37 */
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

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _collapse = __webpack_require__(50);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _input = __webpack_require__(9);

	var _input2 = _interopRequireDefault(_input);

	var _tooltip = __webpack_require__(60);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _icon = __webpack_require__(4);

	var _icon2 = _interopRequireDefault(_icon);

	var _alert = __webpack_require__(45);

	var _alert2 = _interopRequireDefault(_alert);

	var _dragItem = __webpack_require__(13);

	__webpack_require__(43);

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
	      var ItemDom = _dragItem.DragItem;
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
	  entityCode: _propTypes2.default.string.isRequired,
	  tagCode: _propTypes2.default.string.isRequired,
	  keyword: _propTypes2.default.string.isRequired,
	  objectList: _propTypes2.default.array.isRequired,
	  doFetchTagList: _propTypes2.default.func.isRequired
	}, _class.defaultProps = {
	  entityCode: '',
	  tagCode: '',
	  keyword: '',
	  objectList: []
	}, _temp);

/***/ },
/* 38 */
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

	var AdaptPage = exports.AdaptPage = function () {
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

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BaseColumn = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _damoCore = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseColumn = exports.BaseColumn = function () {
	  function BaseColumn() {
	    _classCallCheck(this, BaseColumn);
	  }

	  _createClass(BaseColumn, [{
	    key: 'clear',
	    value: function clear() {
	      this.$renderColumns_ = null;
	    }
	  }, {
	    key: 'columns',
	    set: function set(cols) {
	      this.$columns_ = cols;
	    },
	    get: function get() {
	      var _this = this;

	      if (this.$renderColumns_) {
	        return this.$renderColumns_;
	      } else {
	        var tableColumns = this.$columns_ || this.getColumns();
	        return this.$renderColumns_ = tableColumns.map(function (item) {
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
	    }
	  }]);

	  return BaseColumn;
	}();

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BreadCrumb = undefined;

	var _class, _temp;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _history = __webpack_require__(21);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BLink = function (_React$PureComponent) {
	  _inherits(BLink, _React$PureComponent);

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
	      return _react2.default.createElement(_reactRouter.Link, props);
	    }
	  }]);

	  return BLink;
	}(_react2.default.PureComponent);
	// see:
	// https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md


	var BreadCrumb = exports.BreadCrumb = (_temp = _class = function () {
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

/***/ },
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 42 */
41,
/* 43 */
41,
/* 44 */
41,
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

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }
/******/ ])))
});
;