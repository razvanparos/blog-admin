import * as React from "react";
import { PiUserCircleDuotone } from "react-icons/pi";

interface CommentCardType {
  key?: string;
  comm: any;
  handleOpenModal:Function
}

function CommentCard({ comm,handleOpenModal }: CommentCardType) {

  return (
    <div
      onClick={() => {
        handleOpenModal(comm);
      }}
      className="border-l-2 border-darkBlue p-2 flex flex-col gap-2 items-start mb-4 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <PiUserCircleDuotone className="text-4xl min-w-[35px]" />
        <p className="text-lighGray text-sm">{comm.commentedBy}</p>
      </div>
      <p className="text-ellipsis line-clamp-2">{comm.commentContent}</p>
    </div>
  );
}

export default CommentCard;
