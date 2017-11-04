import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'antd/lib/modal';
import cuid from 'cuid';

export class AppModal extends Component {
  static $callbacks_ = [];

  static enhance = (Modal) => {
    AppModal.Modal = Modal;
    Modal.open = AppModal.open;
  }

  static open = (config) => {
    config.key = config.key || cuid();
    AppModal.applyChange(config, 'add');
    return {
      closeModal() {
        AppModal.close(config)
      }
    }
  }

  static close = (key) => {
    AppModal.applyChange(key, 'delete');
  }

  static update = (config) => {
    AppModal.applyChange(config, 'update');
  }

  static applyChange = (config, operate) => {
    AppModal
      .$callbacks_
      .forEach(callback => callback(config, operate));
  }

  static handleChange = (callback) => {
    AppModal
      .$callbacks_
      .push(callback);
  }

  state = {}

  componentWillMount() {
    AppModal.handleChange((config, operate) => {
      switch (operate) {
        case 'add':
          config.onOk = this.getAction(config.onOk, config.key);
          config.onCancel = this.getAction(config.onCancel, config.key);
          if (config.visible === undefined) {
            config.visible = true;
          }
          this.setState({
            [config.key]: config
          });
          break;
        case 'update':
          this.setState({
            [config.key]: Object.assign({}, this.state[config.key], config)
          });
          break;
        case 'delete':
          // config === key
          if(Object(config) === config){
            delete this.state[config.key];
          }else{
            delete this.state[config];
          }
          this.setState(Object.assign({}, this.state));
          break;
        default:
          break;
      }
    });
  }

  getAction(actionFn, key) {
    const closeModal = () => {
      AppModal.close(key);
    };
    return () => {
      if (actionFn) {
        let ret;
        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();
          if (!ret) {
            closeModal();
          }
        }
        if (ret && ret.then) {
          AppModal.update({key: key, confirmLoading: true});
          ret.then(() => {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after
            // close. AppModal.update({   key: key,   confirmLoading: false });
            closeModal();
          }, () => {
            AppModal.update({key: key, confirmLoading: false});
          });
        }
      } else {
        closeModal();
      }
    }
  }

  render() {
    const state = this.state;
    const Dialog = AppModal.Modal;
    return (
      <div>
        {Object
          .keys(state)
          .map(key => {
            return (
              <Dialog {...state[key]}>
                <div className={`${state[key].prefixCls}-body-wrapper`}>{state[key].content}</div>
              </Dialog>
            )
          })
}
      </div>
    )
  }
}

AppModal.enhance(Modal);
