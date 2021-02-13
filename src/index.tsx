// Libraries React
import React from 'react';
import * as ReactDOM from 'react-dom';
// Libraries Redux
import { Provider } from 'react-redux';
import { configureStore } from './Redux/setupStore';
// Modules
import Layout from './Modules/Layout/LayoutSecene';

const store = configureStore();

ReactDOM.render(
  <Provider store={store as any}>
    <Layout />
  </Provider>, document.getElementById('root')
);
