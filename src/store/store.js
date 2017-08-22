// @flow
import React from 'react';
import type { Node } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducers from './reducers';

type Props = {
  +children: Node,
}

const store = createStore(combinedReducers);

const Store = ({ children }: Props) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default Store;
