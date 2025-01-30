import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import "./output.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import AppProvider from "./context/AppContext.tsx";
import Users from "./pages/Users.tsx";
import Settings from "./pages/Settings.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import Posts from "./pages/Posts.tsx";
import IndividualPost from "./pages/IndividualPost.tsx";
import Notification from "./components/Notification.tsx";

const App = () => {
  return (
    <AppProvider>
      <Notification/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
            <Route index element={<Posts />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="post" element={<IndividualPost />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
