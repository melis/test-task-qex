import myApi from "../../api/api";

export const loadNewsThunk = (dispatch) => {
  dispatch({ type: "SET_LOADING" });
  setTimeout(() => {
    myApi.getNews().then((news) => {
      news.length = 20;
      console.log(news);
      dispatch({ type: "SET_NEWS", news });
    });
  }, 200);
};
