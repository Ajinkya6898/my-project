import React from "react";
import useUserStore from "../store/userstore";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const loginStatus = useUserStore((state) => state.loggedIn);
  const userName = useUserStore((state) => state.username);
  const password = useUserStore((state) => state.password);
  const signout = useUserStore((state) => state.logout);

  const handleLogout = () => {
    signout();
    navigate("/login");
  };

  const navigate = useNavigate();
  return (
    <header className="bg-light navbar navbar-expand">
      {loginStatus ? (
        <div className="container px-4 d-flex align-items-center justify-content-end">
          <h5 className="px-4 my-0">
            <HiOutlineUser className="mx-2 mb-1" />
            {userName}
          </h5>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={handleLogout}
          >
            {" "}
            <HiOutlineArrowRightOnRectangle className="mb-1" /> Logout
          </button>
        </div>
      ) : (
        <div className="container d-flex justify-content-end">
          <button
            className="btn btn-outline-dark mx-5"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login In
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
