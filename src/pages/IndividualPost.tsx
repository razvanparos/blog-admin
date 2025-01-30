import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FormRow from "../components/FormRow.tsx";
import IndividualPostHeader from "../components/IndividualPostHeader.tsx";
import IndividualPostComments from "../components/IndividualPostsComments.tsx";
import { months } from "../common/utils.ts";

const IndividualPost = () => {
  const location = useLocation();
  const { state } = location;
  const { post } = state || "";
  
  const initialPostState = {
    id: post?.id || "",
    title: post?.title || "",
    author: post?.author || "",
    content: post?.content || "",
    date: post?.date || `${new Date().getFullYear()}-${months[new Date().getMonth()]}-${new Date().getDate()}`,
    comments:post?.comments || "",
    status: post?.status || ""
  };
  const [postState, setPostState] = useState(initialPostState);

  const changePostState = (fieldname, value) => {
    setPostState((prevState) => ({
      ...prevState,
      [fieldname]: value,
    }));
  };

  return (
    <div className="w-full p-4 flex flex-col gap-y-4 lg:border lg:m-6 rounded-lg">
      <IndividualPostHeader post={post} postState={postState}/>
      <FormRow
        labelText="Title"
        type={"text"}
        placeholder={"Post title"}
        value={postState.title}
        onChangeFunction={(e) => {
          changePostState("title", e.target.value);
        }}
      />
      <FormRow
        labelText="Author"
        type={"text"}
        placeholder={"Post author"}
        value={postState.author}
        onChangeFunction={(e) => {
          changePostState("author", e.target.value);
        }}
      />
      <FormRow
        labelText="Date"
        type={"date"}
        value={postState.date}
        onChangeFunction={(e) => {
          changePostState("date", e.target.value);
        }}
      />
      <FormRow
        labelText="Content"
        textarea={true}
        value={postState.content}
        placeholder={"Post content"}
        onChangeFunction={(e) => {
          changePostState("content", e.target.value);
        }}
      />
      {
        postState.comments.length>0?<IndividualPostComments postState={postState}/>:''
      }
      
    </div>
  );
};

export default IndividualPost;
