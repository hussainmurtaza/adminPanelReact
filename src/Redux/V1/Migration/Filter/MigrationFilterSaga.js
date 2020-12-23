import { takeEvery, put } from "redux-saga/effects";
import MIGRATION from "Redux/V1/Migration/Filter/MigrationFilterActionType";
import MigrationsFilterAction from "Redux/V1/Migration/Filter/MigrationFilterAction";
import MigrationService from "Services/V1/MigrationService";

function* migrationFilter(data) {
	try {
		const response = yield MigrationService.filter(data.request);
		if (response.success) {
			yield put(
				MigrationsFilterAction.filterMigrationsSuccess(response.data)
			);
		} else {
			yield put(
				MigrationsFilterAction.filterMigrationsFailed(response.error)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* MigrationFilterSaga() {
	yield takeEvery(MIGRATION.MIGRATIONS_FILTER, migrationFilter);
}
