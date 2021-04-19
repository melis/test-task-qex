import React, { useEffect, useState } from "react";
import style from "./User.module.scss";
import ReactSpeedometer from "react-d3-speedometer"; // and just use it

const User = ({ user }) => {
  return (
    <div className="container">
      <div className={style.user}>
        <img src={user.image} />

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

//  <div className={style.like}>
//    <ReactSpeedometer value={count} maxValue={max} forceRender />
//    <button onClick={() => handler(1)}>+1</button>
//    <button onClick={() => handler(10)}>+10</button>
//    <button onClick={() => handler(100)}>+100</button>
//  </div>;

// const [count, setCount] = useState(user.like);
// const [max, setMax] = useState(10);
// const handler = (x) => {
//   setCount(count + x);
// };
// useEffect(() => {
//   console.log("use");
//   if (count > max) setMax(max * 10);
// }, [count]);
