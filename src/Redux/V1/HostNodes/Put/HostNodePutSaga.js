import { takeEvery, put } from "redux-saga/effects";
import HOSTNODE from "Redux/V1/HostNodes/Put/HostNodePutActionType";
import HostNodePutAction from "Redux/V1/HostNodes/Put/HostNodePutAction";
import HostNodeService from "Services/V1/HostNodeService";
import ToastHelper from "Helpers/ToastHelper";

function* hostNodePut(data) {
	try {
		const response = yield HostNodeService.put(
			data.request.form,
			data.request.id
		);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(HostNodePutAction.hostNodePutSuccess(response.data));
		} else {
			ToastHelper.error(response.error.message);
			yield put(HostNodePutAction.hostNodePutFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* HostNodePutSaga() {
	yield takeEvery(HOSTNODE.HOSTNODE_PUT, hostNodePut);
}
