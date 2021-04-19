import myApi from "../../api/api";

export const loginThunk = (log, pass) => (dispatch) => {
  dispatch({ type: "SET_USER_LOADING" });

  myApi
    .login(log, pass)
    .then((user) => {
      dispatch({
        type: "SET_USER",
        user,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "SET_USER_ERROR", error });
    });
};
