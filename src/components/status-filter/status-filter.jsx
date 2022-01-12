import { useDispatch, useSelector } from 'react-redux';
import { statusFilterChange } from '../../store/todos-filters/actions';
import { StatusFilters } from '../../store/todos-filters/status-filters';

const StatusFilter = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.todosFilters.status);

  const handleClick = (status) => {
    dispatch(statusFilterChange(status));
  };

  return (
    <div>
      {Object.keys(StatusFilters).map((filter) => {
        const value = StatusFilters[filter];
        return (
          <button
            key={filter}
            style={{
              backgroundColor: value === status ? 'blue' : 'white',
            }}
            onClick={() => handleClick(value)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default StatusFilter;
