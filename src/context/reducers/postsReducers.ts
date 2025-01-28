import { SET_POSTS_COUNT } from "../actions/posts-actions.ts";
import { SET_POSTS_SEARCH } from "../actions/posts-actions.ts";

const postsReducer = (state, action) => {
    const  postsCount  = action.payload.postsCount;
    const  postsSearch  = action.payload.searchValue;
  
    switch (action.type) {
      case SET_POSTS_COUNT:
        return { ...state, postsCount };
      case SET_POSTS_SEARCH:
        return { ...state, postsSearch };
      default:
        return false;
    }
  };
  
  export default postsReducer;