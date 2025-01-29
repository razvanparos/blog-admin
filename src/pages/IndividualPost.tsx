import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FormRow from "../components/FormRow.tsx";
import ButtonComponent from "../components/ButtonComponent.tsx";
import { PiUserCircleDuotone } from "react-icons/pi";

const IndividualPost = () => {
  const location = useLocation();
  const { state } = location;
  const { post } = state || "";

  const initialPostState = {
    title: post?.title || "",
    author: post?.author || "",
    content: post?.content || "",
    date: post?.date || "",
    comments:post?.comments || ""
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
      <section className="flex justify-between items-center mb-6">
        <h2 className="text-darkBlue font-semibold text-2xl">
          {post ? "Edit post" : "Add new post"}
        </h2>
        <div className="flex gap-x-2 lg:gap-x-4">
          <ButtonComponent text="Save" type="save" />
          {post ? (
            <>
            {
                post?.status=='Published'?<ButtonComponent text="Hide" type="warning" />:<ButtonComponent text="Publish" type="normal" />
            }
              <ButtonComponent text="Delete" type="danger" />
            </>
          ) : (
            ""
          )}
        </div>
      </section>

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
      <h2>Comments</h2>
      <div>
        {postState.comments?
            postState.comments.map((comm)=>{
                return <div className='border-l-2 border-darkBlue p-4 flex flex-col gap-2 items-start mb-4' key={comm.id}>
                    <div className='flex items-center gap-2'>
                        <PiUserCircleDuotone className='text-4xl min-w-[35px]'/>
                        <p className='text-lighGray text-sm'>{comm.commentedBy}</p>
                    </div>
                    <p className='overflow-hidden text-ellipsis'>{comm.commentContent}</p>
                </div> 
            }) :''
        }
      </div>
    </div>
  );
};

export default IndividualPost;
