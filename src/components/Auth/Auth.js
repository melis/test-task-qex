import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { loginThunk } from "../../store/userReduser/userActions";
import style from "./Auth.module.scss";
import ReactSpeedometer from "react-d3-speedometer"; // and just use it
const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { user, error, loading } = useSelector(({ user }) => user);

  const [max, setMax] = useState(Number(localStorage.getItem("test")));

  if (user) return <Redirect to="/profile" />;

  return (
    <div className="container">
      <form
        className={style.authForm}
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem(
            "test",
            Number(localStorage.getItem("test")) + 1
          );
          if (localStorage.getItem("test") > max) setMax(max * 10);
          dispatch(loginThunk(login, password));
        }}
      >
        <input
          type="text"
          placeholder="login"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Вход" />
        {error && <div className={style.error}>{error}</div>}
      </form>
      <ReactSpeedometer
        startColor="green"
        endColor="red"
        value={Number(localStorage.getItem("test"))}
        maxValue={max}
        forceRender
      />

      <div>login: admin</div>
      <div>password: admin</div>
    </div>
  );
};

export default Auth;

// localStorage.setItem("test", Number(localStorage.getItem("test")) + 1);
