import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Tabs from 'antd/lib/tabs';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import DatePicker from 'antd/lib/date-picker';
import TimePicker from 'antd/lib/time-picker';
import Icon from 'antd/lib/icon';
import Radio from 'antd/lib/radio';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';

import moment from 'moment';
import ResizeUpload from '../resizeUpload';
import tool from '../../app.tools';
import {defineMessage, formatMessage} from '@ali/aliyun-naza-l20n/dist/rc/l20n';

import './index.less';

const fieldTypes = [
  {
    id: 'string',
    name: defineMessage({id: 'lang.fieldType.string', message: '字符串', pure: true})
  }, {
    id: 'integer',
    name: defineMessage({id: 'lang.fieldType.integer', message: '正数', pure: true})
  }, {
    id: 'float',
    name: defineMessage({id: 'lang.fieldType.float', message: '浮点数', pure: true})
  }, {
    id: 'picture',
    name: defineMessage({id: 'lang.fieldType.picture', message: '图片', pure: true})
  }, {
    id: 'video',
    name: defineMessage({id: 'lang.fieldType.video', message: '视频', pure: true})
  }, {
    id: 'date',
    name: defineMessage({id: 'lang.fieldType.date', message: '日期', pure: true})
  }, {
    id: 'time',
    name: defineMessage({id: 'lang.fieldType.time', message: '时间', pure: true})
  }, {
    id: 'datetime',
    name: defineMessage({id: 'lang.fieldType.dateTimg', message: '日期+时间', pure: true})
  }, {
    id: 'radio',
    name: defineMessage({id: 'lang.fieldType.radio', message: '单选', pure: true})
  }, {
    id: 'checkbox',
    name: defineMessage({id: 'lang.fieldType.check', message: '多选', pure: true})
  }, {
    id: 'single',
    name: defineMessage({id: 'lang.fieldType.single', message: '单值列', pure: true})
  }, {
    id: 'multiple',
    name: defineMessage({id: 'lang.fieldType.multiple', message: '多值列', pure: true})
  }, {
    id: 'object',
    name: defineMessage({id: 'lang.fieldType.object', message: '数据项', pure: true})
  }, {
    id: 'group',
    name: defineMessage({id: 'lang.fieldType.group', message: '数据组', pure: true})
  }, {
    id: 'html',
    name: defineMessage({id: 'lang.fieldType.html', message: '代码片段', pure: true})
  }
]

const emptyFieldTemple = {
  id: 0,
  title: defineMessage({id: 'lang.form.dontUseTemple', message: '不使用模板', pure: true}),
  items: []
}
export default class FieldForm extends Component {
  static fieldTypes = fieldTypes;

  static emptyFieldTemple = emptyFieldTemple;

  static buildinTemplates = [
    emptyFieldTemple, {
      id: -1,
      title: defineMessage({id: 'lang.dictionary.imageText', message: '图文', pure: true}),
      items: [
        {
          type: 'picture',
          name: 'imageUrl',
          title: defineMessage({id: 'lang.util.imageUrl', message: '图片地址', pure: true}),
          required: true
        }, {
          type: 'string',
          name: 'title',
          title: defineMessage({id: 'lang.util.imageTitle', message: '图片标题', pure: true}),
          required: true
        }
      ],
      readOnly: true
    }, {
      id: -2,
      title: defineMessage({id: 'lang.dictionary.flash', message: 'Flash', pure: true}),
      items: [
        {
          type: 'video',
          name: 'animationUrl',
          title: defineMessage({id: 'lang.util.flashUrl', message: 'Flash地址', pure: true}),
          required: true
        }
      ],
      readOnly: true
    }, {
      id: -3,
      title: defineMessage({id: 'lang.dictionary.link', message: '文字链', pure: true}),
      items: [
        {
          type: 'string',
          name: 'title',
          title: defineMessage({id: 'lang.util.textTitle', message: '文字标题', pure: true}),
          required: true
        }
      ],
      readOnly: true
    }, {
      id: -4,
      title: defineMessage({id: 'lang.dictionary.image', message: '图片', pure: true}),
      items: [
        {
          type: 'picture',
          name: 'imageUrl',
          title: defineMessage({id: 'lang.util.imageUrl', message: '图片地址', pure: true}),
          required: true
        }
      ],
      readOnly: true
    }, {
      id: -5,
      title: defineMessage({id: 'lang.dictionary.video', message: '动画或视频', pure: true}),
      items: [
        {
          type: 'video',
          name: 'animationUrl',
          title: defineMessage({id: 'lang.util.videoUrl', message: '视频地址', pure: true}),
          required: true
        }
      ],
      readOnly: true
    }, {
      id: -6,
      title: defineMessage({id: 'lang.dictionary.html', message: 'HTML/JS', pure: true}),
      items: [
        {
          type: 'html',
          name: 'content',
          title: defineMessage({id: 'lang.fieldType.html', message: '代码片段', pure: true}),
          required: true
        }
      ],
      readOnly: true
    }
  ]

