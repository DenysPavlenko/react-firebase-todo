import { combineReducers } from 'redux';

import { todosReducer } from './todos/reducer';
import { todosFiltersReducer } from './todos-filters/reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  todosFilters: todosFiltersReducer,
});

export default rootReducer;
