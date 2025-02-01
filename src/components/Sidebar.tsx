import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext.tsx";
import SideBarActions from "../context/actions/sidebar-acions.ts";
import UserNameSection from "./UserNameSection.tsx";
import SidebarRow from "./SidebarRow.tsx";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { HiUserGroup } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import ButtonComponent from "./ButtonComponent.tsx";
import { logoutUser } from "../services/authService.ts";
import { useNavigate } from "react-router-dom";
import Header from "./Header.tsx";

const Sidebar = () => {
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  const { sidebar } = state;
  const closeSidebar = () => {
    SideBarActions.toggleSidebar(!sidebar);
  };

  const updateWidth = () => {
    if (window.innerWidth >= 1024) {
      SideBarActions.toggleSidebar(true);
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleLogOut = () => {
    logoutUser(navigate);
  };

  return (
    <aside
      className={`flex fixed lg:sticky lg:flex-col top-[75px] lg:top-0 duration-200 w-full h-[calc(100vh-75px)] lg:h-[calc(100vh-0px)] z-30 ${
        sidebar ? "left-0" : " translate-x-[-100%] "
      } lg:w-[35%] xl:w-[25%] backdrop-blur-sm`}
    >
      <Header desktop={true}/>
      <div className="bg-slate-100 w-full h-full border-r px-[3%] py-4 lg:px-2 gap-y-2 flex flex-col">
        <UserNameSection />
        <SidebarRow
          name="Posts"
          icon={<TfiLayoutGrid2Alt  className="text-2xl text-darkBlue" />}
          count={state.postsCount}
          path={"/"}
        />
        <SidebarRow
          name="Users"
          icon={<HiUserGroup  className="text-2xl text-darkBlue" />}
          count={state.usersCount}
          path={"/users"}
        />
        <SidebarRow
          name="Settings"
          icon={<IoMdSettings className="text-2xl text-darkBlue" />}
          path={"/settings"}
        />
        <ButtonComponent
          text={"Log out"}
          type={"secondary"}
          onClickFunction={handleLogOut}
        />
      </div>

      <div
        onClick={closeSidebar}
        className={`hidden sm:block w-full lg:hidden`}
      ></div>
    </aside>
  );
};

export default Sidebar;
