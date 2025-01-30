import React from "react";
import { PiUserCircleDuotone } from "react-icons/pi";

function IndividualPostComments({ postState }) {
  return (
    <>
      <h2>Comments</h2>
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
