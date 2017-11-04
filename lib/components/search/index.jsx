import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Select from 'antd/lib/select';
import Pagination from 'antd/lib/pagination';
import Icon from 'antd/lib/icon';
import './index.less';

export class Search extends Component {
  static proptTypes = {
    value: PropTypes.any,
    selectedItem: PropTypes.object,
    options: PropTypes.array,
    select: PropTypes.object,
    multiple: PropTypes.bool,
    rowKey: PropTypes.string.isRequired,
    labelKey: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  }

  static contextTypes = {
    dataModel: PropTypes.object.isRequired
  }

  static defaultProps = {
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
    onChange: () => {}
  }

  constructor(props, context) {
    super(props, context);

    let value;
    if (props.multiple) {
      value = props.value || [];
    } else {
      value = props.value || '';
    }

    // value是真实的值，keyword是搜索词，value优先级高，否则才有keyword
    this.state = {
      current: 1,
      value: value,
      multiMap: {},
      list: props.options,
      keyword: props.keyword,
      disabled: props.disabled,
      total: 0,
      loading: true
    }
    if (!props.multiple && props.selectedItem) {
      this.state.keyword = '';
      this.select(props.selectedItem, true);
    } else if (!props.options.length && !props.disabled) {
      if (props.multiple) {
        if (value) {
          this.getData({page: 1, ids: value, value: value, keyword: ''});
        } else {
          this.getData({page: 1, keyword: props.keyword});
        }
      } else {
        if (value) {
          this.getItem({id: value});
        } else {
          this.getData({page: 1, keyword: ''});
        }
      }
    }
  }

