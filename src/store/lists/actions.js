import FirebaseService from 'services/firebaseService';
const firebaseService = new FirebaseService();

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
    firebaseService.onListsSnapshot((lists) => {
      dispatch(listsLoaded(lists));
    });
  } catch (error) {
    dispatch(listsError(error));
  }
};

export const addList = (list) => () => {
  firebaseService.addList(list);
};

export const deleteList = (id) => () => {
  firebaseService.deleteList(id);
};
