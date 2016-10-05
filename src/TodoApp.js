import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  Navigator,
  TouchableOpacity,
  View
} from 'react-native';

import TodoList from './components/TodoList';

export default class TodoApp extends Component {
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
    return (
      <Navigator
        sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight}}
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            <StatusBar></StatusBar>
            <TodoList todos={this.state.todos}></TodoList>
          </View>
        }
        navigationBar={ <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} /> }
      />
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    return null;
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 0,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 0,
  },
});
