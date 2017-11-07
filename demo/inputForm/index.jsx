import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {defineMessage} from '@ali/aliyun-naza-l20n/dist/rc/l20n';

import Tabs from 'antd/lib/tabs';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import message from 'antd/lib/message';
import Select from 'antd/lib/select';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Tag from 'antd/lib/tag';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import FieldForm from '../fieldForm';

class _InputForm extends Component {
  static contextTypes = {
    antLocale: PropTypes.object
  }

  static propTypes = {
    locale: PropTypes.object,
    list: PropTypes.array.isRequired
  };

  getLocale(){
    let locale = {};
    if (this.context.antLocale && this.context.antLocale.Table) {
        locale = this.context.antLocale.Table;
    }
    return Object.assign(this.props.locale || {}, locale);
  }

  constructor(props) {
    super(props);
    let timestamp = +new Date().getTime();

    this.state = {
      list: props
        .list
        .map(item => {
          item = item || {};
          item.key = item.key || timestamp++;
          return item;
        }),
      fieldTypes: props.fieldTypes || FieldForm.fieldTypes,
      isDirty: false,
      submiting: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list !== this.props.list) {
      let timestamp = +new Date().getTime();
      this.setState({
        list: nextProps
          .list
          .map(item => {
            item.key = item.key || timestamp++;
            return item;
          })
      });
    }
  }

  handleBlur(e) {
    this.setState({
      isDirty: this.state.isDirty || !!e.target.value
    });
  }

