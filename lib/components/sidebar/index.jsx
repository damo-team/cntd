import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Menu from 'antd/lib/menu';
import './index.less';
/**
 * + **基础BFT（广度遍历）算法**
 *
 * 1. 先遍历当前集合且调用其元素，再遍历其集合元素的子集
 * 2. 每个元素调用时，传递参数值opt
 * 3. 每个元素的调用返回值newOpt传给他的所有子集元素调用
 */
function BFS(menus, callback, parentMenu = []) {
  let result;
  menus.every(menu => {
    if (result = callback(menu, parentMenu)) {
      return false;
    } else {
      let children = menu.children || menu.childRoutes;
      if (children && (result = BFS(children, callback, parentMenu.concat(menu)))) {
        return false;
      } else {
        return true;
      }
    }
  });
  return result;
}
const LOCAL_MENU_KEY = 'openMenu';
const LOCAL_STRETCH_KEY = 'stretchMenu';

export class SideBar extends Component {
  static BFS = BFS;

  static propsTypes = {
    currentPath: PropTypes.string.isRequired,
    heading: PropTypes.any,
    menus: PropTypes.array.isRequired,
    openKeys: PropTypes.array,
    selectedKeys: PropTypes.array,
    hasStretch: PropTypes.bool,
    theme: PropTypes.string,
    onStretch: PropTypes.func,
    onClick: PropTypes.func,
    itemKey: PropTypes.string
  }

  static defaultProps = {
    itemKey: 'key',
    menus: [],
    openKeys: [],
    hasStretch: false,
    theme: 'light',
    heading: (
      <div className="j-kit-elem-heading">
        <i className="iconfont">&#xe624;</i>
      </div>
    )
  }

  constructor(props, context) {
    super(props);
    const pathname = props.currentPath;
    const openKeys = [];
    const selectedKeys = this.props.selectedKeys || BFS(this.props.menus, (menu, parentMenu) => {
      if (pathname === menu.path) {
        parentMenu.forEach(item => openKeys.push(item[props.itemKey]));
        return [menu.url || menu.path];
      }
    }) || ['introduction'];

    this.state = {
      hasStretch: this.getLocalItem(LOCAL_STRETCH_KEY, this.props.hasStretch),
      openKeys: openKeys.length
        ? openKeys
        : this.getLocalItem(LOCAL_MENU_KEY, this.props.openKeys),
      selectedKeys: selectedKeys,
      menus: this.renderMenuItem(this.props.menus)
    }
  }

  getLocalItem(key, defaultOpenKeys) {
    let openKeys;
    try {
      openKeys = JSON.parse(sessionStorage.getItem(key)) || defaultOpenKeys;
    } catch (e) {
      openKeys = defaultOpenKeys;
    }
    return openKeys;
  }

  setLocalItem(key, openKeys) {
    try {
      sessionStorage.setItem(key, JSON.stringify(openKeys));
    } catch (e) {}
  }

  componentWillReceiveProps(nextProps) {
    let menus = this.props.menus;
    if (menus !== nextProps.menus) {
      menus = nextProps.menus;
      this.setState({
        menus: this.renderMenuItem(menus)
      });
    }

    if (this.props.hasStretch !== nextProps.hasStretch) {
      this.setState({hasStretch: nextProps.hasStretch});
      this.setLocalItem(LOCAL_STRETCH_KEY, nextProps.hasStretch);
    } else if (this.props.selectedKeys !== nextProps.selectedKeys) {
      this.setState({selectedKeys: nextProps.selectedKeys});
    } else if (this.props.currentPath !== nextProps.currentPath) {
      const openKeys = [];
      const selectedKeys = this.props.selectedKeys || BFS(menus, (menu, parentMenu) => {
        if (nextProps.currentPath === menu.path) {
          parentMenu.forEach(item => openKeys.push(item[
            [this.props.itemKey]
          ]));
          return [menu.url || menu.path];
        }
      }) || ['introduction'];

      this.setState({selectedKeys: selectedKeys, openKeys: openKeys});
    }
  }

  render() {
    return (
      <div
        className={`j-kit-sidebar ${this.state.hasStretch
        ? 'j-kit-sidebar-stretch'
        : ''}`}>
        <h3 onClick={(e) => this.handleStretch()}>
          {this.props.heading}
        </h3>
        <Menu
          inlineIndent={this.props.inlineIndent}
          theme={this.props.theme}
          selectedKeys={this.state.selectedKeys}
          onOpenChange={(openKeys) => {
            this.setState({openKeys: openKeys});
            this.setLocalItem(LOCAL_MENU_KEY, openKeys);
          }}
          defaultOpenKeys={this.state.openKeys}
          className="j-kit-elem-left-nav"
          mode={`${this.state.hasStretch
          ? 'vertical'
          : 'inline'}`}>
          {this.state.menus}
        </Menu>
      </div>
    );
  }

  handleClick(menu, isSubMenu) {
    if (menu.path) {
      this.setState({
        selectedKeys: [menu.path]
      })
    }
    this.props.onClick && this
      .props
      .onClick(menu, isSubMenu);
  }

  handleStretch() {
    const hasStretch = !this.state.hasStretch;
    this.setState({hasStretch: hasStretch});
    this.setLocalItem(LOCAL_STRETCH_KEY, hasStretch);
    this.props.onStretch && this
      .props
      .onStretch(hasStretch);
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
  renderMenuItem(menus) {
    return menus.map((menu, index) => {
      let children = menu.children || menu.childRoutes;
      if (children) {
        return (
          <Menu.SubMenu
            key={menu[this.props.itemKey]}
            title={(
            <span>
              {menu.icon}
              <span className="j-kit-elem-text">{menu.text || menu.name}</span>
            </span>
          )}
            onClick={(e) => this.handleClick(menu, true)}
            disabled={menu.disabled}>
            {this.renderMenuItem(children)}
          </Menu.SubMenu>
        )
      } else if (menu.url || menu.path) {
        return (
          <Menu.Item
            className={`${menu[
            this
              .props
              .itemKey
              .split('/')
              .join('_')
          ]}-wrap`}
            key={menu[this.props.itemKey]}
            disabled={menu.disabled}>
            <Link
              to={menu.url || menu.path}
              target={menu.target || ''}
              onClick={(e) => this.handleClick(menu)}>
              {menu.icon}
              <span className="j-kit-elem-text">{menu.text || menu.name}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <Menu.Item key={menu[this.props.itemKey]} disabled={menu.disabled}>
            <span>
              {menu.icon}
              <span className="j-kit-elem-text">{menu.text || menu.name}</span>
            </span>
          </Menu.Item>
        )
      }
    })
  }
}
