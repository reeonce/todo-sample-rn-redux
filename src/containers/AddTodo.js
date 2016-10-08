import { bindActionCreators } from 'redux';
import React, { PropTypes, Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'

import { addTodo } from '../actions'

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }

  _onPressButton() {
    if (!this.state.text) {
      return;
    }
    var { onSubmit } = this.props;
    onSubmit(this.state.text);
    this.setState({text: ""});
  }

  render() {
    return (
      <View style={styles.form}>
        <TextInput
          style={styles.text}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableHighlight style={styles.add} onPress={this._onPressButton.bind(this)}>
          <Text style={styles.addText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class AddTodo extends Component {
  _onSubmit(text) {
    var { onAddTodo } = this.props;
    onAddTodo(text);
  }

  render() {
    return (
      <AddForm onSubmit={this._onSubmit.bind(this)} />
    );
  }
}

AddTodo.PropTypes = {
  onAddTodo: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  form: {
    height: 40,
    flexDirection: 'row',
  },
  text: {
    padding: 10,
    flex: 1,
  },
  add: {
    width: 60,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state, ownProps) {
  return {};
}


function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: (text) => {
      dispatch(addTodo(text));
    }
  };
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default AddTodo