  checkUnique(rule, value, callback) {
    let flag = false;
    if (this.state.isDirty) {
      const values = this
        .props
        .form
        .getFieldsValue();
      delete values[rule.field];
      for (let name in values) {
        if (name.substr(0, 4) === 'name' && values[name] === value) {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      callback(defineMessage({id: 'lang.form.fieldName.unique', message: '字段名称在模板中必须是唯一的', pure: true}));
    } else {
      callback();
    }
  }

  getRules(label, rule) {
    const rules = [
      {
        required: true,
        message: label + defineMessage({id: 'lang.form.label.required', message: '不能为空', pure: true})
      }, {
        max: 40,
        message: label + defineMessage({id: 'lang.form.label.limit', message: '长度不能超过40个字节', pure: true})
      }
    ]
    if (rule) {
      return rules.concat(rule);
    } else {
      return rules;
    }
  }

  handleSubmit(callback) {
    this
      .props
      .form
      .validateFields((errors, values) => {
        for (let key in this.refs) {
          this
            .refs[key]
            .handleSubmit((err, body) => {
              if (err) {
                errors = true;
              } else {
                if (values[this.refs[key].props.name]) {
                  values[this.refs[key].props.name].push(body);
                } else {
                  if (this.refs[key].props.type === 'array') {
                    values[this.refs[key].props.name] = [body];
                  } else {
                    values[this.refs[key].props.name] = body;
                  }
                }
              }
            })
        }

        if (errors) {
          callback(defineMessage({id: 'lang.fallback.validateFormfail', message: '表单校验失败', pure: true}));
        } else {
          let body = [];
          for (let key in values) {
            let [name,
              index] = key.split('@');
            body[index] = body[index] || {};
            body[index][name] = values[key];
          }
          body = body.filter((item, index) => {
            if (item) {
              this.state.list[index] = Object.assign({
                key: this.state.list[index].key
              }, item);
              return true;
            } else {
              return false;
            }
          });
          this.setState({list: this.state.list});
          callback(null, this.state.list);
        }
      });
  }

  getName(name, index) {
    return name + '@' + index;
  }

  render() {
    const {list, submitting} = this.state;
    const form = this.props.form;
    const nameRules = [
      {
        pattern: /^[A-Za-z0-9\._\-]*$/,
        message: defineMessage({id: 'lang.form.fieldName.limit', message: '字段名称必须是字母数字、下划线以及中划线', pure: true})
      }, {
        validator: this
          .checkUnique
          .bind(this)
      }
    ]

    return (
      <Form className={"j-com-inputCustom " + this.props.className} horizontal>
        {list.length
          ? list.map((item, index) => {
            const name = this.getName('name', index);
            const title = this.getName('title', index);
            const type = this.getName('type', index);
            return (
              <Row key={index} className="elem-item">
                <Col span={1}>
                  <Button
                    size="small"
                    onClick={() => {
                    const newList = list.slice(0, index);
                    newList
                      .push
                      .apply(newList, list.slice(index + 1));
                    this.setState({list: newList})
                  }}><Icon type="minus-circle"/></Button>
                  <Button
                    size="small"
                    type="primary"
                    onClick={() => {
                    if (!this.props.max || list.length < this.props.max) {
                      const newList = list.slice(0, index + 1);
                      newList.push({
                        key: + new Date().getTime()
                      });
                      newList
                        .push
                        .apply(newList, list.slice(index + 1));
                      this.setState({list: newList});
                    } else {
                      message.error(defineMessage({id: 'lang.form.fieldLength.limit', message: '单个模板字段数量不能超过', pure: true}) + this.props.max + defineMessage({id: 'lang.form.fieldLength.quantityUnit', message: '个', pure: true}));
                    }
                  }}><Icon type="plus-circle"/></Button>
                </Col>
                <Col span={23}>
                  <Form.Item
                    key={name}
                    {...tool.formLayout}
                    label={defineMessage({id: 'lang.form.fieldName.label', message: '字段名称'})}>
                    {form.getFieldDecorator(name, {
                      initialValue: item.name,
                      rules: this.getRules(defineMessage({id: 'lang.form.fieldName.label', message: '字段名称', pure: true}), nameRules)
                    })(<Input
                      placeholder={defineMessage({id: 'lang.form.feildName.placeholderLimit', message: '请输入字段名称（字段名称必须是字母数字、下划线以及中划线）', pure: true})}
                      onBlur={this
                      .handleBlur
                      .bind(this)}/>)}
                  </Form.Item>
                  <Form.Item
                    key={title}
                    {...tool.formLayout}
                    label={defineMessage({id: 'lang.form.fieldTitle.label', message: '字段标题'})}>
                    {form.getFieldDecorator(title, {
                      initialValue: item.title,
                      rules: this.getRules(defineMessage({id: 'lang.form.fieldTitle.label', message: '字段标题', pure: true}))
                    })(<Input
                      placeholder={defineMessage({id: 'lang.form.fieldTitle.placeholder', message: '请输入字段标题', pure: true})}
                      onBlur={this
                      .handleBlur
                      .bind(this)}/>)}
                  </Form.Item>
                  <Form.Item
                    key={type}
                    {...tool.formLayout}
                    label={defineMessage({id: 'lang.fieldType.label', message: '字段类型'})}>
                    {form.getFieldDecorator(type, {
                      initialValue: item.type,
                      rules: [
                        {
                          required: true,
                          message: defineMessage({id: 'lang.form.fieldType.required', message: '字段类型不能为空', pure: true})
                        }
                      ]
                    })(
                      <Select
                        style={{
                        width: 250
                      }}
                        placeholder={defineMessage({id: 'lang.form.fieldType.placeholder', message: '请选择字段类型', pure: true})}>
                        {this
                          .state
                          .fieldTypes
                          .map(t => (
                            <Select.Option key={t.id}>{t.name}</Select.Option>
                          ))}
                      </Select>
                    )}
                  </Form.Item>
                  {this.renderInput(item, index)}
                </Col>
              </Row>
            )
          })
          : (
            <Row>
              <Col offset={1}>{defineMessage({id: 'lang.form.fieldSetting.required', message: '字段配置为空!'})}
                <Button
                  style={{
                  marginLeft: 10
                }}
                  type="primary"
                  size="small"
                  onClick={() => this.setState({
                  list: list.concat({
                    key: + new Date().getTime()
                  })
                })}><Icon type="plus-circle"/> {defineMessage({id: 'lang.button.addNewField', message: '添加新字段'})}</Button>
              </Col>
            </Row>
          )
}
      </Form>
    );
  }

  renderInput(item, index) {
    const type = this
      .props
      .form
      .getFieldValue(this.getName('type', index));
    switch (type) {
      case 'radio':
      case 'checkbox':
      case 'single':
      case 'multiple':
        return this.renderValues(item, index);
      case 'object':
        return this.renderItem(item, index);
      case 'group':
        return this.renderList(item, index);
      default:
        return null;
    }
  }

  renderValues(item, index) {
    const name = this.getName('items', index);
    return (
      <Form.Item
        {...tool.formLayout}
        label={defineMessage({id: 'lang.form.fieldValueList.label', message: '数据组'})}>
        {this
          .props
          .form
          .getFieldDecorator(name, {
            initialValue: item.items,
            rules: [
              {
                required: true,
                message: defineMessage({id: 'lang.form.fieldValueList.required', message: '数据组不能为空', pure: true})
              }
            ]
          })(<Select
            tags
            placeholder={defineMessage({id: 'lang.form.fieldValueList.placeholder', message: '填写数据组，每次回车会创建一个值', pure: true})}/>)}
      </Form.Item>
    )
  }

  renderItem(item, index) {
    const name = this.getName('object', index);
    if (!item.object) {
      item.object = [];
    }
    const fieldTypes = this
      .state
      .fieldTypes
      .slice(0, -2);
    return (
      <Form.Item
        {...tool.formLayout}
        label={defineMessage({id: 'lang.form.fieldValueObject.label', message: '配置数据项'})}>
        <InputForm
          key={name + '@' + index}
          ref={name + '@' + index}
          max={this.props.max}
          fieldTypes={fieldTypes}
          name={name}
          type="array"
          list={item.object[0] || []}/>
      </Form.Item>
    )
  }

  renderList(item, index) {
    const name = this.getName('list', index);

    const applyChange = () => {
      this.setState({
        fieldTypes: this
          .state
          .fieldTypes
          .slice(0)
      });
    }
    if (!item.list) {
      item.list = [];
    }
    const fieldTypes = this
      .state
      .fieldTypes
      .slice(0, -2);

    return (
      <Form.Item
        {...tool.formLayout}
        label={defineMessage({id: 'lang.form.fieldValueList.label', message: '数据组'})}>
        <div className="elem-tags">
          {item
            .list
            .map((properties, index) => {
              return (
                <Tag
                  key={index}
                  color={item.list[index].hide
                  ? ''
                  : '#108ee9'}
                  closable={true}
                  onClick={e => {
                  item.list[index].hide = !item.list[index].hide;
                  applyChange()
                }}
                  onClose={e => {
                  if (item.list.length > 1) {
                    item
                      .list
                      .splice(index, 1);
                    applyChange()
                  }
                }}>{defineMessage({
                    id: 'lang.form.number.label',
                    message: '数值项{{index}}',
                    props: {
                      index: index + 1
                    }
                  })}</Tag>
              )
            })}
          <Button
            size="small"
            type="dashed"
            onClick={e => {
            item
              .list
              .splice(index + 1, 0, item.list[item.list.length - 1] || [{}]);
            applyChange()
          }}>+ {defineMessage({id: 'lang.form.number.add', message: '添加新数值项'})}</Button>
        </div>
        {item
          .list
          .map((properties, index) => (<InputForm
            className={properties.hide
            ? 'elem-section-hide'
            : ''}
            ref={name + '@' + index}
            max={this.props.max}
            key={name + '@' + index}
            fieldTypes={fieldTypes}
            name={name}
            type="array"
            onClose={e => {
            item.list[index].hide = !item.list[index].hide;
            applyChange()
          }}
            list={properties}/>))}
      </Form.Item>
    )
  }
}

const InputForm = Form.create({withRef: true})(_InputForm);
InputForm.prototype.getRealInstance = function () {
  return this.refs.wrappedComponent.refs.formWrappedComponent;
}
InputForm.prototype.handleSubmit = function (callback) {
  _InputForm
    .prototype
    .handleSubmit
    .call(this.getRealInstance(), callback);
};

export default InputForm;
