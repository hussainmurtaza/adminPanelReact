import { takeEvery, put } from "redux-saga/effects";
import HOSTNODE from "Redux/V1/HostNodes/First/HostNodeFirstActionType";
import HostNodeFirstAction from "Redux/V1/HostNodes/First/HostNodeFirstAction";
import HostNodeService from "Services/V1/HostNodeService";

function* hostNodeDetails(data) {
	try {
		const response = yield HostNodeService.get(data.request);
		if (response.success) {
			yield put(HostNodeFirstAction.hostNodeFirstSuccess(response.data));
		} else {
			yield put(
				HostNodeFirstAction.hostNodeFirstFailed(response.error.message)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* HostNodeFirstSaga() {
	yield takeEvery(HOSTNODE.HOSTNODE_FIRST, hostNodeDetails);
}
