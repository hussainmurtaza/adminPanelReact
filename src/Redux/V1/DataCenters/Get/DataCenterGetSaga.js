import { takeEvery, put } from "redux-saga/effects";
import DATACENTER from "Redux/V1/DataCenters/Get/DataCenterGetActionType";
import DataCentersAction from "Redux/V1/DataCenters/Get/DataCenterGetAction";
import DataCenterService from "Services/V1/DataCenterService";

function* dataCenterGet() {
	try {
		const response = yield DataCenterService.getAll();
		if (response.success) {
			yield put(DataCentersAction.getDataCentersSuccess(response.data));
		} else {
			yield put(DataCentersAction.getDataCentersFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* DataCenterGetSaga() {
	yield takeEvery(DATACENTER.DATACENTERS_GET, dataCenterGet);
}
