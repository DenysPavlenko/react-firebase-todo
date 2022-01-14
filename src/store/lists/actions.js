import * as listsApi from 'api/listApi';

export const listsLoading = () => ({ type: 'lists/listsLoading' });

export const listsLoaded = (lists) => ({
  type: 'lists/listsLoaded',
  payload: lists,
});

export const listsError = (error) => ({
  type: 'lists/listsError',
  payload: error,
});

export const fetchLists = () => (dispatch) => {
  dispatch(listsLoading());
  try {
    listsApi.onListsSnapshot((lists) => {
      dispatch(listsLoaded(lists));
    });
  } catch (error) {
    dispatch(listsError(error));
  }
};

export const addList = (list) => () => {
  listsApi.addList(list);
};

export const deleteList = (id) => () => {
  listsApi.deleteList(id);
};
