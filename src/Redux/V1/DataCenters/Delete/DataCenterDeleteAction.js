import DATACENTER from "Redux/V1/DataCenters/Delete/DataCenterDeleteActionType";

const DataCenterDeleteAction = {
	deleteDataCenter,
	deleteDataCenterSuccess,
	deleteDataCenterFailed,
};

function deleteDataCenter(data) {
	return {
		type: DATACENTER.DATACENTER_DELETE,
		request: data,
	};
}
function deleteDataCenterSuccess(data) {
	return {
		type: DATACENTER.DATACENTER_DELETE_SUCCESS,
		response: data,
	};
}
function deleteDataCenterFailed(data) {
	return {
		type: DATACENTER.DATACENTER_DELETE_FAILED,
		response: data,
	};
}

export default DataCenterDeleteAction;
