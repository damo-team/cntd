import hoistNonReactStatics from 'hoist-non-react-statics';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import DragItem from './dragItem';
import DropItem from './dropItem';

const DnDContext = () => BaseComponent => {
  const Component =  DragDropContext(HTML5Backend)(BaseComponent);
  return hoistNonReactStatics(Component, BaseComponent);
}

export {
    DragItem,
    DropItem,
    DnDContext
}