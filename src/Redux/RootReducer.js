import { combineReducers } from "redux";
import LoginReducer from "Redux/V1/Auth/Login/LoginPostReducer";
export default combineReducers({
    login: LoginReducer,
});
