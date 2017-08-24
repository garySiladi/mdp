// @flow
import React from 'react';
import type { Node } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducers from './reducers';

type Props = {
  +children: Node,
}

const store = createStore(
  combinedReducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Store = ({ children }: Props) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default Store;
