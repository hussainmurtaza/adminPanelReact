import { takeEvery, put } from "redux-saga/effects";
import HOSTNODE from "Redux/V1/HostNodes/Post/HostNodeActionType";
import HostNodePostAction from "Redux/V1/HostNodes/Post/HostNodePostAction";
import HostNodeService from "Services/V1/HostNodeService";
import ToastHelper from "Helpers/ToastHelper";

function* hostNodePOST(data) {
	try {
		const response = yield HostNodeService.post(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(HostNodePostAction.postHostNodeSuccess(response.data));
			setTimeout(function () {
				window.location.href = "/hostnodes";
			}, 1000);
		} else {
			ToastHelper.error(response.error.message);
			yield put(HostNodePostAction.postHostNodeFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* HostNodePostSaga() {
	yield takeEvery(HOSTNODE.HOSTNODE_POST, hostNodePOST);
}
