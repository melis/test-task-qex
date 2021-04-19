import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { loginThunk } from "../../store/userReduser/userActions";
import style from "./Auth.module.scss";
const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { user, error, loading } = useSelector(({ user }) => user);

  if (user) return <Redirect to="/profile" />;

  return (
    <div className="container">
      <form
        className={style.authForm}
        onSubmit={(e) => {
          e.preventDefault();
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

      <div>login: admin</div>
      <div>password: admin</div>
    </div>
  );
};

export default Auth;
