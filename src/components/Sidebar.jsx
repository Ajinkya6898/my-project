import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li className="list-group">
          <NavLink className="list-group-item" to={"/home"}>
            <HiHome className="mx-2 mb-1" /> Home
          </NavLink>
        </li>
        <li className="list-group">
          <NavLink className="list-group-item" to={"/Product"}>
            <HiOutlineRectangleGroup className="mx-2 mb-1" /> Product
          </NavLink>
        </li>
        <li className="list-group">
          <NavLink className="list-group-item" to={"/cart"}>
            <HiOutlineShoppingCart className="mx-2 mb-1" /> Cart
          </NavLink>
        </li>
        <li className="list-group">
          <NavLink className="list-group-item" to={"/payment"}>
            <HiOutlineCreditCard className="mx-2 mb-1" /> Payment
          </NavLink>
        </li>
        <li className="list-group">
          <NavLink className="list-group-item" to={"/contact"}>
            <HiOutlinePaperAirplane className="mx-2 mb-1" /> Contact
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
