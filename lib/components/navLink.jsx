import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Menu from 'antd/lib/menu';
import Button from 'antd/lib/button';
import Dropdown from 'antd/lib/dropdown';
import Icon from 'antd/lib/icon';

export default class NavLink extends Component {
  static propsTypes = {
    links: PropTypes.array.isRequired,
    menus: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    data: PropTypes.any.isRequired,
    menuLabel: PropTypes.any.isRequired
  }

  static defaultProps = {
    links: [],
    menus: []
  }

  constructor(props) {
    super(props);
    this.state = {
      actions: props
        .links
        .concat(props.menus.map(item => {
          item.isMenu = true;
          return item
        }))
    }
  }

  setActions(key, flag) {
    const newActions = [].concat(this.state.actions);
    const item = newActions.find(action => action.key === key);
    if (item.disabled !== undefined) {
      item.disabled = flag;
    } else if (item.loading !== undefined) {
      item.loading = flag;
    }
    this.setState({actions: newActions});
    return item;
  }

  getActions() {
    const links = [];
    const menus = [];
    this
      .state
      .actions
      .forEach(item => {
        if (item.isMenu) {
          menus.push(item);
        } else {
          links.push(item);
        }
      });

    return {links, menus};
  }

  render() {
    const handleClick = (e) => {
      const key = e.key;
      const cancelCallback = () => {
        this.setActions(key, false);
      }

      const item = this.setActions(key, true);
      const action = item.action || this.props.onClick;
      if (!action(e, this.props.data, cancelCallback)) {
        cancelCallback();
      }
    };
    const {links, menus} = this.getActions();
    const menu = (
      <Menu onClick={(e) => handleClick(e)}>
        {menus.map((item, index) => {
          return (
            <Menu.Item key={item.key || index} disabled={item.disabled} loading={item.loading}>
              <a>{item.name}</a>
            </Menu.Item>
          )
        })}
      </Menu>
    );
    return (
      <div className="antd-nav-link">
        {links.map((item, index) => <Button
          size={
            item.size
          ? item.size
          : 'small'
          }
          type={item.type
          ? item.type
          : 'button'}
          className={item.type
          ? ''
          : 'ant-btn-link'}
          key={item.key || index}
          disabled={item.disabled}
          loading={item.loading}
          onClick={(e) => handleClick(item)}>{item.href
            ? (
              <a href={item.href} target={item.target || '_blank'}>{item.name}</a>
            )
            : (
              <span>{item.name}</span>
            )}</Button>)}
        {links.length && menus.length
          ? (
            <span className="ant-divider"></span>
          )
          : null}
        {menus.length
          ? this.props.menuLabel
            ? (
              <Dropdown.Button overlay={menu}>
                {this.props.menuLabel}
              </Dropdown.Button>
            )
            : (
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link ant-btn-link">
                  更多
                  <Icon type="down"/>
                </a>
              </Dropdown>
            )
          : null}
      </div>
    )
  }
}
