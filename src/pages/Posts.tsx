import React, { useEffect, useState, useContext } from "react";
import {getAllPosts} from "../services/postsService.ts";
import PostsViewer from "../components/PostsViewer.tsx";
import SearchBarComponent from "../components/SearchBarComponent.tsx";
import { AppContext } from "../context/AppContext.tsx";

const Posts = () => {
  const { state } = useContext(AppContext);
  const { postsSearch } = state;
  const [posts, setPosts] = useState();
  const [originalPosts, setOriginalPosts] = useState();
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    let posts = await getAllPosts();
    setPosts(posts);
    setOriginalPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (postsSearch.length > 2) {
      const handler = setTimeout(() => {
        const filteredPosts = originalPosts?.filter((post) => {
          const normalizedTitle = post?.title.toLowerCase();
          const normalizedSearchWords = postsSearch.toLowerCase().split(/\s+/);
          return normalizedSearchWords.every((word) =>
            normalizedTitle.includes(word)
          );
        });
        setPosts(filteredPosts);
      }, 300);
      return () => {
        clearTimeout(handler);
      };
    } else {
      setPosts(originalPosts);
    }
  }, [postsSearch]);

  return (
    <div className="w-full p-2 lg:flex lg:flex-col overflow-y-scroll h-[calc(100vh-75px)] md:h-full gap-y-4">
      <SearchBarComponent />
      <PostsViewer posts={posts} loading={loading} />
    </div>
  );
};

export default Posts;
