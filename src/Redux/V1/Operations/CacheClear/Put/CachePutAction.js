import OPERATION from "Redux/V1/Operations/ActionType";

const cachePut = (data) => {
    return {
        type: OPERATION.CACHE_PUT,
        request: data,
    };
};
const cachePutSuccess = (data) => {
    return {
        type: OPERATION.CACHE_PUT_SUCCESS,
        response: data,
    };
};
const cachePutFailed = (data) => {
    return {
        type: OPERATION.CACHE_PUT_FAILED,
        response: data,
    };
};
const CacheClearAction = {
    cachePut,
    cachePutSuccess,
    cachePutFailed,
};
export default CacheClearAction;
