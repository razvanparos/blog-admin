import React from "react";
import PostCard from "../components/PostCard.tsx";
import ButtonComponent from "./ButtonComponent.tsx";
import { useNavigate } from "react-router-dom";

const PostsViewer = ({ posts, loading }) => {
    const navigate=useNavigate();
  return (
    <section className="lg:border rounded-xl w-full">
        <div className="flex items-center">
            <h2 className="text-2xl p-4">Posts</h2>
            <ButtonComponent text={'+'} type={'rounded'} onClickFunction={()=>{navigate(`/post`,{})}}/>
        </div>
        
        <div className="p-4 border-b hidden lg:grid grid-cols-4 text-darkBlue font-semibold text-xl">
            <p>Title</p>
            <p>Author</p>
            <p>Date</p>
            <p>Status</p>
        </div>
        {
            posts?.length>0?<div>
            {loading
            ? "loading"
            : posts?.map((p) => {
                return <PostCard key={p.id} post={p} />;
            })}
        </div>:<p className='w-full text-center lg:text-start text-lg lg:text-2xl p-2'>No results</p>
        
        }
        
        
    </section>
  );
};

export default PostsViewer;
