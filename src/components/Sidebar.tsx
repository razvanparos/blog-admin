import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext.tsx";
import SideBarActions from "../context/actions/sidebar-acions.ts";
import UserNameSection from "./UserNameSection.tsx";
import SidebarRow from "./SidebarRow.tsx";
import { IoGrid } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const { state } = useContext(AppContext);
  const { sidebar } = state;
  const closeSidebar = () => {
    SideBarActions.toggleSidebar(!sidebar);
  };

  const logWidth=()=>{
    if(window.innerWidth>1024){
      SideBarActions.toggleSidebar(true);
      }
    }

  useEffect(()=>{
      window.addEventListener("resize", logWidth);

      return ()=>{window.removeEventListener('resize',logWidth)}
  },[])
  

  return (
    <aside
      className={`flex fixed xl:relative top-[75px] xl:top-0 duration-200 w-full h-[calc(100%-75px)] xl:min-h-[calc(100vh-75px)] z-10 ${
        sidebar ? "left-0" : "left-[-100%]"
      } xl:w-fit`}
    >
      <div className="bg-slate-100 w-full lg:w-[50%] xl:w-full border-r px-[3%] py-4 xl:px-2 gap-y-2 flex flex-col">
        <UserNameSection />
        <SidebarRow name='Posts' icon={<IoGrid />} count={6}/>
        <SidebarRow name='Users' icon={<LuUsers />} count={6}/>
        <SidebarRow name='Settings' icon={<IoMdSettings />} count={6}/>
      </div>

      <div
        onClick={closeSidebar}
        className={`bg-red-400 lg:w-full opacity-90 xl:hidden`}
      ></div>
    </aside>
  );
};

export default Sidebar;
