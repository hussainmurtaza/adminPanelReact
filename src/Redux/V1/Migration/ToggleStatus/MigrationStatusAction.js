import MIGRATION from "Redux/V1/Migration/ToggleStatus/MigrationStatusActionType";

const MigrationStatusAction = {
	migrationStatus,
	migrationStatusSuccess,
	migrationStatusFailed,
};

function migrationStatus(data) {
	return {
		type: MIGRATION.MIGRATION_STATUS,
		request: data,
	};
}
function migrationStatusSuccess(data) {
	return {
		type: MIGRATION.MIGRATION_STATUS_SUCCESS,
		response: data,
	};
}
function migrationStatusFailed(data) {
	return {
		type: MIGRATION.MIGRATION_STATUS_FAILED,
		response: data,
	};
}

export default MigrationStatusAction;
