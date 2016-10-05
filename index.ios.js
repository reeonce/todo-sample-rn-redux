/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import TodoApp from './src/TodoApp';

class todo extends Component {
  render() {
    return (
      <TodoApp />
    );
  }
}

AppRegistry.registerComponent('todo', () => todo);
