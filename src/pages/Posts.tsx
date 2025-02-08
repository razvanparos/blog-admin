import React, { useEffect, useState, useContext } from "react";
import { getAllPosts } from "../services/postsService.ts";
import PostsViewer from "../components/PostsViewer.tsx";
import SearchBarComponent from "../components/SearchBarComponent.tsx";
import { AppContext } from "../context/AppContext.tsx";
import PostsActions from "../context/actions/posts-actions.ts";

export interface PostType{
  author:string
  authorId:string
  content:string
  date:string
  id:string
  status:string
  title:string
}

const Posts = () => {
  const { state } = useContext(AppContext);
  const { userData } = state;
  const [postsSearch, setPostsSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [originalPosts, setOriginalPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("All");

  const fetchPosts = async () => {
    if (userData.length > 0) {
      setLoading(true);
      let posts = await getAllPosts() as PostType[];
      if (userData[0]?.role === "Contributor") {
        let currentUserPosts = posts.filter(
          (p) => p.authorId === localStorage.getItem("currentUser")
        );
        setPosts(currentUserPosts);
        setOriginalPosts(currentUserPosts);
        PostsActions.setPostsCount(currentUserPosts.length);
      } else {
        setPosts(posts);
        setOriginalPosts(posts);
        PostsActions.setPostsCount(posts.length);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchPosts();
  }, [userData]);

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

        if (filter === "All") {
          setPosts(filteredPosts);
        } else {
          let postsFilteredByStatus = filteredPosts?.filter(
            (post) => post.status === filter
          );
          setPosts(postsFilteredByStatus);
        }
      }, 300);
      return () => {
        clearTimeout(handler);
      };
    } else {
      if (filter === "All") {
        setPosts(originalPosts);
      } else {
        let postsFilteredByStatus = originalPosts?.filter(
          (post) => post.status === filter
        );
        setPosts(postsFilteredByStatus);
      }
    }
  }, [postsSearch, filter]);

  return (
    <div className="w-full p-2 lg:p-4 lg:flex lg:flex-col overflow-y-scroll h-[calc(100vh-75px)] md:h-full gap-y-4">
      <SearchBarComponent
        search={postsSearch}
        searchFunction={setPostsSearch}
      />
      <PostsViewer
        posts={posts}
        loading={loading}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};

export default Posts;
