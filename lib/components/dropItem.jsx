import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {DropTarget} from 'react-dnd';

@DropTarget((props) => {
  return props.types
}, {
  drop: (props, monitor, component) => {
    const type = monitor.getItemType();
    if(props.types.indexOf(type) > -1){
      props.doAction(type, monitor.getItem().data);
    }else{
      props.doAction(type);
    }
  }
}, (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
})
export default class DropItem extends Component {
  static propTypes = {
    types: PropTypes.array.isRequired,
    doAction: PropTypes.func.isRequired
  }
  render() {
    let className = this.props.canDrop ? 'j-kit-drop ' : ' ';
    className += this.props.isOver? 'j-kit-drop-over' : '';

    return this
      .props
      .connectDropTarget(
        <div className={className}>{this.props.children}</div>
      )
  }
}
