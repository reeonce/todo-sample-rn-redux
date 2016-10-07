import { bindActionCreators } from 'redux';
import React, { PropTypes, Component } from 'react'
import {
  View,
  Text,
  TextInput,
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
      <View>
        <TextInput
          style={{height: 40}}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
        />
      <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <Text>Add</Text>
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
