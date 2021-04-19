import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./store/store";
window.store = store;
localStorage.setItem("test", Number(localStorage.getItem("test")) + 1);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
