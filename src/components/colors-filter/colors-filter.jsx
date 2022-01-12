import { useSelector, useDispatch } from 'react-redux';
import { colors, capitalize } from '../../store/todos-filters/colors';
import { colorFilterChange } from '../../store/todos-filters/actions';

const ColorsFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.todosFilters.colors);

  const handleChange = (e) => dispatch(colorFilterChange(e.target.name));

  return colors.map((color) => (
    <label key={color} style={{ display: 'block' }}>
      <input
        type="checkbox"
        name={color}
        onChange={handleChange}
        checked={filters.includes(color)}
      />
      <span
        style={{
          background: color,
          width: '10px',
          height: '10px',
          display: 'inline-block',
        }}
      />
      <span>{capitalize(color)}</span>
    </label>
  ));
};

export default ColorsFilter;
