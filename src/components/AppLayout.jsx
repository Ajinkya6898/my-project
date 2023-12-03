import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="container pt-4">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Outlet />
          </div>
        </div>
        <main></main>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
