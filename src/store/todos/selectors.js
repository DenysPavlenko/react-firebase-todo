import { createSelector } from 'reselect';
import { selectFilters } from '../todos-filters/selectors';
import { StatusFilters } from '../todos-filters/status-filters';

export const selectTodos = (state) => state.todos;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilters],
  (todos, { colors, status }) => {
    return todos.enteties.filter(({ color, done }) => {
      const colorMateches = colors.length === 0 || colors.includes(color);
      const isDone = status === StatusFilters.Done;
      const statusMatches = status === StatusFilters.All || isDone === done;
      return colorMateches && statusMatches;
    });
  }
);
