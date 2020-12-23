import { takeEvery, put } from "redux-saga/effects";
import MIGRATION from "Redux/V1/Migration/Put/MigrationPutActionType";
import MigrationPutAction from "Redux/V1/Migration/Put/MigrationPutAction";
import MigrationService from "Services/V1/MigrationService";
import ToastHelper from "Helpers/ToastHelper";

function* migrationPut(data) {
	try {
		const response = yield MigrationService.put(
			data.request.form,
			data.request.id
		);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(MigrationPutAction.migrationPutSuccess(response.data));
		} else {
			ToastHelper.error(response.error.message);
			yield put(MigrationPutAction.migrationPutFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* MigrationPutSaga() {
	yield takeEvery(MIGRATION.MIGRATION_PUT, migrationPut);
}
