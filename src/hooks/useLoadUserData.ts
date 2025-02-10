import { useEffect } from 'react';
import { getAllUsers, getCurrentUserData } from '../services/usersService.ts';
import UsersActions from '../context/actions/users-actions.ts';

const useLoadUserData = () => {
  const initApp = async () => {
    let users = await getAllUsers();
    let userData = (await getCurrentUserData()) as any;
    UsersActions.setUserData(userData);
    UsersActions.setUsersCount(users.length);
  };

  useEffect(() => {
    initApp();
  }, []);

};

export default useLoadUserData;


