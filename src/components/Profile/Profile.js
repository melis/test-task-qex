import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import User from "../User/User";

const Profile = () => {
  const { user } = useSelector(({ user }) => user);

  return (
    <div className="container">
      {user ? <User user={user} /> : <Redirect to="/auth" />}
    </div>
  );
};
export default Profile;
