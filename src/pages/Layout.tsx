import React, { useEffect } from "react";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.tsx";
import getAllPosts from "../services/postsService.ts";
import PostsActions from "../context/actions/posts-actions.ts";

const Layout = () => {

  const initApp = async() => {
    if (localStorage.getItem("currentUser")) {
      sessionStorage.setItem("currentUser",localStorage.getItem("currentUser"));
    }
    let response = await getAllPosts();
    PostsActions.setPostsCount(response.length)
  };

  useEffect(() => {
    initApp();
  }, []);
  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
