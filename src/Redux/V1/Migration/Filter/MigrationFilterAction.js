import MIGRATION from "Redux/V1/Migration/Filter/MigrationFilterActionType";

const MigrationsFilterAction = {
	filterMigrations,
	filterMigrationsSuccess,
	filterMigrationsFailed,
};

function filterMigrations(data) {
	return {
		type: MIGRATION.MIGRATIONS_FILTER,
		request: data,
	};
}
function filterMigrationsSuccess(data) {
	return {
		type: MIGRATION.MIGRATIONS_FILTER_SUCCESS,
		response: data,
	};
}
function filterMigrationsFailed(data) {
	return {
		type: MIGRATION.MIGRATIONS_FILTER_FAILED,
		response: data,
	};
}

export default MigrationsFilterAction;
