import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Todo extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.todo.text}</Text>
      </View>
    );
  }
}