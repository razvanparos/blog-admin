import React, { createContext, useReducer } from "react";
import initialState from "./initialState.ts";
import combineReducers from "./reducers/combineReducers.ts";
import SideBarActions from "./actions/sidebar-acions.ts";
import PostsActions from "./actions/posts-actions.ts";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers, initialState);
  SideBarActions.registerActions(dispatch);
  PostsActions.registerActions(dispatch);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
