import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import Breadcrumb from 'antd/lib/breadcrumb';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import NavLink from '../navLink';

export class SceneComponent extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    table: PropTypes.object,
    breadcrumb: PropTypes.object.isRequired,
    metric: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
    query: PropTypes.object.isRequired,
    search: PropTypes.object,
    autoAdapt: PropTypes.bool.isRequired,
    scroll: PropTypes.bool,

    doFetch: PropTypes.func.isRequired
  };

  static contextTypes = {
    adaptPage: PropTypes.object.isRequired,
    breadCrumb: PropTypes.object.isRequired
  }

  static defaultProps = {
    autoAdapt: true,
    scroll: false,
    table: {}
  }

  constructor(props){
    super(props);

    const search = props.search || {};
    this.state = {
      scrollLimit: true,
      focusSearch: false,
      keyword: search.keyword || 'keyword',
      page: search.page || 'pageNum',
      pageSize: search.pageSize || 'pageSize'
    }
  }

  updateDimensions(value) {
    this.setState({scrollLimit: value})
  }

  toFocusSearch(value) {
    this.setState({focusSearch: value})
  }

  componentDidMount() {
    if(this.props.autoAdapt){
      this
        .context
        .adaptPage
        .autoAdapt(ReactDOM.findDOMNode(this.refs.content), (size, screenHeight) => {
          // #! 重新设置pageSize和调整高度
          const pageSize = Math.ceil(screenHeight / 50 - 4);
          const _pageSize = parseInt(this.props.query[this.state.pageSize]);
          const start = _pageSize - 1;
          const end = _pageSize + 1;
          if (this.props.list.length === _pageSize && pageSize > 1 && (pageSize > end || pageSize < start)) {
            this
              .props
              .doFetch({
                pageSize: pageSize - 1
              })
            if(this.props.scroll){
              this.updateDimensions(screenHeight + 'px');
            }
          }else if(this.props.scroll){
            this.updateDimensions(size + 'px');
          }
        })
    }
  }

  search(keyword) {
    clearTimeout(this.$searchTimer_);
    this.$searchTimer_ = setTimeout(() => {
      if(this.props.search){
        this
        .props
        .doFetch({[this.state.page]: 1, [this.state.keyword]: keyword})
      }else{
        this
        .props
        .doFetch({[this.state.page]: 1})
      }
    }, 200);
  }

  render() {
    const scroll = this.props.scroll && {
      x: true,
      y: this.state.scrollLimit
    } || undefined;
    const query = this.props.query;
    const search = this.props.search;
    const keyword = search && query[this.state.keyword] || ''
    return (
      <div className={"j-scene j-scene-" + this.props.name}>
        <Breadcrumb>
          {this
            .props
            .breadcrumb
            .navs
            .map((item, index) => {
              if (item.link) {
                return (
                  <Breadcrumb.Item key={index}>
                    <a
                      onClick={() => {
                      this
                        .context
                        .breadCrumb
                        .link(item.link);
                    }}>
                      {item.text}
                    </a>
                  </Breadcrumb.Item>
                )
              } else {
                return (
                  <Breadcrumb.Item key={index}>
                    {item.text}
                  </Breadcrumb.Item>
                );
              }
            })}
          <Breadcrumb.Item className="j-kit-elem-breadcrumb-extra">
            <div className="ant-search-input-wrapper">
              {(search && !search.noSearch) && (<Input.Group
                className={this.state.focusSearch
                ? 'ant-search-input ant-search-input-focus'
                : 'ant-search-input'}>
                <Input
                  placeholder={search.placeholder}
                  ref="searchInput"
                  defaultValue={keyword}
                  onChange={(e) => this.search(e.target.value)}
                  onFocus={(e) => this.toFocusSearch(e.target === document.activeElement)}
                  onBlur={(e) => this.toFocusSearch(false)}
                  onPressEnter={(e) => this.search(e.target.value)}/>
                <div className="ant-input-group-wrap">
                  <Button
                    icon="search"
                    className={keyword.trim()
                    ? 'ant-search-btn ant-search-btn-noempty'
                    : 'ant-search-btn'}
                    onClick={(e) => this.search(this.refs.searchInput.refs.input.value)}/>
                </div>
              </Input.Group>)}
            </div>
            {this.props.breadcrumb.links && <NavLink links={this.props.breadcrumb.links}/>}
            <Button type="ghost" size="small" onClick={() => this.props.doFetch()}><Icon type="reload"/>{this.props.refreshText || '刷新'}</Button>
          </Breadcrumb.Item>
        </Breadcrumb>
        {this.props.children}
        <Table
          className="j-kit-table"
          ref="content"
          {...this.props.table}
          dataSource={this.props.list}
          pagination={Object.assign({
          current: parseInt(query[this.state.page]),
          pageSize: parseInt(query[this.state.pageSize]),
          total: this.props.metric.total
        }, this.props.pagination)}
          loading={this.props.metric.loading}
          onChange={(pager, filters, sorter) => {
          this
            .props
            .doFetch(Object.assign({
              [this.state.page]: pager.current, 
              sortField: sorter.field,
              sortOrder: sorter.order
            }, filters))
        }}
          scroll={scroll}/>
      </div>
    );
  }
}
