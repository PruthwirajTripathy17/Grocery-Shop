import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="admin-header">
        <h1>Hello {user ? user.firstName : "Pruthwiraj"}</h1>
      </div>
    </>
  );
};

export default Header;
