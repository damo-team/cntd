import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';
import {SideBar} from '../../lib';
import Layout from 'antd/lib/layout';
import 'antd/dist/antd.less';
import './index.less';

export default class Root extends Component {
  static routePath = '/';

  render() {
    return (
      <Layout>
        <Layout.Sider width={250}>
          <SideBar
            theme="dark"
            itemKey="path"
            currentPath={this.props.location.query.path || this.props.location.pathname}
            menus={Root.childRoutes}
            openKeys={[]}
            inlineIndent={16}
            heading={'组件列表'}/>
        </Layout.Sider>
        <Layout.Content>{this.props.children}</Layout.Content>
      </Layout>
    );
  }
};
