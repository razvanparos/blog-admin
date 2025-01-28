export const SET_USERS_COUNT = "SET_USERS_COUNT";
export const SET_USER_DATA = "SET_USER_DATA";

class UsersActions {
    static #dispatch;
  
    static registerActions(dispatch) {
      this.#dispatch = dispatch;
    }
  
    static setUsersCount(usersCount) {
      this.#dispatch({
        type: SET_USERS_COUNT,
        payload: {
            usersCount,
        },
      });
    }
    static setUserData(userData) {
      this.#dispatch({
        type: SET_USER_DATA,
        payload: {
          userData,
        },
      });
    }

  }
  
  export default UsersActions;
  