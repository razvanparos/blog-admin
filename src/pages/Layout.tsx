import React, { useEffect } from "react";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.tsx";
import getAllPosts from "../services/postsService.ts";
import PostsActions from "../context/actions/posts-actions.ts";
import {getAllUsers, getCurrentUserData} from "../services/usersService.ts";
import UsersActions from "../context/actions/users-actions.ts";

const Layout = () => {

  const initApp = async() => {
    if (localStorage.getItem("currentUser")) {
      sessionStorage.setItem("currentUser",localStorage?.getItem("currentUser") ||'');
    }
    let posts = await getAllPosts();
    let users = await getAllUsers();
    let userData = await getCurrentUserData();
    PostsActions.setPostsCount(posts.length)
    UsersActions.setUsersCount(users.length)
    UsersActions.setUserData(userData)
  };

  useEffect(() => {
    initApp();
  }, []);
  return (
    <>
      <Header desktop={false}/>
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
