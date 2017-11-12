import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import DatePicker from 'antd/lib/date-picker';
import TimePicker from 'antd/lib/time-picker';
import Radio from 'antd/lib/radio';
import Checkbox from 'antd/lib/checkbox';
import Switch from 'antd/lib/switch';
import Cascader from 'antd/lib/cascader';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

import {Validator} from '../../services/validator';
import {Notifier} from '../notifier/notifier';

@Validator.enhanceForm()
export class CustomForm extends Component {
  static proptTypes = {
    dataSource: PropTypes.object,
    options: PropTypes.array.isRequired,
    formLayout: PropTypes.object,
    validateRules: PropTypes.array,
    beforeSave: PropTypes.func,
    submit: PropTypes.func,
    layout: PropTypes.string
  }

  static defaultProps = {
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
    }
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.$validator_ = new Validator();
    this
      .$validator_
      .setForm(props.form, props.validateRules, (errors, values) => {
        if (errors) {
          new Notifier({
            level: 'one',
            type: 'error',
            content: '表单校验失败'
          }, true);
          return false;
        } else {
          return values;
        }
      });
  }

  handleSubmit() {
    return this
      .$validator_
      .submit(body => {
        body = this.props.beforeSave
          ? this
            .props
            .beforeSave(body)
          : body;

        if (body === false) {
          return;
        }

        this
          .props
          .submit(body, this.props.dataSource);
      });
  }

  renderInput(option, key) {
    if(!option.name) return null;
    if (option.children) {
      const renderInput = this.renderInput.bind(this);
      return (
        <Card
          key={key}
          style={{
          padding: '15px 15px 7px'
        }}
          title={option.title || option.name}>{option
            .children
            .map(renderInput)}</Card>
      );
    }
    const propsByState = option.getProps ? option.getProps(this.props.dataSource, this.state, nextState => this.setState(nextState)) : {};
    const defaultProps = {
      disabled: option.disabled,
      placeholder: option.placeholder
    }
    const decoratorProps = {
      initialValue: this.props.dataSource[option.name]
    }
    let input;
    if (option.component) {
      if (option.component.prototype.isReactComponent) {
        input = (<option.component {...defaultProps} {...propsByState}/>);
      } else {
        input = option.component;
      }
    } else {
      switch (option.type) {
        case 'number':
        case 'integer':
          let maxLength = option.maxLength
            ? option.maxLength
            : 10;
          maxLength = +new Array(maxLength).join(9);
          if (option.maximum) {
            maxLength = Number(maxLength + '0.' + option.maximum);
          }

          input = (<InputNumber
            style={{width: 250}}
            min={option.minLength
            ? option.minLength
            : 0}
            max={maxLength}
            {...defaultProps}
            {...propsByState}/>);
          break;
        case 'boolean':
          const ps = [].concat(option.placeholder || []);
          input = (<Switch
            disabled={option.disabled}
            unCheckedChildren={ps[0]}
            checkedChildren={ps[1]}
            {...propsByState}/>);
          break;
        case 'string':
          switch (option.format) {
            case 'DATE_TIME':
              input = (<DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                {...defaultProps}
                {...propsByState}/>);
              break;
            case 'DATE':
              input = (<DatePicker {...defaultProps} {...propsByState}/>);
              break;
            case 'TIME':
              input = (<TimePicker {...defaultProps} {...propsByState}/>);
              break;
            case 'DATE_RANGE':
              input = (<DatePicker.RangePicker {...defaultProps} {...propsByState}/>);
              break;
            case 'CDN_PIC':
              Object.assign(decoratorProps, {
                valuePropName: 'fileList',
                getValueFromEvent: (e) => {
                  if (Array.isArray(e)) {
                    return e;
                  }
                  return e && e.fileList;
                }
              });
              if (option.dragger) {
                input = (
                  <Upload.Dragger
                    {...defaultProps}
                    {...propsByState}
                    listType="picture"
                    action={option.action}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox"/>
                    </p>
                    <p className="ant-upload-text">点击或者托转文件到上传区域</p>
                  </Upload.Dragger>
                )
              } else {
                input = (
                  <Upload
                    {...defaultProps}
                    {...propsByState}
                    action={option.action}
                    listType="picture">
                    <Button>
                      <Icon type="upload"/>
                      上传图片
                    </Button>
                  </Upload>
                );
              }
              break;
            case 'FILE':
              Object.assign(decoratorProps, {
                valuePropName: 'fileList',
                getValueFromEvent: (e) => {
                  if (Array.isArray(e)) {
                    return e;
                  }
                  return e && e.fileList;
                }
              });

              if (option.dragger) {
                input = (
                  <Upload.Dragger
                    {...defaultProps}
                    {...propsByState}
                    listType="text"
                    action={option.action}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox"/>
                    </p>
                    <p className="ant-upload-text">点击或者托转文件到上传区域</p>
                  </Upload.Dragger>
                )
              } else {
                input = (
                  <Upload
                    {...defaultProps}
                    {...propsByState}
                    action={option.action}
                    listType="text">
                    <Button>
                      <Icon type="upload"/>
                      上传文件
                    </Button>
                  </Upload>
                );
              }
              break;
            case 'SELECT':
              input = (
                <Select mode={option.mode} {...defaultProps} {...propsByState}>
                  {option
                    .options
                    .map(item => (
                      <Select.Option
                        key={item.value || item.id}
                        value={item.value || item.id}
                        disabled={item.disabled}>{item.name || item.text}</Select.Option>
                    ))}
                </Select>
              );
              break;
            case 'TEXT':
              input = (<Input
                type="textarea"
                autosize={{
                minRows: 4,
                maxRows: 10
              }}
                {...defaultProps}
                {...propsByState}/>);
              break;
            default:
              input = (<Input {...defaultProps} {...propsByState}/>);
              break;
          }
          break;
      }
    }
    const formItemProps = Object.assign({
      label: option.title || option.name,
      required: option.required,
      hasFeedback: option.hasFeedback
    }, this.props.formLayout);
    return (
      <Form.Item key={key} {...formItemProps}>{this.$validator_.getFieldDecorator(option.name, decoratorProps)(input)}</Form.Item>
    )
  }

  render() {
    const dataSource = this.props.dataSource;
    const renderInput = this.renderInput.bind(this);
    return (
      <Form
        layout={this.props.layout}
        onSubmit={(e) => {
        e.preventDefault();
        this.handleSubmit();
      }}>{this
          .props
          .options
          .map(renderInput)}</Form>
    )
  }
}
