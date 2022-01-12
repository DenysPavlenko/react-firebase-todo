import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todos/actions";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { enteties } = useSelector((store) => store.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({ title, done: false, color: "", id: enteties.length + 1 })
    );
    setTitle("");
  };

  return (
    <>
      <h2>Add todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </>
  );
};

export default AddTodo;
