import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./Auth/auth.reducer";
import { postReducer } from "./Post/post.reducer";
import commentReducer from "./Comment/comment.reducer";
import { reelsReducer } from "./Reels/reels.reducer";
import { messagesReducer } from "./Message/message.reducers";
import jobsReducer from "../pages/Jobs/jobs.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  post: postReducer,
  comment:commentReducer,
  reel:reelsReducer,
  chat:messagesReducer,
  jobs: jobsReducer,
});
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
