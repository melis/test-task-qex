import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
  const { user } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  return (
    <header className={style.header}>
      <nav>
        <div className={style.logo}>
          <Link to="/">QEX</Link>
        </div>
        <ul className={style.menu}>
          <li className={style.menu__item}>
            <Link to="/">Главная</Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/news">Новости</Link>
          </li>
          <li className={style.menu__item}>
            <Link to="/profile">Профиль</Link>
          </li>
        </ul>
        <div className={style.auth}>
          {user ? (
            <div>
              <Link to="/profile" className={style.menu__item}>
                {user.name}
              </Link>
              <button
                onClick={() => {
                  dispatch({ type: "LOG_OUT" });
                }}
              >
                LogOut
              </button>
            </div>
          ) : (
            <Link to="/auth">SigIn</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
