export const SET_POSTS_COUNT = "SET_POSTS_COUNT";
export const SET_POSTS_SEARCH = "SET_POSTS_SEARCH";
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
    static setPostsSearch(searchValue) {
      this.#dispatch({
        type: SET_POSTS_SEARCH,
        payload: {
          searchValue,
        },
      });
    }

  }
  
  export default PostsActions;
  