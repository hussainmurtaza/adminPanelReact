import { takeEvery, put } from "redux-saga/effects";
import HOSTNODE from "Redux/V1/HostNodes/Delete/HostNodeDeleteActionType";
import HostNodeDeleteAction from "Redux/V1/HostNodes/Delete/HostNodeDeleteAction";
import HostNodesAction from "Redux/V1/HostNodes/Get/HostNodeGetAction";
import HostNodeService from "Services/V1/HostNodeService";
import ToastHelper from "Helpers/ToastHelper";

function* hostNodeDELETE(data) {
	try {
		const response = yield HostNodeService.hostNodeDelete(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(HostNodeDeleteAction.deleteHostNodeSuccess(response.data));
			yield put(HostNodesAction.getHostNodes());
		} else {
			ToastHelper.error(response.error.message);
			yield put(HostNodeDeleteAction.deleteHostNodeFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* hostNodeDeleteSaga() {
	yield takeEvery(HOSTNODE.HOSTNODE_DELETE, hostNodeDELETE);
}
