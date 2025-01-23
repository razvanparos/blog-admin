import React, {useContext} from "react";
import { AppContext } from "../context/AppContext.tsx";
import SideBarActions from "../context/actions/sidebar-acions.ts";
const MenuToggleButton = () => {
    const {state} = useContext(AppContext)
    const {sidebar} = state;

    const handleSidebarToggle=()=>{
        SideBarActions.toggleSidebar(
         !sidebar
        )
    }

  return (
    <div className="container lg:hidden">
      <input className="label-check" id="label-check" type="checkbox" checked={sidebar} onChange={handleSidebarToggle}/>
      <label  htmlFor="label-check" className="hamburger-label" >
        <div className="line1 bg-lighGray"></div>
        <div className="line2 bg-lighGray"></div>
        <div className="line3 bg-lighGray"></div>
      </label>
    </div>
  );
};

export default MenuToggleButton;
