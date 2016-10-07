import React, { Component, PropTypes } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class Link extends Component {
  _onPressButton() {
    var { filter, onFilter } = this.props;
    onFilter(filter === "showAll" ? "showCompleted" : "showAll");
  }

  render() {
    var { filter } = this.props;
    return (
      <TouchableHighlight
        style={filter === "showAll" ? styles.off : styles.on}
        onPress={this._onPressButton.bind(this)}>
        <Text>Show Completed</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  off: {
    backgroundColor: 'transparent',
  },
  on: {
    backgroundColor: 'white',
  }
});
