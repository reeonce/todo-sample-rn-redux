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

import MainScene from '../containers/App'

export default class TodoApp extends Component {
  render() {
    return (
      <Navigator
        sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight}}
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            <StatusBar></StatusBar>
            <MainScene />
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
    backgroundColor: '#0033CC',
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
    textAlign: 'center',
  },
});
