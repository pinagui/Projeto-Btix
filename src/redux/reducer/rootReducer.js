import { combineReducers } from "redux";
import commentsPost from "./commentsPost";
import postList from "./postList";
import userInfo from "./userInfo";
import userList from "./userList";

const rootReducer = combineReducers({
  commentsPost,
  postList,
  userList,
  userInfo,
});

export default rootReducer;