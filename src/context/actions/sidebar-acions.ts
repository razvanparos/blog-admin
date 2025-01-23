export const SIDEBAR_TOGGLE = "SIDEBAR_TOGGLE";

class SideBarActions {
    static #dispatch;
  
    static registerActions(dispatch) {
      this.#dispatch = dispatch;
    }
  
    static toggleSidebar(sidebar) {
      this.#dispatch({
        type: SIDEBAR_TOGGLE,
        payload: {
          sidebar,
        },
      });
    }

  }
  
  export default SideBarActions;
  