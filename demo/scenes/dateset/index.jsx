import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';
import Table from 'antd/lib/table';
import {DataSet, schemaParser, CustomForm} from '../../../lib';

console.log(schemaParser(Table));
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
            success: (res, setState) => {
              return setState({dataSource: [res]})
            }
          }
        }}
          attrs={{
          dataSource: {
            value: [
              {
                login: 'hello'
              }
            ]
          },
          columns: {
            schema: {
              type: 'object',
              properties: {
                login: {
                  title: 'name',
                  type: 'string',
                  default: 'hello'
                },
                operator: {
                  title: '操作',
                  actions: [{
                    action: 'getUser',
                    title: '获取用户',
                    modal: true
                  }, {
                    name: 'getUser1',
                    action: function(){
                      alert(1);
                    }
                  }]
                }
              }
            },
            format: 'tableColumn'
          }
        }}>
          <Table rowKey="login"/>
        </DataSet>
        <DataSet
          attrs={{
          options: {
            value: [{
              type: 'string',
              name: 'title',
              title: '标题'
            }, {
              type: 'number',
              name: 'count',
              title: '总数'
            }]
          }
        }}>
          <CustomForm rowKey="id"/>
        </DataSet>
      </div>
    );
  }
};
