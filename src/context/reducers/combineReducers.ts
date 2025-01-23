import sidebarReducer from "./sidebar-reducer.ts";

const allReducers = [sidebarReducer];

const combineReducers = (state, action) => {
  let result = false;

  for (let reducer of allReducers) {
    result = reducer(state, action);

    if (result) {
      break;
    }
  }

  if (result) {
    return result;
  } else {
    throw new Error(`No action named "${action.type}" was found.`);
  }
};

export default combineReducers;
