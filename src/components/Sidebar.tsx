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

  const updateWidth=()=>{
    if(window.innerWidth>=1024){
      SideBarActions.toggleSidebar(true);
      }
    }

  useEffect(()=>{
    updateWidth();
      window.addEventListener("resize", updateWidth);

      return ()=>{window.removeEventListener('resize',updateWidth)}
  },[])
  

  return (
    <aside
      className={`flex fixed lg:relative top-[75px] lg:top-0 duration-200 w-full h-[calc(100%-75px)] lg:min-h-[calc(100vh-75px)] z-10 ${
        sidebar ? "left-0" : " translate-x-[-100%]"
      } lg:w-[35%] xl:w-[25%]`}
    >
      <div className="bg-slate-100 w-full border-r px-[3%] py-4 lg:px-2 gap-y-2 flex flex-col">
        <UserNameSection />
        <SidebarRow name='Posts' icon={<IoGrid className="text-2xl"/>} count={6} path={'/'}/>
        <SidebarRow name='Users' icon={<LuUsers className="text-2xl"/>} count={6} path={'/users'}/>
        <SidebarRow name='Settings' icon={<IoMdSettings className="text-2xl"/>} count={6} path={'/settings'}/>
      </div>

      <div
        onClick={closeSidebar}
        className={`bg-red-400 opacity-90 hidden sm:block w-full lg:hidden`}
      ></div>
    </aside>
  );
};

export default Sidebar;
