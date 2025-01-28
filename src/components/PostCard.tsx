import React from "react";

interface PostCardTypes {
  key?: string;
  post: any;
}

const PostCard = ({ post }: PostCardTypes) => {
  return (
    <article className="cursor-pointer p-4 h-fit border-b lg:border-b grid grid-cols-2 gap-2 lg:grid-cols-4">
      <h3 className="text-lg text-darkBlue font-semibold overflow-clip">{post.title}</h3>

      <p className="text-center lg:text-start">{post.author}</p>
      <p className="">{post.date}</p>
      
      <p
        className={`text-sm lg:w-[100px] p-1 rounded-md text-slate-600 text-center
            ${post.status == "Published" ? "bg-green-300" : ""} 
            ${post.status == "Waiting" ? "bg-blue-300" : ""} 
            ${post.status == "Hidden" ? "bg-red-300" : ""} 
        `}
      >
        {post.status}
      </p>
    </article>
  );
};

export default PostCard;
