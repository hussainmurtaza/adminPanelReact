import DATACENTER from "Redux/V1/DataCenters/First/DataCenterFirstActionType";

const DataCenterFirstAction = {
	dataCenterFirst,
	dataCenterFirstSuccess,
	dataCenterFirstFailed,
};

function dataCenterFirst(data) {
	return {
		type: DATACENTER.DATACENTER_FIRST,
		request: data,
	};
}
function dataCenterFirstSuccess(data) {
	return {
		type: DATACENTER.DATACENTER_FIRST_SUCCESS,
		response: data,
	};
}
function dataCenterFirstFailed(data) {
	return {
		type: DATACENTER.DATACENTER_FIRST_FAILED,
		response: data,
	};
}

export default DataCenterFirstAction;
