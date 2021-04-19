import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from "../Auth/Auth";
import Header from "../Header/Header";
import Home from "../Home/Home";
import News from "../News/News";
import Profile from "../Profile/Profile";
import style from "./App.module.scss";

const App = () => {
  return (
    <div className={style.App}>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/news" exact component={News} />
        <Route path="/profile" exact component={Profile} />
      </Router>
    </div>
  );
};

export default App;
