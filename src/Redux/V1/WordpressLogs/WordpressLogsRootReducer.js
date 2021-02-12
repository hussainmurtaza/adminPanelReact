import { combineReducers } from "redux";
import WordpressLogsReducer from "Redux/V1/WordpressLogs/Logs/WordpressLogsReducer";
import WordpressLogsApproveReducer from "Redux/V1/WordpressLogs/Approve/WordpressLogsApproveReducer";

const WordpressLogsRootReducer = combineReducers({
    list: WordpressLogsReducer,
    approve: WordpressLogsApproveReducer,
});
export default WordpressLogsRootReducer;
