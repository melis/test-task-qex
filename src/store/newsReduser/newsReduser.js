const initialState = {
  news: [],
  loading: true,
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_NEWS":
      return {
        news: action.news,
        loading: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default news;