  static parseBody = (template) => {
    const templateContent = {
      body: {}
    };
    if (template.items) {
      template
        .items
        .forEach(field => {
          if (field.type === 'group' || field.type === 'object') {
            templateContent.body[field.name] = [];
            field
              .list
              .forEach(items => {
                let b = {};
                templateContent
                  .body[field.name]
                  .push(b);
                items.forEach(item => {
                  b[item.name] = item.value;
                });
              });
            if (field.type === 'object') {
              templateContent.body[field.name] = templateContent.body[field.name][0];
            }
          } else if (field.name) {
            templateContent.body[field.name] = field.value;
          }
        });
      //remove
      delete template.body;
    }
    return [templateContent, template];
  }

  static formatBody = (schema) => {
    if (schema) {
      let customFields = [];
      try {
        customFields = JSON.parse(schema);
        if (Array.isArray(customFields)) {
          // is schema
          return Object.assign(FieldForm.emptyFieldTemple, {items: customFields});
        } else {
          if (!customFields.items) {
            // schema and body
            customFields.items = customFields.template_content;
          }
          return customFields;
        }
      } catch (e) {
        console.error(e);
        return FieldForm.emptyFieldTemple;
      }
    } else {
      return FieldForm.emptyFieldTemple;
    }
  }

  static propTypes = {
    customFields: PropTypes.array
  }

  static defaultProps = {
    customFields: []
  }

  constructor(props) {
    super(props);

    this.state = {
      customFields: props.customFields,
      fieldTypes: props.fieldTypes || fieldTypes
    }

    if (!this.state.customFields.length) {
      this
        .state
        .customFields
        .push(this.getDefaultField());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.customFields !== this.props.customFields) {
      if (!nextProps.customFields.length) {
        nextProps
          .customFields
          .push(this.getDefaultField());
      }
      this.setState({customFields: nextProps.customFields})
    }
  }

  getDefaultField() {
    return {name: '', value: '', type: this.state.fieldTypes[0].id}
  }

  renderUploadValue(field) {
    return (<ResizeUpload
      multiple={false}
      record={field}
      name={'fileList'}
      size={this.props.size}
      sizes={this.props.size
      ? [this.props.size]
      : null}
      noSize={!this.props.size}
      form={{
      setFieldsValue: (values) => {
        field.value = values.fileList[0]
          ? values.fileList[0].url
          : '';
        this.applyChange()
      }
    }}
      uuid={''}
      creativeType={this.props.creativeType}
      type={field.type}/>);
  }

  renderTextGroup(opt) {
    const customFields = this.state.customFields;
    const field = opt.field;
    const messagesMap = {
      fieldLabel: defineMessage({
        id: 'lang.form.field.label',
        message: '自定义字段{{index}}',
        props: {
          index: opt.key + 1
        }
      }),
      fieldPlaceholder: defineMessage({id: 'lang.form.field.placeholder', message: '请输入字段名', pure: true}),
      valueType: defineMessage({id: 'lang.form.value.type', message: '值类型', pure: true})
    }
    const readOnly = this.props.readOnly;
    return (
      <Form.Item
        key={field.name || opt.key + ''}
        {...tool.formLayout}
        required={field.required || false}
        label={field.title || formatMessage(messagesMap.fieldLabel, true)}>
        <Input.Group compact className={`elem-input-group elem-input-group-${opt.key}`}>
          <ul
            className="elem-field-btns"
            style={{
            display: readOnly && 'none'
          }}>
            <li>
              <Icon
                type="plus-circle-o"
                onClick={(e) => {
                customFields.splice(opt.key + 1, 0, this.getDefaultField());
                this.applyChange();
              }}/></li>
            <li>
              <Icon
                type="minus-circle-o"
                onClick={(e) => {
                customFields.splice(opt.key, 1);
                this.applyChange();
              }}/></li>
          </ul>
          <Input
            placeholder={messagesMap.fieldPlaceholder}
            defaultValue={field.name}
            disabled={readOnly}
            onChange={e => {
            field.name = e.target.value;
          }}
            suffix={(
            <Select
              className="elem-input-option"
              defaultValue={field.type || 'string'}
              size="small"
              disabled={readOnly}
              placeholder={messagesMap.valueType}
              onChange={(value) => {
              field.type = value;
              this.applyChange();
            }}>{this
                .state
                .fieldTypes
                .map(item => (
                  <Select.Option key={item.id}>{item.name}</Select.Option>
                ))}</Select>
          )}/>
          <div className={'elem-field-' + field.type}>{this.getTypeInput(field, field.name || opt.key + '')}</div>
        </Input.Group>
      </Form.Item>
    );
  }

