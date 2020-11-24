import DATACENTER from "Redux/V1/DataCenters/Put/DataCenterPutActionType";

const DataCenterPutAction = {
	dataCenterPut,
	dataCenterPutSuccess,
	dataCenterPutFailed,
};

function dataCenterPut(data) {
	return {
		type: DATACENTER.DATACENTER_PUT,
		request: data,
	};
}
function dataCenterPutSuccess(data) {
	return {
		type: DATACENTER.DATACENTER_PUT_SUCCESS,
		response: data,
	};
}
function dataCenterPutFailed(data) {
	return {
		type: DATACENTER.DATACENTER_PUT_FAILED,
		response: data,
	};
}

export default DataCenterPutAction;
