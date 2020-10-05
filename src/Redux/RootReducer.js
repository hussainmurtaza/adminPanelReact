import { combineReducers } from "redux";
import LoginReducer from "Redux/V1/Auth/Login/LoginPostReducer";
import UserGetReducer from "Redux/V1/Users/Get/UserGetReducer";
import UserPostReducer from "Redux/V1/Users/Post/UserPostReducer";
import UserDeleteReducer from "Redux/V1/Users/Delete/UserDeleteReducer";
import UserFirstReducer from "Redux/V1/Users/First/UserFirstReducer";
import RoleGetReducer from "Redux/V1/Roles/Get/RoleGetReducer";
import RolePostReducer from "Redux/V1/Roles/Post/RolePostReducer";

export default combineReducers({
	login: LoginReducer,
	users: UserGetReducer,
	users_post: UserPostReducer,
	user_delete: UserDeleteReducer,
	user_first: UserFirstReducer,
	roles: RoleGetReducer,
	roles_post: RolePostReducer,
});
