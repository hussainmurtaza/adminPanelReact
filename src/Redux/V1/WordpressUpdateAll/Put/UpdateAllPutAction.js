import UPDATEALL from "Redux/V1/WordpressUpdateAll/ActionType";

const updateAllPut = (data) => {
	return {
		type: UPDATEALL.UPDATEALL_PUT,
		request: data,
	};
};
const updateAllPutSuccess = (data) => {
	return {
		type: UPDATEALL.UPDATEALL_PUT_SUCCESS,
		response: data,
	};
};
const updateAllPutFailed = (data) => {
	return {
		type: UPDATEALL.UPDATEALL_PUT_FAILED,
		response: data,
	};
};

const UpdateAllPutAction = {
	updateAllPut,
	updateAllPutSuccess,
	updateAllPutFailed,
};
export default UpdateAllPutAction;
