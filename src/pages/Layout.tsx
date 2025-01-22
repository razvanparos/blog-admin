import React from "react";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.tsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
