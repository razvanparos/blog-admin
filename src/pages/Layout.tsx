import React, { useEffect } from "react";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.tsx";
import { getAllUsers, getCurrentUserData } from "../services/usersService.ts";
import UsersActions from "../context/actions/users-actions.ts";

const Layout = () => {
  const initApp = async () => {
    let users = await getAllUsers();
    let userData = (await getCurrentUserData()) as any;
    UsersActions.setUserData(userData);
    UsersActions.setUsersCount(users.length);
  };

  useEffect(() => {
    initApp();
  }, []);

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
