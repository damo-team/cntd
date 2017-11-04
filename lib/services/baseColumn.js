import {ucfirst, toCamlCase} from 'damo-core';

export class BaseColumn {
  set columns(cols) {
    this.$columns_ = cols;
  }

  clear() {
    this.$renderColumns_ = null;
  }

  get columns() {
    if (this.$renderColumns_) {
      return this.$renderColumns_;
    } else {
      const tableColumns = this.$columns_ || this.getColumns();
      return (this.$renderColumns_ = tableColumns.map(item => {
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
      }))
    }
  }
}
