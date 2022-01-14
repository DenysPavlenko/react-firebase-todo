import * as todosApi from 'api/todosApi';

export const todosLoading = () => ({ type: 'todos/todosLoading' });

export const todosLoaded = (data) => ({
  type: 'todos/todosLoaded',
  payload: data,
});

export const todosError = (error) => ({
  type: 'todos/todosError',
  payload: error,
});

export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch(todosLoading());
    todosApi.onTodosSnapshot((todos) => {
      dispatch(todosLoaded(todos));
    });
  } catch (error) {
    dispatch(todosError(error.message));
  }
};

export const addTodo = (todo) => () => {
  todosApi.addTodo(todo);
};

export const deleteTodo = (id) => () => {
  todosApi.deleteTodo(id);
};

export const toggleTodoComplete =
  ({ id, completed }) =>
  () => {
    todosApi.toggleTodoComplete(id, completed);
  };
