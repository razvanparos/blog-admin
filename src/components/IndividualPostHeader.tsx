import React, { useState } from "react";
import ButtonComponent from "../components/ButtonComponent.tsx";
import {
  removePost,
  saveNewPost,
  updatePost,
  updatePostStatus,
} from "../services/postsService.ts";
import { useNavigate } from "react-router-dom";

function IndividualPostHeader({ post, postState }) {
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState(postState.status);

  const handleSaveNewPost = (post) => {
    if (postState.title && postState.author && postState.content) {
      saveNewPost(post);
      navigate("/");
    } else alert("Add all post information");
  };

  const handleUpdatePost = (post) => {
    if (postState.title && postState.author && postState.content) {
      updatePost(post);
    } else alert("Add all post information");
  };

  const handleChangePostStatus = (id: string, status: string) => {
    updatePostStatus(id, status);
    if (buttonState === "Hidden") {
      setButtonState("Published");
    } else setButtonState("Hidden");
  };

  const handleDeletePost = (id: string) => {
    removePost(id);
    navigate("/");
  };

  return (
    <section className="flex justify-between items-center mb-6">
      <h2 className="text-darkBlue font-semibold text-2xl">
        {post ? "Edit post" : "Add new post"}
      </h2>
      <div className="flex gap-x-2 lg:gap-x-4">
        {post ? (
          <ButtonComponent
            text="Update"
            type="save"
            onClickFunction={() => {
              handleUpdatePost(postState);
            }}
          />
        ) : (
          <ButtonComponent
            text="Save"
            type="save"
            onClickFunction={() => {
              handleSaveNewPost(postState);
            }}
          />
        )}
        {post ? (
          <>
            {buttonState == "Published" ? (
              <ButtonComponent
                text="Hide"
                type="warning"
                onClickFunction={() => {
                  handleChangePostStatus(postState.id, "Hidden");
                }}
              />
            ) : (
              <ButtonComponent
                text="Publish"
                type="normal"
                onClickFunction={() => {
                  handleChangePostStatus(postState.id, "Published");
                }}
              />
            )}
            <ButtonComponent
              text="Delete"
              type="danger"
              onClickFunction={() => {
                handleDeletePost(postState.id);
              }}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default IndividualPostHeader;
