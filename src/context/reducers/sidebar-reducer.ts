import { SIDEBAR_TOGGLE } from "../actions/sidebar-acions.ts";

const sidebarReducer = (state, action) => {
    const  sidebar  = action.payload.sidebar;
  
    switch (action.type) {
      case SIDEBAR_TOGGLE:
        return { ...state, sidebar };
      default:
        return false;
    }
  };
  
  export default sidebarReducer;