import React, { createContext, useReducer } from "react";
import initialState from "./initialState.ts";
import combineReducers from "./reducers/combineReducers.ts";
import SideBarActions from "./actions/sidebar-acions.ts";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers, initialState);
  SideBarActions.registerActions(dispatch);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
