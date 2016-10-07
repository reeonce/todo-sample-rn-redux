import { bindActionCreators } from 'redux';
import MainScene from '../components/MainScene';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(MainScene);
