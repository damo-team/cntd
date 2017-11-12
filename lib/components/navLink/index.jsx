import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Menu from 'antd/lib/menu';
import Button from 'antd/lib/button';
import Dropdown from 'antd/lib/dropdown';
import Icon from 'antd/lib/icon';

export class NavLink extends React.PureComponent {
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

  state = {
    tick: + new Date().getTime()
  }

  setAction(key, flag) {
    let item;
    if (Object(key) === key) {
      item = key;
    } else {
      item = this
        .props
        .links
        .find(item => item.key === key) || this
        .props
        .menus
        .find(item => item.key === key);
    }

    if (item.propName) {
      item[item.propName] = flag;
    }

    this.setState({
      tick: + new Date().getTime()
    });

    return item;
  }

  handleClick(e) {
    const key = e.key;

    const item = this.setAction(key, true);
    const action = item.action || this.props.onClick;

    const cancelCallback = () => {
      this.setAction(item, false);
    }

    if (!action(e, this.props.data, cancelCallback)) {
      cancelCallback();
    }
  }

  render() {
    const handleClick = this
      .handleClick
      .bind(this);
    const {links, menus} = this.props;
    const menu = (
      <Menu onClick={(e) => handleClick(e)}>
        {menus.map((item, index) => {
          return (
            <Menu.Item
              key={item.key || index}
              disabled={item.disabled}
              loading={item.loading}>
              <a>{item.name}</a>
            </Menu.Item>
          )
        })}
      </Menu>
    );
    return (
      <div className="antd-nav-link">
        {links.map((item, index) => <Button
          size={item.size
          ? item.size
          : 'small'}
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