  toSelect(item, flag) {
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

  select(item, flag) {
    if (item instanceof Promise) {
      item.then(this.toSelect.bind(this));
    } else {
      this.toSelect(item, flag);
    }
  }

  componentWillReceiveProps(nextProps) {
    let enabled = false;
    if (this.props.disabled) {
      if (!nextProps.disabled) {
        enabled = true;
      }
    } else if (!nextProps.disabled) {
      enabled = true;
    }

    if (enabled) {
      const hasValue = this.props.multiple
        ? this.props.value && this.props.value.length
        : this.props.value;
      if (nextProps.value && !hasValue) {
        // 此时value必须输入selectedItem
        if (nextProps.multiple) {
          this.getData({page: 1, value: nextProps.value, ids: nextProps.value, keyword: ''});
        } else {
          if (nextProps.selectedItem) {
            if (nextProps.selectedItem[this.props.rowKey] != nextProps.value) {
              this.select(nextProps.selectedItem)
            }
          } else if (nextProps.noSearch) {
            if (nextProps.options.length) {
              const value = params.value || (this.props.multiple
                ? []
                : '');
              this.setState({list: nextProps.options, value: value, keyword: '', total: 0, loading: false});
            } else {
              this.getData({page: 1, keyword: '', value: nextProps.value});
            }
          } else {
            if (nextProps.value != this.state.value) {
              this.getItem({id: nextProps.value});
            }
          }
        }
      } else if (nextProps.keyword != this.props.keyword) {
        this.getData({page: 1, keyword: nextProps.keyword});
      } else if (this.props.disabled) {
        this.getData({page: 1, keyword: ''});
      }
    }
  }

  getItem(params) {
    this.setState({keyword: ''});
    const dataModel = this.context.dataModel;
    if (dataModel && dataModel.getItem) {
      const _params = Object.assign(this.props.params, params);

      const promise = dataModel.getItem(_params);
      promise.then(data => {
        if (this.state.keyword) {
          return;
        }

        this.setState({
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

  getData(params) {
    this.setState({loading: true});
    const dataModel = this.context.dataModel;
    const rowKey = this.props.rowKey;
    if (dataModel) {
      const keyword = params.keyword;
      const _params = Object.assign(this.props.params, params);
      if (keyword) {
        _params.keyword = encodeURIComponent(keyword)
      }
      const promise = dataModel.getData(_params);
      promise.then(data => {
        const hasValue = this.props.multiple
          ? this.state.value.length
          : this.state.value;
        if (!params.ids && (hasValue || params.keyword !== this.state.keyword)) {
          this.setState({loading: false});
          return;
        }
        const value = params.value || (this.props.multiple
          ? []
          : '');
        const newState = {
          value: value,
          keyword: params.keyword,
          total: 0,
          loading: false
        };
        if (this.props.noSearch) {
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
        if (this.props.multiple) {
          let multiMap = {};
          if (params.ids) {
            newState
              .list
              .forEach(item => {
                if (params.ids.indexOf(item[rowKey]) > -1) {
                  multiMap[item[rowKey]] = item;
                }
              })
            newState.multiMap = multiMap;
          } else if (this.state.value.length) {
            newState.list = newState
              .list
              .filter(item => {
                if (this.state.multiMap[item[rowKey]]) {
                  return false;
                } else {
                  return true;
                }
              });
            for (let key in this.state.multiMap) {
              newState
                .list
                .unshift(this.state.multiMap[key]);
            }
          }
        }
        this.setState(newState);

        return newState.list;
      });
      return promise;
    }
  }

  handleSearch(params, callback) {
    if (this.props.noSearch) {
      return;
    }
    callback = callback || function () {};
    clearTimeout(this.$timer_);

    this.$timer_ = setTimeout(() => {
      const value = this.props.multiple
        ? this.state.value
        : '';
      this.setState({
        keyword: params.keyword,
        current: params.page || 1,
        value: value
      });
      if (!this.props.multiple && this.state.value) {
        this
          .props
          .onChange(value);
      }
      const promise = this.getData(params);
      promise && promise.then(res => callback(null, res), err => callback(err));
    }, 200);
  }

  render() {
    const {
      rowKey,
      labelKey,
      onChange,
      noSearch,
      select,
      multiple,
      disabled
    } = this.props;
    const {
      value,
      keyword,
      current,
      loading,
      total,
      list
    } = this.state;

    const selectProps = Object.assign(select, {
      disabled: disabled,
      multiple: multiple,
      value: value || keyword || undefined
    });
    const options = list.concat({
      [rowKey]: 'miniPager',
      [labelKey]: !noSearch && total
        ? (
          <Pagination
            size="small"
            current={current}
            total={total}
            showLessItems={true}
            onChange={(page) => {
            this.handleSearch({page: page, keyword: keyword})
          }}
            showTotal={() => loading
            ? (<Icon type="loading"/>)
            : `共匹配 ${total} 条`}/>
        )
        : null
    })
    let selectedValue = null;
    return (
      <Select
        ref={search => this.$search_ = search}
        {...selectProps}
        placeholder={selectProps.placeholder}
        dropdownClassName="j-kit-minSearch"
        filterOption={(value, option) => {
        if (option.key === 'miniPager' || React.isValidElement(value)) {
          return true;
        } else {
          return option.key == value || option
            .props
            .children
            .toLocaleLowerCase()
            .indexOf(value.toLocaleLowerCase()) > -1;
        }
      }}
        onSelect={(value, option) => {
        selectedValue = value;
        if (value === 'miniPager') {
          setTimeout(() => {
            this.setOpenState();
          }, 100);
          return;
        }
        let item;
        if (multiple) {
          item = list.find(item => item[rowKey] == value);
          this.state.multiMap[value] = item;
          value = this
            .state
            .value
            .concat(value);
        } else {
          item = {
            [rowKey]: option.props.value,
            [labelKey]: option.props.children
          };
        }
        this.setState({current: 1, value: value, keyword: ''});
        onChange(value, item);
      }}
        onDeselect={value => {
        selectedValue = null;
        if (multiple) {
          const idx = this
            .state
            .value
            .findIndex(v => v == value);
          delete this.state.multiMap[value];
          value = this
            .state
            .value
            .slice(0, idx)
            .concat(this.state.value.slice(idx + 1));
          this.setState({current: 1, value: value, keyword: ''});
          onChange(value);
        }
      }}
        onChange={value => {
        selectedValue = null;
        if (value === undefined) {
          this.getData({page: 1, keyword: ''});
          this.setState({current: 1, value: '', multiMap: {}, keyword: ''});
          onChange(value);
        }
      }}
        onSearch={value => {
        if (selectedValue) 
          return;
        this.handleSearch({
          page: 1,
          keyword: value || ''
        }/*, () => { if (multiple && !value) { this.setOpenState(); } }*/)
      }}>
        {options.map(item => (
          <Select.Option key={item[rowKey]}>{item[labelKey]}</Select.Option>
        ))}
      </Select>
    )
  }

  setOpenState() {
    if (this.$search_._reactInternalInstance._renderedComponent._instance.setOpenState) {
      this
        .$search_
        ._reactInternalInstance
        ._renderedComponent
        ._instance
        .setOpenState(true);
    }
  }
}
