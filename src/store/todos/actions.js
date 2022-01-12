import TodoService from "../../services/todoService";
const todoService = new TodoService();

export const todosLoading = () => ({ type: "todos/todoLoading" });

export const todosLoaded = (data) => ({
  type: "todos/todoLoaded",
  payload: data
});

export const todosError = (error) => ({
  type: "todos/todoError",
  payload: error
});

export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch(todosLoading());
    const data = await todoService.getTodos();
    dispatch(todosLoaded(data));
  } catch (error) {
    dispatch(todosError(error.message));
  }
};

export const toggleTodoDone = (id) => (dispatch) => {
  dispatch({ type: "todos/toggleTodoDone", payload: id });
  todoService.toggleTodoDone(id);
};

export const changeTodoColor = (id, color) => (dispatch) => {
  dispatch({ type: "todos/changeTodoColor", payload: { id, color } });
  // todoService.toggleTodoDone(id);
};

export const allTodosDone = () => (dispatch) => {
  dispatch({ type: "todos/allDone" });
  todoService.allTodosDone();
};

const updateTodoId = (oldId, newId) => ({
  type: "todos/updateTodoId",
  payload: { oldId, newId }
});

export const addTodo = (todo) => async (dispatch) => {
  dispatch({ type: "todos/addTodo", payload: todo });
  const responseTodo = await todoService.addTodo(todo);
  dispatch(updateTodoId(todo.id, responseTodo.id));
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({ type: "todos/deleteTodo", payload: id });
  todoService.deleteTodo(id);
};

export const deleteDoneTodos = () => (dispatch) => {
  dispatch({ type: "todos/deleteDoneTodos" });
  todoService.deleteDoneTodos();
};
