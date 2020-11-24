import { takeEvery, put } from "redux-saga/effects";
import HOSTNODE from "Redux/V1/HostNodes/ToggleStatus/HostNodeStatusActionType";
import HostNodeStatusAction from "Redux/V1/HostNodes/ToggleStatus/HostNodeStatusAction";
import HostNodeService from "Services/V1/HostNodeService";
import ToastHelper from "Helpers/ToastHelper";
import HostNodesAction from "Redux/V1/HostNodes/Get/HostNodeGetAction";

function* hostNodeStatus(data) {
	try {
		const response = yield HostNodeService.hostNodeStatus(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(
				HostNodeStatusAction.hostNodeStatusSuccess(response.data)
			);
			yield put(HostNodesAction.getHostNodes(response.data));
		} else {
			ToastHelper.error(response.error.message);
			yield put(
				HostNodeStatusAction.hostNodeStatusFailed(response.error)
			);
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* HostNodeStatusSaga() {
	yield takeEvery(HOSTNODE.HOSTNODE_STATUS, hostNodeStatus);
}
