import { takeEvery, put } from "redux-saga/effects";
import HOSTNODE from "Redux/V1/HostNodes/Get/HostNodeGetActionType";
import HostNodesAction from "Redux/V1/HostNodes/Get/HostNodeGetAction";
import HostNodeService from "Services/V1/HostNodeService";

function* hostNodeGet() {
	try {
		const response = yield HostNodeService.getAll();
		if (response.success) {
			yield put(HostNodesAction.getHostNodesSuccess(response.data));
		} else {
			yield put(HostNodesAction.getHostNodesFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* HostNodeGetSaga() {
	yield takeEvery(HOSTNODE.HOSTNODES_GET, hostNodeGet);
}
