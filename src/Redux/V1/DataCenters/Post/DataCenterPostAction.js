import DATACENTER from "Redux/V1/DataCenters/Post/DataCenterPostActionType";

const DataCenterPostAction = {
	postDataCenters,
	postDataCentersSuccess,
	postDataCentersFailed,
};

function postDataCenters(data) {
	return {
		type: DATACENTER.DATACENTER_POST,
		request: data,
	};
}
function postDataCentersSuccess(data) {
	return {
		type: DATACENTER.DATACENTER_POST_SUCCESS,
		response: data,
	};
}
function postDataCentersFailed(data) {
	return {
		type: DATACENTER.DATACENTER_POST_FAILED,
		response: data,
	};
}

export default DataCenterPostAction;
