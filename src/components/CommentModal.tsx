import * as React from "react";
import { PiUserCircleDuotone } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import ButtonComponent from "./ButtonComponent.tsx";

function CommentModal({ comment, setShowCommentModal, handleDeleteComment }) {
  return (
    <div
      onClick={() => {
        setShowCommentModal(false);
      }}
      className={`
        fixed w-full h-full top-0 left-0 z-30 backdrop-blur-lg flex justify-center py-8
    `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-slate-50 border rounded-lg p-2 flex flex-col gap-2 w-full h-fit max-w-[95%] xl:max-w-[50%] relative shadow-xl"
      >
        <div className="flex items-center gap-2">
          <IoMdClose
            onClick={() => {
              setShowCommentModal(false);
            }}
            className="text-3xl absolute top-2 right-2 cursor-pointer"
          />
          <PiUserCircleDuotone className="text-4xl min-w-[35px]" />
          <p className="text-lighGray text-sm">{comment.commentedBy}</p>
        </div>
        <p className="max-h-[500px] overflow-scroll text-ellipsis p-2">
          {comment.commentContent}
        </p>
        <div className='flex justify-end'>
            <ButtonComponent text="Delete comment" type="danger" onClickFunction={()=>{handleDeleteComment(comment.id)}}/>
        </div>
        
      </div>
    </div>
  );
}

export default CommentModal;
