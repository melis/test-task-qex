import React from "react";
import style from "./User.module.scss";

const User = ({ user }) => {
  return (
    <div className="container">
      <div className={style.user}>
        <img src={user.image} alt={user.name} />

        <div className={style.card}>
          <div>
            <span>Name: </span>
            {user.name}
          </div>
          <div>
            <span>Phone:</span> {user.phone}
          </div>
          <div>
            <span>Email: </span>
            {user.email}
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
