import React, { Component } from 'react';
import { AppRegistry, ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Todo from './Todo';
// import { connect } from 'react-redux'
//
// @connect(state => ({
//   todos: state.todos
// }


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({
      sectionHeaderHasChanged: this._sectionHeaderHasChanged,
      rowHasChanged: this._rowHasChanged,
    });
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(props.todos)
    };
  }

  _sectionHeaderHasChanged(oldSection, newSection) {
    return oldSection !== newSection;
  }

  _rowHasChanged(oldRow, newRow) {
    return oldRow !== newRow;
  }

  _renderRow(rowData, sectionID, rowID) {
    console.log(rowData);
    return (
      <View style={styles.row}>
        <Todo todo={rowData}>
        </Todo>
      </View>
    );
  }

  _renderSectionHeader(data, sectionId) {
    var text;
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{sectionId}</Text>
      </View>
    );
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    var style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={"SEP_" + sectionID + "_" + rowID}  style={style}/>
    );
  }

  render() {
    return (
      <ListView
        ref="listView"
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSectionHeader={this._renderSectionHeader}
        renderSeparator={this._renderSeparator}
      />
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginHorizontal: 10,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
  sectionHeader: {
    backgroundColor: '#48D1CC'
  },
  sectionHeaderText: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 16,
    color: 'white',
    paddingLeft: 10
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 16
  },
  boldText: {
    fontFamily: 'AvenirNext-Bold',
  },
});
