import { combineReducers } from "redux";
import WordpressUpdateGetReducer from "Redux/V1/WordpressUpdateAll/Get/UpdateAllGetReducer";
import WordpressUpdatePutReducer from "Redux/V1/WordpressUpdateAll/Put/UpdateAllPutReducer";

const WordpressUpdateAllRootReducer = combineReducers({
	wpUpdate_get: WordpressUpdateGetReducer,
	wpUpdate_put: WordpressUpdatePutReducer,
});
export default WordpressUpdateAllRootReducer;
