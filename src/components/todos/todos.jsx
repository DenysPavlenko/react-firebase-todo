import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTodos,
  toggleTodoDone,
  changeTodoColor,
  deleteTodo,
} from '../../store/todos/actions';
import { selectTodos, selectFilteredTodos } from '../../store/todos/selectors';

import TodoItem from '../todo-item/todo-item';

const Todos = () => {
  const filteredTodos = useSelector(selectFilteredTodos);
  const { status } = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleTodoTitleClick = (id) => dispatch(toggleTodoDone(id));
  const handleColorChange = (id, color) => dispatch(changeTodoColor(id, color));
  const handleDelete = (id) => dispatch(deleteTodo(id));

  const renderTodos = () => {
    if (!filteredTodos.length) {
      return <li>No items to display</li>;
    }

    return filteredTodos.map(({ id, title, done, color }) => (
      <TodoItem
        onTitleClick={handleTodoTitleClick.bind(null, id)}
        onColorChange={(e) => handleColorChange(id, e.target.value)}
        onDelete={handleDelete.bind(null, id)}
        key={id}
        title={title}
        done={done}
        color={color}
      />
    ));
  };

  return (
    <ul>
      {status === 'loading' && <p>...loading</p>}
      {status === 'succeeded' && renderTodos()}
    </ul>
  );
};

export default Todos;
