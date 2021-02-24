import { combineReducers } from "redux";
import RedisDetailReducer from "Redux/V1/Sites/Features/Operations/Redis/First/RedisFirstReducer";
import RedisToggleReducer from "Redux/V1/Sites/Features/Operations/Redis/RedisToggle/RedisToggleReducer";
import RedisDeleteReducer from "Redux/V1/Sites/Features/Operations/Redis/RedisDelete/RedisDeleteReducer";
import RedisCacheReducer from "Redux/V1/Sites/Features/Operations/Redis/RedisCache/RedisCacheReducer";

const OperationRootReducer = combineReducers({
    redisFirst: RedisDetailReducer,
    redisToggle: RedisToggleReducer,
    redisDelete: RedisDeleteReducer,
    redisCache: RedisCacheReducer,
});
export default OperationRootReducer;
