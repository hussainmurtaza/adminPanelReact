import MIGRATION from "Redux/V1/Migration/First/MigrationFirstActionType";

const MigrationFirstReducer = (
	state = {
		loading: false,
		migration: {
			customer: {},
			site: {},
		},
		err_mess: null,
		fetched: false,
	},
	action
) => {
	switch (action.type) {
		case MIGRATION.MIGRATION_FIRST:
			return {
				...state,
				loading: true,
				fetched: false,
			};
		case MIGRATION.MIGRATION_FIRST_SUCCESS:
			return {
				...state,
				loading: false,
				migration: action.response.migration,
				fetched: true,
			};
		case MIGRATION.MIGRATION_FIRST_FAILED:
			return {
				...state,
				loading: false,
				err_mess: action.response,
				fetched: true,
			};
		default:
			return state;
	}
};

export default MigrationFirstReducer;
