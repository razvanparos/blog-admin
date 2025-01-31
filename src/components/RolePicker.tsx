import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  getCurrentUserData,
  updateUserRole,
} from "../services/usersService.ts";
import NotificationActions from "../context/actions/notification-actions.ts";
import UsersActions from "../context/actions/users-actions.ts";

function RolePicker({ user }) {
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [role, setRole] = useState(user.role);

  const handleChangeRole = async (roleText: string) => {
    if(roleText==role) return
    setRole(roleText);
    await updateUserRole(user.id, roleText);
    let userData = await getCurrentUserData();
    UsersActions.setUserData(userData);
    NotificationActions.showNotification("Role updated!", "normal");
  };
  return (
    <section
      onClick={() => {
        setShowRoleDropdown(!showRoleDropdown);
      }}
      className="
      flex items-center justify-center rounded-lg lg:justify-between gap-x-2 cursor-pointer relative select-none bg-slate-100
       max-w-[170px] w-full p-2 border
    "
    >
      <p className={"text-center lg:text-start"}>{role}</p>
      <MdKeyboardArrowDown
        className={`${showRoleDropdown ? "rotate-180" : ""} text-lg`}
      />
      <div
        className={`${
          showRoleDropdown ? " h-[120px] border" : "h-[0px] "
        }  overflow-hidden duration-300 flex flex-col items-start rounded-lg absolute w-full top-[45px] left-[50%] translate-x-[-50%] bg-white z-20`}
      >
        {["Administrator", "Moderator", "Contributor"].map((role,i) => (
          <p
            key={i}
            onClick={(e) => {
              handleChangeRole(e.target.innerHTML);
            }}
            className={`hover:bg-slate-200 w-full p-2`}
          >
            {role}
          </p>
        ))}
      </div>
    </section>
  );
}

export default RolePicker;
