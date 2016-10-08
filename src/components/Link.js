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
    var text = filter === "showAll" ? "Show Completed" : "Show All";
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this._onPressButton.bind(this)}>
        <Text>{text}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
