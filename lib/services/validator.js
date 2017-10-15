/**
 * # 通用校验模块
 * 1. 通过定义校验规则用于校验数据合法
 * 2. 集成antd-form，校验表单合法
 */
import AsyncValidator from 'async-validator';
const noop = () => {};
import { Deferred } from 'damo-core';
import hoistNonReactStatics from 'hoist-non-react-statics';
import Form from 'antd/lib/form';
/**
 * + async-validator@1.6.6
 * > see: https://github.com/yiminghe/async-validator
 */
export default class Validator {
  static enhanceForm = (option) => BaseComponent => {
    const Component = Form.create(option)(BaseComponent);
    return hoistNonReactStatics(Component, BaseComponent);
  }

  static validate = (rules, source, callback) => {
    const descriptor = {};
    for(let key in rules){
      if(typeof rules[key] === 'boolean'){
        descriptor[key] = {
          type: 'string',
          required: rules[key]
        }
      }else{
        descriptor[key] = rules[key];
      }
      fields[key] = source[key];
    }
    const validator = new AsyncValidator(descriptor);
    validator.validate(source, callback);
  }

  static errorHandler = () => { }

  static templates = {
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
    }
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
  static $inject = ['props', 'validateRules'];

  constructor(props, validateRules) {
    for(let key in validateRules){
      validateRules[key] =  this.pack(validateRules[key]);
    }
    this.$validateRules_ = validateRules || {};
    this.$handleSubmit_ = (errors, values) => {
      if(errors){
        return false;
      }else{
        return values;
      }
    };
  }

  pack(rule) {
    if (Array.isArray(rule)) {
      rule = rule.map(item => {
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

  setForm(form, submitCallback) {
    this.$form_ = form;
    if(submitCallback){
      this.$handleSubmit_ = submitCallback;
    }
  }

  submit(callback){
    return this.validateFieldsAndScroll((errors, values) => {
      values = this.$handleSubmit_(errors, values);
      if(values === false){
        return false;
      }else{
        return callback(values);
      }
    });
  }

  reset(){
    this.$form_.resetFields();
  }

  getProps(fieldName, rule) {
    if(this.$validateRules_[fieldName]){
      return assignDeep(this.$validateRules_[fieldName], rule && this.pack(rule));
    }else{
      return rule && this.pack(rule);
    }
  }

  validate(source, callback) {
    new AsyncValidator(this.$validateRules_).validate(source, (errors, values) => {
      if (Validator.errorHandler(errors, values) !== false) {
        callback && callback(errors, values);
      }
    });
  }

  // #! for antd-form
  getFieldProps(fieldName, option) {
    if(!option.rules && option.rule){
      option.rules = [option.rule];
    }
    if(this.$validateRules_[fieldName]){
      // option.rules = assignDeep([].concat(this.$validateRules_[fieldName]), option.rules && this.pack(option.rules) || []);
      option.rules = [].concat(this.$validateRules_[fieldName], option.rules && this.pack(option.rules) || [])
    }else if(option.rules){
      option.rules = this.pack(option.rules);
    }
    return this.$form_.getFieldProps(fieldName, option);
  }

  getFieldDecorator(fieldName, option) {
    if(!option.rules && option.rule){
      option.rules = [option.rule];
    }
    if(this.$validateRules_[fieldName]){
      // option.rules = assignDeep([].concat(this.$validateRules_[fieldName]), option.rules && this.pack(option.rules) || []);
      option.rules = [].concat(this.$validateRules_[fieldName], option.rules && this.pack(option.rules) || [])
    }else if(option.rules){
      option.rules = this.pack(option.rules);
    }
    return this.$form_.getFieldDecorator(fieldName, option);
  }

  validateFields(callback = noop) {
    const defer = new Deferred();
    this.$form_.validateFields((errors, values) => {
      if (Validator.errorHandler(errors, values) !== false) {
        const result = callback(errors, values);
        if(result && result.then){
          result.then(defer.resolve, defer.reject);
        }else if(result === false){
          defer.reject(false);
        }else{
          defer.resolve(result);
        }
      }
    });
    return defer.promise;
  }
  validateFieldsAndScroll(callback = noop) {
    const defer = new Deferred();
    this.$form_.validateFieldsAndScroll((errors, values) => {
      if (Validator.errorHandler(errors, values) !== false) {
        const result = callback(errors, values);
        if(result && result.then){
          result.then(defer.resolve, defer.reject);
        }else if(result === false){
          defer.reject(false);
        }else{
          defer.resolve(result);
        }
      }
    });
    return defer.promise;
  }
}

function assignDeep(obj, newObj) {
  if(Array.isArray(obj)){
    return obj.map((item, index) => {
      return assignDeep(item, newObj[index]);
    })
  }else{
    return Object.assign(obj, newObj);
  }
}
