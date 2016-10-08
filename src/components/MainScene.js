import React, { Component } from 'react';
import {
  View
} from 'react-native';

import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';
import FilterLink from '../containers/FilterLink';

export default class MainScene extends Component {
  constructor(props) {
    super(props);
    let todos = {
      today: [{ text: "cook dinner" }],
      tomorrow: [{ text: "clean bathroom" }, { text: "clean bedroom" }]
    };

    this.state = {
      todos: todos
    };
  }

  render() {
    var todos = this.props.todos;

    return (
      <View style={{flex: 1}}>
        <AddTodo />
        <VisibleTodoList style={{flex: 1}} />
        <FilterLink />
      </View>
    );
  }
}
