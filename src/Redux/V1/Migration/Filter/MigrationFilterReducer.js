import MIGRATION from "Redux/V1/Migration/Filter/MigrationFilterActionType";

const MigrationFilterReducer = (
	state = {
		loading: false,
		success: false,
		migrations: [],
		pagination: "",
	},
	action
) => {
	switch (action.type) {
		case MIGRATION.MIGRATIONS_FILTER:
			return {
				...state,
				loading: true,
				error: null,
			};
		case MIGRATION.MIGRATIONS_FILTER_SUCCESS:
			return {
				...state,
				loading: false,
				migrations: action.response.migrations,
				pagination: action.response.pagination,
			};
		case MIGRATION.MIGRATIONS_FILTER_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default MigrationFilterReducer;
