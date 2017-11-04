import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';
import Table from 'antd/lib/table';
import {DataSet} from '../../../lib';

export default class Dataset extends Component {
  static routePath = '/dataset';

  render() {
    return (
      <div>
        <DataSet
          actions={{
          getUser: {
            uri: 'https://api.github.com/users/baqian',
            method: 'get',
            immediate: true,
            success: res => {
              return {dataSource: [res]}
            }
          }
        }}
          attrs={{
          dataSource: {
            value: [
              {
                login: 'a'
              }
            ]
          },
          columns: {
            value: [
              {
                title: 'name',
                dataIndex: 'login'
              }
            ]
          }
        }}>
          <Table rowKey="login"/>
        </DataSet>
      </div>
    );
  }
};
