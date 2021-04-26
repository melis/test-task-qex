import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { loginThunk } from "../../store/userReduser/userActions";
import style from "./Auth.module.scss";
import ReactSpeedometer from "react-d3-speedometer";
const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { user, error, loading } = useSelector(({ user }) => user);

  const [max, setMax] = useState(10);

  if (user) return <Redirect to="/profile" />;

  return (
    <>
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
        <h3>Please sign in</h3>
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
        {loading && <div className={style.loading}>Loading...</div>}
      </form>
      <div className={style.speedBox}>
        <ReactSpeedometer
          startColor="green"
          endColor="red"
          value={Number(localStorage.getItem("test"))}
          maxValue={max}
          forceRender
        />
      </div>

      <div>login: admin</div>
      <div>password: admin</div>
    </>
  );
};

export default Auth;
