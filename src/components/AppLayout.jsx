import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-8">
            <Outlet />
          </div>
        </div>
        <main></main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
