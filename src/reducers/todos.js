const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      var added = state.added === undefined ? [todo(undefined, action)] :
          [...state.added,  todo(undefined, action)];
      return Object.assign({}, state, {
        added: added
      });
    case 'TOGGLE_TODO':
      var section;
      for (var sec in state) {
        state[sec].forEach(function(t) {
          if (t.id === action.id) {
            section = sec;
          }
        });
      }
      var newState = {};
      newState[section] = state[section].map(t => todo(t, action));
      return Object.assign({}, state, newState);
    default:
      return state
  }
}

export default todos
