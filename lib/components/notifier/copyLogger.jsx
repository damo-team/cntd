import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clipboard from 'clipboard';
import message from 'antd/lib/message';
import Button from 'antd/lib/button';

export default class CopyLogger extends Component{
  componentDidMount(){
    /**
     * copy:
     * see: https://clipboardjs.com/
     */
    this.$clipboard = new Clipboard(ReactDOM.findDOMNode(this.refs.trigger));
    
    this.$clipboard.on('success', (e) => {
      message.info('复制成功')
      e.clearSelection();
    });
  }

  componentWillUnmount(){
    this.$clipboard.destroy();
  }
  
  render() {
    const inlineStyle = {
      marginRight: '40px',
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      wordBreak: 'break-all',
      lineHeight: '22px'
    }
    return (
      <div style={{whiteSpace: 'nowrap'}}>
        <Button 
          style={{float: 'right'}}
          ref="trigger" 
          size="small" 
          type="ghost" 
          data-clipboard-text={this.props.rid}
        >复制</Button>
        <span style={inlineStyle}>{this.props.message}</span>
      </div>
    )
  }
}
