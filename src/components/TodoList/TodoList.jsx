import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// Store
import {
  fetchTodos,
  toggleTodoComplete,
  deleteTodo,
  addTodo,
} from 'store/todos/actions';
import { selectTodos } from 'store/todos/selectors';
// Components
import List from '@mui/material/List';
import TodoItem from 'components/TodoItem';
import TodoForm from 'components/TodoForm';

const TodoList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleTodoComplete = (id, completed) => {
    dispatch(toggleTodoComplete({ id, completed }));
  };

  const handleTodoDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleTodoAdd = (todo) => {
    dispatch(addTodo(todo));
  };

  const filteredTodos = todos?.data.filter(
    ({ listId }) => params.listId === listId
  );

  return (
    <>
      <List disablePadding sx={{ marginBottom: 4 }}>
        {filteredTodos.map(({ id, title, completed }) => (
          <TodoItem
            key={id}
            title={title}
            completed={completed}
            onCheck={(completed) => handleTodoComplete(id, completed)}
            onDelete={() => handleTodoDelete(id)}
          />
        ))}
      </List>
      <TodoForm onAdd={handleTodoAdd} />
    </>
  );
};

export default TodoList;
