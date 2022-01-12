import './app.css';
import { useDispatch } from 'react-redux';
import { allTodosDone, deleteDoneTodos } from './store/todos/actions';
import Todos from './components/todos/todos';
import AddTodo from './components/add-todo/add-todo';
import ColorsFilter from './components/colors-filter/colors-filter';
import StatusFilter from './components/status-filter/status-filter';

export default function App() {
  const dispatch = useDispatch();
  const allDoneHandler = () => dispatch(allTodosDone());
  const deleteDoneHandler = () => dispatch(deleteDoneTodos());

  return (
    <div className="App">
      <AddTodo />
      <br />
      <Todos />
      <br />
      <p>Actions</p>
      <button onClick={allDoneHandler}>Mark all done</button>
      <button onClick={deleteDoneHandler}>Delete done todos</button>
      <br />
      <br />
      <ColorsFilter />
      <br />
      <StatusFilter />
    </div>
  );
}
