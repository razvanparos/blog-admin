import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../common/utils.ts";

interface PostCardTypes {
  key?: string;
  post: any;
}

const PostCard = ({ post }: PostCardTypes) => {
  const navigate = useNavigate()
  const redirectToIndividualPost=()=>{
    navigate(`/post`,{state:{post}})
  }


  return (
    <article onClick={redirectToIndividualPost} className="cursor-pointer p-4 h-fit border-b lg:border-b grid grid-cols-2 gap-2 lg:grid-cols-4">
      <h3 className="text-lg text-darkBlue font-semibold overflow-clip">{post.title}</h3>

      <p className="text-center lg:text-start">{post.author}</p>
      <p className="">{formatDate(post.date)}</p>
      
      <p
        className={`text-sm lg:w-[100px] p-1 rounded-md text-slate-600 text-center h-fit
            ${post.status == "Published" ? "bg-green-300" : ""} 
            ${post.status == "Hidden" ? "bg-yellow-300" : ""} 
        `}
      >
        {post.status}
      </p>
    </article>
  );
};

export default PostCard;
