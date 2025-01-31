import { SET_POSTS_COUNT } from "../actions/posts-actions.ts";

const postsReducer = (state, action) => {
    const  postsCount  = action.payload.postsCount;
    
    switch (action.type) {
      case SET_POSTS_COUNT:
        return { ...state, postsCount };
      default:
        return false;
    }
  };
  
  export default postsReducer;