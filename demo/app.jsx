import React from "react";
import ReactDOM from 'react-dom';
import damo from 'damo-core';

import {errorReducer} from '../lib';

import Root from './scenes';

import './app.less';

damo.init();

damo.autoLoadRoutes(require.context('./scenes', true, /index\.jsx$/));

Root.childRoutes = damo.$$routes__;

damo.bootstrap(document.getElementById('container'))
