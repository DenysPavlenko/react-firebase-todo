import FirebaseService from '../../services/firebaseService';
const firebaseService = new FirebaseService();

export const todosLoading = () => ({ type: 'todos/todoLoading' });

export const todosLoaded = (data) => ({
  type: 'todos/todoLoaded',
  payload: data,
});

export const todosError = (error) => ({
  type: 'todos/todoError',
  payload: error,
});

export const fetchTodos = () => (dispatch) => {
  try {
    dispatch(todosLoading());
    firebaseService.getTodos((todos) => {
      dispatch(todosLoaded(todos));
    });
  } catch (error) {
    dispatch(todosError(error.message));
  }
};

export const addTodo = (todo) => () => {
  firebaseService.addTodo(todo);
};

export const deleteTodo = (id) => () => {
  firebaseService.deleteTodo(id);
};

export const toggleTodoDone = (id) => () => {
  firebaseService.toggleTodoDone(id);
};

export const deleteDoneTodos = () => (dispatch) => {
  dispatch({ type: 'todos/deleteDoneTodos' });
  // todoService.deleteDoneTodos();
};

export const changeTodoColor = (id, color) => (dispatch) => {
  dispatch({ type: 'todos/changeTodoColor', payload: { id, color } });
  // todoService.toggleTodoDone(id);
};

export const allTodosDone = () => (dispatch) => {
  dispatch({ type: 'todos/allDone' });
  // todoService.allTodosDone();
};
