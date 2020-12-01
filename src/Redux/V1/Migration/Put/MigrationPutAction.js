import MIGRATION from "Redux/V1/Migration/Put/MigrationPutActionType";

const MigrationPutAction = {
	migrationPut,
	migrationPutSuccess,
	migrationPutFailed,
};

function migrationPut(data) {
	return {
		type: MIGRATION.MIGRATION_PUT,
		request: data,
	};
}
function migrationPutSuccess(data) {
	return {
		type: MIGRATION.MIGRATION_PUT_SUCCESS,
		response: data,
	};
}
function migrationPutFailed(data) {
	return {
		type: MIGRATION.MIGRATION_PUT_FAILED,
		response: data,
	};
}

export default MigrationPutAction;
