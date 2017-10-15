import {ucfirst, toCamlCase} from 'damo-core';

export default class BaseColumn{
  set columns(cols){
    this.$columns_ = cols;
  }

  get columns() {
    const tableColumns = this.$columns_ || this.getColumns();
    return tableColumns.map(item => {
      if (!item.render) {
        item.render = (text, record) => {
          const funcName = 'render' + ucfirst(toCamlCase(item.dataIndex));
          if (this[funcName]) {
            return this[funcName](text, record);
          } else {
            return text;
          }
        }
      }
      return item;
    })
  }
}
