const initialState = { user: null, loading: false, error: false };

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { user: action.user, error: false, loading: false };
    case "SET_USER_LOADING":
      return { ...state, loading: true, error: false };
    case "SET_USER_ERROR":
      return { ...state, error: action.error, loading: false };
    case "LOG_OUT":
      return { user: null, error: false, loading: false };
    default:
      return state;
  }
};

export default user;
