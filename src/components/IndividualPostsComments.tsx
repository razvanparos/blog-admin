import React from "react";
import { PiUserCircleDuotone } from "react-icons/pi";

function IndividualPostComments({ postState }) {
  return (
    <>
      <div className='flex items-center gap-x-2'>
        <div className="bg-darkBlue w-[10px] h-[10px] rounded-full"></div>
        <h2 className='text-lg font-semibold text-darkBlue'>Comments</h2>
      </div>
      
      <div>
        {postState.comments
          ? postState.comments.map((comm) => {
              return (
                <div
                  className="border-l-2 border-darkBlue p-4 flex flex-col gap-2 items-start mb-4"
                  key={comm.id}
                >
                  <div className="flex items-center gap-2">
                    <PiUserCircleDuotone className="text-4xl min-w-[35px]" />
                    <p className="text-lighGray text-sm">{comm.commentedBy}</p>
                  </div>
                  <p className="overflow-hidden text-ellipsis">
                    {comm.commentContent}
                  </p>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}

export default IndividualPostComments;
