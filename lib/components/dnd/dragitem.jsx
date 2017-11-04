import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {DragSource} from 'react-dnd';

@DragSource((props) => {
  return props.type
}, {
  beginDrag: props => {
    props.doAction(props.type, props.data);
    return {data: props.data};
  },
  endDrag: (props, monitor) => {
    props.doAction(props.type, null, monitor.didDrop());
  }
}, (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
})
export default class DragItem extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    doAction: PropTypes.func.isRequired
  }
  static defaultProps = {
    doAction: noop => noop
  }
  render() {
    const className = this.props.isDragging ? 'j-kit-drag' : ''
    return this
      .props
      .connectDragSource(
        <div className={className}>{this.props.children}</div>
      )
  }
}
