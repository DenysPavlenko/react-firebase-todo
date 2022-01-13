const initialState = {
  data: [],
  status: 'idle',
};

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'lists/listsLoading':
      return { ...state, status: 'loading' };
    case 'lists/listsLoaded':
      return { ...state, data: action.payload, status: 'loaded' };
    case 'lists/listsError':
      return {
        ...state,
        status: 'error',
        error: action.payload,
      };
    default:
      return state;
  }
};
