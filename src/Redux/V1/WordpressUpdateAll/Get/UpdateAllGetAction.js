import UPDATEALL from "Redux/V1/WordpressUpdateAll/ActionType";

const UpdateAllGet = (data) => {
    return {
        type: UPDATEALL.UPDATEALL_GET,
        request: data,
    };
};
const UpdateAllGetSuccess = (data) => {
    return {
        type: UPDATEALL.UPDATEALL_GET_SUCCESS,
        response: data,
    };
};
const UpdateAllGetFailed = (data) => {
    return {
        type: UPDATEALL.UPDATEALL_GET_FAILED,
        response: data,
    };
};
const UpdateAllGetAction = {
    UpdateAllGet,
    UpdateAllGetSuccess,
    UpdateAllGetFailed,
};
export default UpdateAllGetAction;
