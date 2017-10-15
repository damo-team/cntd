import AppModal from './components/appModal';
import NavLink from './components/navLink';
import SceneComponent from './components/sceneComponent';
import TagSearcher from './components/tagSearcher';
import DragItem from './components/dragItem';
import DropItem from './components/dropItem';
import SideBar from './components/sidebar';
import Search from './components/search';

import SceneSelector from './selectors/sceneSelector';

import BaseColumn from './services/baseColumn';
import Validator from './services/validator';
import AdaptPage from './services/adaptPage';
import BreadCrumb from './services/breadCrumb';


import hoistNonReactStatics from 'hoist-non-react-statics';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
const DnDContext = () => BaseComponent => {
  const Component =  DragDropContext(HTML5Backend)(BaseComponent);
  return hoistNonReactStatics(Component, BaseComponent);
}

import CopyLogger from './notifier/copyLogger';
import errorFetch from './notifier/errorFetch';
import errorReducer from './notifier/errorReducer';
export * from './notifier';

import './index.less';

export {
  AppModal,
  NavLink,
  SceneComponent,
  TagSearcher,
  DragItem,
  DropItem,
  DnDContext,
  SideBar,
  Search,

  SceneSelector,
  
  BaseColumn,
  Validator,
  AdaptPage,
  BreadCrumb,

  CopyLogger,
  errorFetch,
  errorReducer
}
