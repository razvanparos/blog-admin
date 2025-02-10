import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FormRow from "../components/FormRow.tsx";
import IndividualPostHeader from "../components/IndividualPostHeader.tsx";
import IndividualPostComments from "../components/IndividualPostsComments.tsx";
import { months } from "../common/utils.ts";
import { AppContext } from "../context/AppContext.tsx";

const IndividualPost = () => {
  const location = useLocation();
  const { state } = location;
  const { userData } = useContext(AppContext).state;
  const { post } = state || "";

  const initialPostState = {
    id: post?.id || "",
    title: post?.title || "",
    author: post?.author || userData[0]?.name || "",
    content: post?.content || "",
    date:
      post?.date ||
      `${new Date().getFullYear()}-${months[new Date().getMonth()]}-${
        new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate()
      }`,
    comments: post?.comments || "",
    status: post?.status || "",
  };
  const [postState, setPostState] = useState(initialPostState);

  const changePostState = (fieldname, value) => {
    setPostState((prevState) => ({
      ...prevState,
      [fieldname]: value,
    }));
  };

  useEffect(() => {
    if (!post?.author && userData[0]?.name) {
      changePostState("author", userData[0]?.name);
    }
  }, [userData]);

  return (
    <div className="w-full lg:p-4">
      <article className="p-4 flex flex-col rounded-lg lg:border gap-y-4">
        <IndividualPostHeader postState={postState} />
        <FormRow labelText="Title">
          <input
            type="text"
            placeholder={"Post title"}
            value={postState.title}
            onChange={(e) => {
              changePostState("title", e.target.value);
            }}
          />
        </FormRow>
        <FormRow labelText="Author">
          <input
            disabled={userData[0]?.role === "Contributor"}
            type={"text"}
            placeholder={"Post author"}
            value={postState.author}
            onChange={(e) => {
              changePostState("author", e.target.value);
            }}
          />
        </FormRow>
        <FormRow labelText="Date">
          <input
            type={"date"}
            value={postState.date}
            onChange={(e) => {
              changePostState("date", e.target.value);
            }}
          />
        </FormRow>
        <FormRow labelText={"Content"}>
          <textarea
            className="min-h-[120px]"
            value={postState.content}
            placeholder={"Post content"}
            onChange={(e) => {
              changePostState("content", e.target.value);
            }}
          ></textarea>
        </FormRow>
        {postState.comments.length > 0 ? (
          <IndividualPostComments postState={postState} />
        ) : (
          ""
        )}
      </article>
    </div>
  );
};

export default IndividualPost;
