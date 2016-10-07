import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter='SHOW_ALL') => {
  switch (filter) {
    case 'showAll':
      return todos
    case 'showCompleted':
      var fTodos = {};
      for (var sec in todos) {
        fTodos[sec] = todos[sec].filter(t => t.completed);
      }
      return fTodos; 
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
