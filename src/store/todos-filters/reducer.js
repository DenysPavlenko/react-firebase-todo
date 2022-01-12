import { StatusFilters } from '../../store/todos-filters/status-filters';

const initialState = {
  colors: [],
  status: StatusFilters.All,
};

export const todosFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todosFilters/colorFilterChange':
      const { colors } = state;
      const color = action.payload;
      if (colors.includes(color)) {
        return {
          ...state,
          colors: colors.filter((c) => c !== color),
        };
      } else {
        return {
          ...state,
          colors: [...colors, color],
        };
      }
    case 'todosFilters/statusFilterChange':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
