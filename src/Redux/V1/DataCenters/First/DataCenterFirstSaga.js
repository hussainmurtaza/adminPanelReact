import { takeEvery, put } from "redux-saga/effects";
import DATACENTER from "Redux/V1/DataCenters/First/DataCenterFirstActionType";
import DataCenterFirstAction from "Redux/V1/DataCenters/First/DataCenterFirstAction";
import DataCenterService from "Services/V1/DataCenterService";

function* dataCenterSaga(data) {
	try {
		const response = yield DataCenterService.get(data.request);
		if (response.success) {
			yield put(
				DataCenterFirstAction.dataCenterFirstSuccess(response.data)
			);
		} else {
			yield put(
				DataCenterFirstAction.dataCenterFirstFailed(
					response.error.message
				)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* DataCenterFirstSaga() {
	yield takeEvery(DATACENTER.DATACENTER_FIRST, dataCenterSaga);
}
