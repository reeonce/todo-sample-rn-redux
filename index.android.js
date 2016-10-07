/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { createStore } from 'redux';
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';

import TodoApp from './src/components/TodoApp';
import reducers from './src/reducers';


let todos = {
  today: [{ text: "cook dinner", id: 1 }],
  tomorrow: [{ text: "clean bathroom", id: 2 }, { text: "clean bedroom", id: 3 }]
};
const store = createStore(reducers, { todos: todos, visibilityFilter: "showAll"});

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
