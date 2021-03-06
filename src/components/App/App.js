import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Auth from "../Auth/Auth";
import Header from "../Header/Header";
import Home from "../Home/Home";
import News from "../News/News";
import Profile from "../Profile/Profile";
// import style from "./App.module.scss";
import Container from "@material-ui/core/Container";

const App = () => {
  return (
    <Container fixed>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/news" exact component={News} />
          <Route path="/profile" exact component={Profile} />
          <Route>
            <div className="container">
              Page not found. Go <Link to="/">Home</Link>{" "}
            </div>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
