import { takeEvery, put } from "redux-saga/effects";
import MIGRATION from "Redux/V1/Migration/ToggleStatus/MigrationStatusActionType";
import MigrationStatusAction from "Redux/V1/Migration/ToggleStatus/MigrationStatusAction";
import MigrationService from "Services/V1/MigrationService";
import ToastHelper from "Helpers/ToastHelper";
import MigrationsAction from "Redux/V1/Migration/Get/MigrationGetAction";

function* migrationStatus(data) {
	try {
		const response = yield MigrationService.status(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(
				MigrationStatusAction.migrationStatusSuccess(response.data)
			);
			yield put(MigrationsAction.getMigrations(response.data));
		} else {
			ToastHelper.error(response.error.message);
			yield put(
				MigrationStatusAction.migrationStatusFailed(response.error)
			);
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* MigrationStatusSaga() {
	yield takeEvery(MIGRATION.MIGRATION_STATUS, migrationStatus);
}
