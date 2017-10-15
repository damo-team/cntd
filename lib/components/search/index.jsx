import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from 'antd/lib/auto-complete';
import Pagination from 'antd/lib/pagination';
import Icon from 'antd/lib/icon';

export default class Search extends Component {
  static proptTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    select: PropTypes.object,
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
    select: {},
    params: {},
    rowKey: 'id',
    labelKey: 'name',
    onChange: () => {}
  }

  constructor(props, context) {
    super(props);
    const selectedItem = props.options.find(item => item[props.rowKey] == props.value);
    this.state = {
      current: 1,
      defaultValue: selectedItem ? '' : props.value,
      value: selectedItem ? selectedItem[props.labelKey] : props.value,
      selected: !!selectedItem,
      list: props.options,
      keyword: '',
      disabled: props.disabled,
      total: props.select.total,
      loading: true
    }
    if(!selectedItem){
      this.getData(context.dataModel, this.state.disabled, {
        page: 1,
        keyword: this.state.keyword
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value != this.props.value) {
      if(!this.state.value){
        const selectedItem = nextProps.options.find(item => item[this.props.rowKey] == nextProps.value);
        this.setState({
          defaultValue: selectedItem? '' :nextProps.value,
          value: selectedItem? selectedItem[this.props.labelKey] : '',
          list: nextProps.options,
          selected: !!selectedItem,
          disabled: nextProps.disabled
        });
      }
    } else if (nextProps.disabled != this.props.disabled) {
      this.setState({disabled: nextProps.disabled});
      this.getData(this.context.dataModel, !nextProps.disabled, {
        page: this.state.current,
        keyword: this.state.keyword
      });
    } else if (nextProps.options != this.props.options) {
      if(!this.state.selected && this.state.defaultValue && this.state.defaultValue === this.state.value){
        const selectedItem = nextProps.options.find(item => item[this.props.rowKey] == this.state.defaultValue);

        this.setState({
          defaultValue: selectedItem? '' : this.state.defaultValue,
          value: selectedItem? selectedItem[this.props.labelKey] : '',
          list: nextProps.options,
          selected: !!selectedItem,
          disabled: nextProps.disabled
        });
      }
    }
  }

  getData(dataModel, disabled, params) {
    if (dataModel && !disabled) {
      const promise = dataModel.getData(Object.assign(this.props.params, params));
      promise.then(data => {
        if (this.state.total !== undefined) {
          this.setState({list: data.list, current: params.page, total: data.total, keyword: params.keyword, loading: false});
          data = data.list;
        } else {
          this.setState({list: data})
        }
        if(!data.length){
          this.setState({
            defaultValue: '',
            selected: false
          });
          this.props.onChange('');
        }else if(this.state.selected || this.state.defaultValue && this.state.defaultValue === this.state.value){
          const selectedItem = data.find(item => item[this.props.rowKey] == this.state.value);

          this.setState({
            defaultValue: selectedItem? '' : this.state.value,
            value: selectedItem? selectedItem[this.props.labelKey] : '',
            selected: !!selectedItem
          });
          if(!selectedItem){
            this.props.onChange('');
          }
        }
      });
      return promise;
    }
  }

  handleSearch(params, callback) {
    callback = callback || function(){};
    clearTimeout(this.$timer_);
    this.setState({loading: true});

    this.$timer_ = setTimeout(() => {
      const promise = this.getData(this.context.dataModel, this.state.disabled, params)
      promise && promise.then(res => callback(null, res), err => callback(err));
    }, 200);
  }

  render() {
    const {rowKey, labelKey, onChange, select} = this.props;
    const {
      disabled,
      value,
      keyword,
      current,
      total,
      selected,
      loading,
      list
    } = this.state;

    const selectProps = Object.assign(select, {disabled: disabled});

    return (
      <AutoComplete
        ref={search => this.$search_ = search}
        {...selectProps}
        value={value}
        dropdownClassName="j-kit-minSearch"
        optionLabelProp="label"
        filterOption={(value, option) => {
        if (option.key === 'miniPager') {
          return true;
        } else {
          return option.key == value || option.props.children.toLocaleLowerCase().indexOf(value) > -1;
        }
      }}
        onSelect={(value, option) => {
        if (value === 'miniPager') {
          setTimeout(() => {
            this.$search_._reactInternalInstance._renderedComponent._renderedComponent._instance.setOpenState(true);
          }, 100);
          return;
        }
        this.$val_ = value;
        setTimeout(() => {
          this.setState({value: option.props.children, selected: true});
        }, 100);
        onChange(value, option, list.find(item => item[rowKey] == value));
      }}
        onChange={(value) => {
        if (value === undefined) {
          this.setState({current: 1, value: undefined, selected: false});
          this.handleSearch({page: 1, keyword: ''});

          onChange('')
        }else if (this.$val_ !== value && value !== 'miniPager') {
          this.setState({current: 1, value: value, selected: false});
          this.handleSearch({page: 1, keyword: value});
        }
      }}>
        {list.map(item => (
          <AutoComplete.Option key={item[rowKey]} label={item[rowKey] + ''}>{item[labelKey]}</AutoComplete.Option>
        ))}
        <AutoComplete.Option key="miniPager" label={keyword}>
          {total !== undefined && !selected && (<Pagination
            size="small"
            current={current}
            total={total}
            showLessItems={true}
            onChange={(page) => {
            this.setState({current: page, selected: false});
            this.handleSearch({
              page: page,
              keyword: keyword
            })
          }}
            showTotal={() => loading
            ? (<Icon type="loading"/>)
            : `共匹配 ${total} 条`}
          />)}
        </AutoComplete.Option>
      </AutoComplete>
    )
  }
}
