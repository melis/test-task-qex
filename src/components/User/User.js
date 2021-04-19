import React from "react";
import style from "./User.module.scss";
import ReactSpeedometer from "react-d3-speedometer"; // and just use it

const User = ({ user }) => {
  return (
    <div className="container">
      <div className={style.user}>
        <div className={style.card}>
          <img src={user.image} />
          <div>{user.name}</div>
        </div>
        <div className={style.like}>
          <ReactSpeedometer />
        </div>
      </div>
    </div>
  );
};
export default User;
