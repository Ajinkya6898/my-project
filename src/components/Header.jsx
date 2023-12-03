import React from "react";
import useUserStore from "../store/userstore";
import { HiOutlinePaperAirplane, HiOutlineUser } from "react-icons/hi2";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const loginStatus = useUserStore((state) => state.loggedIn);
  const userName = useUserStore((state) => state.username);
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
          <h5 className="px-2 my-0">
            <HiOutlineUser className="mx-2 mb-1" />
            {userName}
          </h5>

          <ul className="d-flex m-0 p-0">
            <li className="list-group px-2">
              <NavLink className="list-group-item py-1" to={"/myprofile"}>
                <HiOutlineUserCircle className="mb-1" /> My Profile
              </NavLink>
            </li>

            <li className="list-group px-2">
              <NavLink className="list-group-item py-1" to={"/contact"}>
                <HiOutlinePaperAirplane className="mb-1" /> Contact
              </NavLink>
            </li>
            <li className="list-group px-2">
              <NavLink className="list-group-item py-1" to={"/about"}>
                <HiOutlineInformationCircle className="mb-1" /> About
              </NavLink>
            </li>
          </ul>
          <button
            className="btn btn-outline-dark btn-sm mx-2"
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
