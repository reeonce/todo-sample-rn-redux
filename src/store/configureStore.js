import { createStore } from 'redux';
import reducers from '../reducers';

export default configureStore = function () {
  let todos = {
    today: [{ text: "Test 1", id: 1, completed: true }, { text: "Test 2", id: 2}],
    tomorrow: [{ text: "T3", id: 3, completed: true }, { text: "T4", id: 4, completed: false }, { text: "T5", id: 5, completed: false }]
  };
  return createStore(reducers, { todos: todos, visibilityFilter: "showAll"});
};
