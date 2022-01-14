const initialState = {
  status: 'idle',
  data: [],
  error: null,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/todosLoading':
      return {
        ...state,
        status: 'loading',
      };

    case 'todos/todosLoaded':
      return {
        ...state,
        data: action.payload,
        status: 'loaded',
      };

    case 'todos/todosError':
      return {
        ...state,
        error: action.payload,
        status: 'error',
      };

    case 'todos/toggleTodoComplete':
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};
