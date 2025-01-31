import React from "react";
import { formatDate } from "../common/utils.ts";

import RolePicker from "./RolePicker.tsx";

interface UserCardTypes {
  key?: string;
  user: any;
}

const UserCard = ({ user }: UserCardTypes) => {
  return (
    <article className="p-4 flex flex-col items-start h-fit border-b lg:border-b sm:grid grid-cols-2 gap-2 lg:grid-cols-4">
      <h3 className="text-lg text-darkBlue font-semibold overflow-clip">
        {user.name}
      </h3>

      <p className=" text-sm lg:text-base lg:text-start overflow-hidden text-ellipsis">
        {user.email}
      </p>
      <p className="">{formatDate(user.joined)}</p>

      <RolePicker user={user} />
    </article>
  );
};

export default UserCard;
