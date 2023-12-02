import React from "react";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { HiOutlineMoon } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="d-flex h-25 align-items-center">
      {/* <div>
        <button className="btn btn-primary">Login In</button>
        <button className="btn btn-primary">Sign Up</button>
      </div>
      <div className="d-flex align-items-center">
        <span>
          <p>Ajinkya Joshi</p>
        </span>
        <span title="My-Profile">
          <HiOutlineUser />
        </span>
        <span title="Dark Mode">
          <HiOutlineMoon />
        </span>
        <span title="Signout">
          <HiOutlineArrowRightOnRectangle />
        </span>
      </div> */}
    </header>
  );
};

export default Header;
