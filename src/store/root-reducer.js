import { combineReducers } from 'redux';

import { listsReducer } from './lists/reducer';
import { todosReducer } from './todos/reducer';
import { todosFiltersReducer } from './todos-filters/reducer';

const rootReducer = combineReducers({
  lists: listsReducer,
  todos: todosReducer,
  todosFilters: todosFiltersReducer,
});

export default rootReducer;
