import { colors, capitalize } from "../../store/todos-filters/colors";

const TodoItem = ({
  title,
  done,
  color,
  onTitleClick,
  onColorChange,
  onDelete
}) => {
  return (
    <li
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <p
        style={{ textDecoration: done ? "line-through" : "none" }}
        onClick={onTitleClick}
      >
        {title}
      </p>
      <select name="color" value={color} onChange={onColorChange}>
        <option value=""></option>
        {colors.map((color) => (
          <option key={color} value={color}>
            {capitalize(color)}
          </option>
        ))}
      </select>
      <button onClick={onDelete}>x</button>
    </li>
  );
};

export default TodoItem;
