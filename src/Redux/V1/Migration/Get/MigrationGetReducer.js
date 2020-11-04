import MIGRATION from "Redux/V1/Migration/Get/MigrationGetActionType";

const MigrationsDetails = (
	state = {
		loading: false,
		migrations: [],
	},
	action
) => {
	switch (action.type) {
		case MIGRATION.MIGRATIONS_GET:
			return {
				...state,
				loading: true,
				error: null,
			};
		case MIGRATION.MIGRATIONS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				migrations: action.response.migrations,
			};
		case MIGRATION.MIGRATIONS_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default MigrationsDetails;
