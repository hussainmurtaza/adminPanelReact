import { combineReducers } from "redux";
import LoginReducer from "Redux/V1/Auth/Login/LoginPostReducer";
import UserGetReducer from "Redux/V1/Users/Get/UserGetReducer";
import UserPostReducer from "Redux/V1/Users/Post/UserPostReducer";

export default combineReducers({
	login: LoginReducer,
	users: UserGetReducer,
	users_post: UserPostReducer,
});
