import React from "react";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.tsx";
import useLoadUserData from "../hooks/useLoadUserData.ts";

const Layout = () => {
  useLoadUserData()
  return (
    <>
      <div className="lg:hidden flex">
        <Header />
      </div>
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
