import './index.less';

const context = require.context('./', true, /\w+\/\w+\.(jsx|js)$/);

const exportObj = {};
context
  .keys()
  .forEach(key => {
    Object.assign(exportObj, context(key));
  });

export default exportObj;
