import React from "react";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { HiOutlineMoon } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="bg-light navbar navbar-expand">
      <div className="container d-flex justify-content-end">
        <button className="btn btn-outline-dark mx-5">Login In</button>
        <button className="btn btn-dark">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
