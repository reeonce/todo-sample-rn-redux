import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Todo extends Component {
  render() {
    var { todo } = this.props;
    return (
      <View style={styles.row}>
        <Text style={todo.completed ? styles.completed : styles.uncompleted}>{todo.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  completed: {
    color: 'gray',
  },
  uncompleted: {
    color: '#FFFFCF',
  },
})
