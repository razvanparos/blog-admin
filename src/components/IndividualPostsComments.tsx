import React, { useState } from "react";
import LabelComponent from "./LabelComponent.tsx";
import CommentModal from "./CommentModal.tsx";
import { updatePostComments } from "../services/postsService.ts";
import CommentCard from "./CommentCard.tsx";
import NotificationActions from "../context/actions/notification-actions.ts";
import { useNavigate } from "react-router-dom";

function IndividualPostComments({ postState }) {
  const navigate = useNavigate();
  const [commentModal, setCommentModal] = useState("");
  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleOpenModal = (comm) => {
    setShowCommentModal(true);
    setCommentModal(comm);
  };

  const handleDeleteComment = (id) => {
    let filteredComments = postState.comments.filter((comm) => comm.id != id);
    postState.comments = filteredComments;
    updatePostComments(postState.id, filteredComments);
    setShowCommentModal(false);
    navigate(`/post`, { state: { postState } });
    NotificationActions.showNotification("Comment deleted", "warning");
  };

  return (
    <>
      <LabelComponent labelText={"Comments"} />
      <div>
        {postState.comments
          ? postState.comments.map((comm) => {
              return (
                <CommentCard
                  key={comm.id}
                  comm={comm}
                  handleOpenModal={handleOpenModal}
                />
              );
            })
          : ""}
      </div>

      {showCommentModal ? (
        <CommentModal
          handleDeleteComment={handleDeleteComment}
          comment={commentModal}
          setShowCommentModal={setShowCommentModal}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default IndividualPostComments;
