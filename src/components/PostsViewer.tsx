import React from "react";
import PostCard from "../components/PostCard.tsx";
import ButtonComponent from "./ButtonComponent.tsx";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner.tsx";
import ViewerHeader from "./ViewerHeader.tsx";

const PostsViewer = ({ posts, loading, filter, setFilter }) => {
  const navigate = useNavigate();

  return (
    <section className="lg:border rounded-xl w-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-x-2">
          <h2 className="text-lg md:text-2xl ">Posts</h2>
          <ButtonComponent
            text={"+"}
            type={"rounded"}
            onClickFunction={() => {
              navigate(`/post`, {});
            }}
          />
        </div>
        <div className="flex justify-between gap-x-4 text-sm lg:text-xl">
          {["All", "Published", "Hidden"].map((filterText) => {
            return (
              <span
                key={filterText}
                onClick={(e) => {
                  setFilter(e.target.textContent);
                }}
                className={`${
                  filter === filterText
                    ? "text-darkBlue border-b-2 border-darkBlue"
                    : "text-lighGray"
                } 
              cursor-pointer select-none`}
              >
                {filterText}
              </span>
            );
          })}
        </div>
      </div>

      <ViewerHeader headerTitles={["Title", "Author", "Date", "Status"]} />

      {posts?.length > 0 ? (
        <div>
          {loading ? (
            <div className="p-4 flex items-center justify-center">
              <Spinner type="black-loader" />
            </div>
          ) : (
            posts?.map((p) => {
              return <PostCard key={p.id} post={p} />;
            })
          )}
        </div>
      ) : (
        <div>
          {loading ? (
            <div className="p-4 flex items-center justify-center">
              <Spinner type="black-loader" />
            </div>
          ) : (
            <p className="w-full text-center lg:text-start text-xl lg:text-2xl p-4">
              No results
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default PostsViewer;
