import React,{useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { getAllUsers, getCurrentUserData } from "../services/usersService.ts";
import UsersActions from "../context/actions/users-actions.ts";


export default function PrivateRoute({ children }) {

  const isLogged = localStorage.getItem('currentUser')

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
    isLogged ? (
    children
  ) : (
    <Navigate
      to="/login"
    />
  ));
}
