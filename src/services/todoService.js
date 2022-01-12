let todos = [
  {
    id: 1,
    title: "buy bread",
    done: false,
    color: ""
  },
  {
    id: 2,
    title: "buy butter",
    done: false,
    color: ""
  }
];

export default class TodosService {
  getTodos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(todos);
      }, 1000);
    });
  }

  addTodo(todo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTodo = { ...todo, id: Math.random() };
        todos = [...todos, newTodo];
        resolve(newTodo);
      }, 1000);
    });
  }

  toggleTodoDone(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        todos = todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        resolve(todos);
      }, 1000);
    });
  }

  allTodosDone() {
    return new Promise((resolve) => {
      setTimeout(() => {
        todos = todos.map((todo) => ({ ...todo, done: true }));
        resolve(todos);
      }, 1000);
    });
  }

  deleteTodo(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        todos = todos.filter((todo) => todo.id !== id);
        resolve(todos);
      }, 1000);
    });
  }

  deleteDoneTodos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        todos = todos.filter((todo) => !todo.done);
        resolve(todos);
      }, 1000);
    });
  }
}