  applyChange() {
    this.setState({
      fieldTypes: this
        .state
        .fieldTypes
        .slice(0)
    })
  }

  getTypeInput(field, key) {
    let fieldTypes;
    const valuePlaceholder = defineMessage({id: 'lang.form.value.placeholder', message: '请输入字段值', pure: true})
    switch (field.type) {
      case 'integer':
        return (<InputNumber
          key={key}
          placeholder={valuePlaceholder}
          defaultValue={field.value}
          min={0}
          max={9999999999}
          onChange={v => {
          field.value = v;
        }}/>)
      case 'float':
        return (<InputNumber
          key={key}
          placeholder={valuePlaceholder}
          defaultValue={field.value}
          min={0.00}
          max={9999999999.00}
          onChange={v => {
          field.value = v
        }}/>);
      case 'radio':
        return (
          <Radio.Group
            key={key}
            defaultValue={field.value
            ? field.value
            : undefined}
            onChange={e => {
            field.value = e.target.value
          }}>
            {field.items
              ? field
                .items
                .map(item => (
                  <Radio key={item.value || item} value={item.value || item}>
                    {item.label || item.value || item}
                  </Radio>
                ))
              : (
                <Radio value="">
                  {defineMessage({id: 'lang.form.value.empty', message: '空值'})}
                </Radio>
              )}
          </Radio.Group>
        )
      case 'checkbox':
        return (<Checkbox.Group
          key={key}
          defaultValue={field.value
          ? field
            .value
            .split(',')
          : undefined}
          onChange={values => {
          field.value = values.join(',')
        }}
          options={field.items
          ? field.items
          : [
            {
              key: 1,
              label: defineMessage({id: 'lang.form.value.empty', message: '空值'}),
              value: ''
            }
          ]}/>)
      case 'single':
        if (field.items && field.items.length) {
          return (
            <Select
              key={key}
              placeholder={valuePlaceholder}
              defaultValue={field.value
              ? field.value
              : undefined}
              onChange={value => {
              field.value = value;
            }}>
              {field
                .items
                .map(item => {
                  if (Object(item) === item) {
                    return (
                      <Select.Option key={item.value}>{item.label || item.value}</Select.Option>
                    )
                  } else {
                    return (
                      <Select.Option key={item}>{item}</Select.Option>
                    )
                  }
                })
}
            </Select>
          )
        } else {
          return (<Input
            key={key}
            placeholder={valuePlaceholder}
            defaultValue={field.value}
            onChange={e => {
            field.value = e.target.value;
          }}/>)
        }
      case 'multiple':
        if (field.items && field.items.length) {
          return (
            <Select
              key={key}
              defaultValue={field.value
              ? field.value
              : undefined}
              placeholder={defineMessage({id: 'lang.form.value.select', message: '请选择字段值', pure: true})}
              multiple={true}
              onChange={value => {
              field.value = value;
            }}>
              {field
                .items
                .map(item => (
                  <Select.Option key={item.value || item}>{item.label || item.value || item}</Select.Option>
                ))}
            </Select>
          )
        } else {
          return (<Select
            key={key}
            defaultValue={field.value
            ? field.value
            : undefined}
            tags
            showSearch
            placeholder={defineMessage({id: 'lang.form.value.multiple', message: '填写字段值，每次回车会创建一个值', pure: true})}
            onChange={value => {
            field.value = value;
          }}/>)
        }
      case 'date':
        return (<DatePicker
          key={key}
          placeholder={defineMessage({id: 'lang.form.value.date', message: '请选择日期', pure: true})}
          defaultValue={field.value
          ? moment(field.value)
          : undefined}
          onChange={(date, dateString) => {
          field.value = dateString;
        }}/>)
      case 'time':
        return (<TimePicker
          key={key}
          placeholder={defineMessage({id: 'lang.form.value.time', message: '请选择时间', pure: true})}
          defaultValue={field.value
          ? moment(field.value)
          : undefined}
          onChange={(time, timeString) => {
          field.value = timeString;
        }}/>)
      case 'datetime':
        return (<DatePicker
          key={key}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          placeholder={defineMessage({id: 'lang.form.value.datetime', message: '请选择日期和时间', pure: true})}
          defaultValue={field.value
          ? moment(field.value)
          : undefined}
          onChange={(datetime, datetimeString) => {
          field.value = datetimeString;
        }}/>)
      case 'picture':
      case 'video':
        return (<Input
          key={key}
          addonBefore={this.renderUploadValue(field)}
          placeholder={valuePlaceholder}
          value={field.value}
          onChange={e => {
          field.value = e.target.value;
          this.applyChange()
        }}/>)
      case 'group':
        const selectedKeys = []
        field.list = (field.list || []);
        field
          .list
          .forEach((item, index) => {
            item.key = index + '';
            if (!item.hide) {
              selectedKeys.push(item.key);
            }
          });
        fieldTypes = this
          .state
          .fieldTypes
          .slice(0, -2);

        return (
          <div key={key} className="elem-innerForm">
            <Select
              value={selectedKeys}
              placeholder={defineMessage({id: 'lang.form.value.group', message: '请选择数据项，从右边按钮添加', pure: true})}
              multiple={true}
              disabled={true}
              onChange={values => {
              const map = {};
              values.forEach(v => map[v] = true);
              field
                .list
                .forEach(item => {
                  item.hide = !map[item.key];
                });
              this.applyChange();
            }}>
              {field
                .list
                .map(item => (
                  <Select.Option key={item.key}>{defineMessage({
                      id: 'lang.form.value.item',
                      message: '数值项{{index}}',
                      props: {
                        index: item.key + 1
                      }
                    })}</Select.Option>
                ))}
            </Select>
            <Button
              size="small"
              type="dashed"
              onClick={e => {
              field
                .list
                .push([{}]);
              this.applyChange();
            }}>
              {defineMessage({id: 'lang.form.value.addItem', message: '+ 添加新数值项'})}
            </Button>
            {field
              .list
              .map(item => (<FieldForm
                className={item.hide
                ? 'j-com-fieldCustom-hide'
                : ''}
                key={item.key}
                customFields={item}
                fieldTypes={fieldTypes}/>))}
          </div>
        )
      case 'object':
        field.list = (field.object || [
          [
            {}]
        ]);
        field
          .list
          .forEach((item, index) => {
            item.key = index + '';
          });
        fieldTypes = this
          .state
          .fieldTypes
          .slice(0, -2);

        return (
          <div key={key} className="elem-innerForm">
            <h5>{defineMessage({id: 'lang.form.value.object', message: '配置数据项内容'})}</h5>
            {field
              .list
              .map(item => (<FieldForm
                className={item.hide
                ? 'j-com-fieldCustom-hide'
                : ''}
                key={item.key}
                customFields={item}
                fieldTypes={fieldTypes}/>))}
          </div>
        )
      case 'html':
        return (<Input
          type="textarea"
          autosize={{
          minRows: 3,
          maxRows: 10
        }}
          key={key}
          placeholder={valuePlaceholder}
          defaultValue={field.value}
          onChange={e => {
          field.value = e.target.value;
        }}/>)
      default:
      case 'string':
        return (<Input
          key={key}
          placeholder={valuePlaceholder}
          defaultValue={field.value}
          onChange={e => {
          field.value = e.target.value;
        }}/>)
    }
  }

  render() {
    return (
      <div className={'j-com-fieldCustom ' + (this.props.className || '')}>
        {this
          .state
          .customFields
          .map((field, index) => {
            return this.renderTextGroup({key: index, field: field});
          })
}
      </div>
    )
  }
}
