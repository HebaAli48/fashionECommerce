/* eslint-disable react/prop-types */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-back-color">
      <Header />
      <main className="flex-1  ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
