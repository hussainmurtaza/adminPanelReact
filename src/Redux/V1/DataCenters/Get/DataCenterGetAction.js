import DATACENTER from "Redux/V1/DataCenters/Get/DataCenterGetActionType";

const DataCentersAction = {
	getDataCenters,
	getDataCentersSuccess,
	getDataCentersFailed,
};

function getDataCenters() {
	return {
		type: DATACENTER.DATACENTERS_GET,
	};
}
function getDataCentersSuccess(data) {
	return {
		type: DATACENTER.DATACENTERS_GET_SUCCESS,
		response: data,
	};
}
function getDataCentersFailed(data) {
	return {
		type: DATACENTER.DATACENTERS_GET_FAILED,
		response: data,
	};
}

export default DataCentersAction;
