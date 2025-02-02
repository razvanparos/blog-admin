import React, { useEffect, useContext, useMemo } from "react";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.tsx";
import { getAllPosts } from "../services/postsService.ts";
import PostsActions from "../context/actions/posts-actions.ts";
import { getAllUsers, getCurrentUserData } from "../services/usersService.ts";
import UsersActions from "../context/actions/users-actions.ts";
import { AppContext } from "../context/AppContext.tsx";
import { PostType } from "./Posts.tsx";

const Layout = () => {
  const { state } = useContext(AppContext);
  const { userData } = state;

  const initApp = async () => {
    if (localStorage.getItem("currentUser")) {
      sessionStorage.setItem(
        "currentUser",
        localStorage?.getItem("currentUser") || ""
      );
    }
    let users = await getAllUsers();
    let userData = (await getCurrentUserData()) as any;
    UsersActions.setUserData(userData);
    UsersActions.setUsersCount(users.length);
  };

  useEffect(() => {
    initApp();
  }, []);

  const postsCountUpdate = async () => {
    if (userData.length > 0) {
      let posts = (await getAllPosts()) as PostType[];
      if (userData[0]?.role == "Contributor") {
        let currentUserPosts = posts.filter(
          (p) => p.authorId === sessionStorage.getItem("currentUser")
        );
        PostsActions.setPostsCount(currentUserPosts.length);
      } else {
        PostsActions.setPostsCount(posts.length);
      }
    }
  };

  useEffect(() => {
    postsCountUpdate();
  }, [userData]);

  return (
    <>
      <Header desktop={false} />
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
