const initialState = {
  status: 'idle',
  enteties: [],
  error: null,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/todoLoading':
      return {
        ...state,
        status: 'loading',
      };

    case 'todos/todoLoaded':
      return {
        ...state,
        enteties: action.payload,
        status: 'succeeded',
      };

    case 'todos/todoError':
      return {
        ...state,
        status: 'error',
        error: action.payload,
      };

    // case 'todos/toggleTodoDone':
    //   return {
    //     ...state,
    //     enteties: state.enteties.map((todo) =>
    //       todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    //     ),
    //   };

    case 'todos/allDone':
      return {
        ...state,
        enteties: state.enteties.map((todo) => ({ ...todo, done: true })),
      };

    case 'todos/changeTodoColor':
      const { id, color } = action.payload;
      return {
        ...state,
        enteties: state.enteties.map((todo) => {
          return todo.id === id ? { ...todo, color } : todo;
        }),
      };

    // case 'todos/deleteTodo':
    //   return {
    //     ...state,
    //     enteties: state.enteties.filter((todo) => todo.id !== action.payload),
    //   };

    case 'todos/deleteDoneTodos':
      return {
        ...state,
        enteties: state.enteties.filter((todo) => !todo.done),
      };

    default:
      return state;
  }
};
