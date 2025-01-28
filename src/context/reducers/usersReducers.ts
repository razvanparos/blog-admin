import { SET_USERS_COUNT } from "../actions/users-actions.ts";
import { SET_USER_DATA } from "../actions/users-actions.ts";

const usersReducer = (state, action) => {
    const  usersCount  = action.payload.usersCount;
    const  userData  = action.payload.userData;
  
    switch (action.type) {
      case SET_USERS_COUNT:
        return { ...state, usersCount };
      case SET_USER_DATA:
        return { ...state, userData };
      default:
        return false;
    }
  };
  
  export default usersReducer;