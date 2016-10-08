/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';

import TodoApp from './src/components/TodoApp';
import configureStore from './src/store/configureStore'

const store = configureStore();

class todo extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('todo', () => todo);
