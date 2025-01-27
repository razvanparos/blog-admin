export const SET_POSTS_COUNT = "SET_POSTS_COUNT";

class PostsActions {
    static #dispatch;
  
    static registerActions(dispatch) {
      this.#dispatch = dispatch;
    }
  
    static setPostsCount(postsCount) {
      this.#dispatch({
        type: SET_POSTS_COUNT,
        payload: {
          postsCount,
        },
      });
    }

  }
  
  export default PostsActions;
  