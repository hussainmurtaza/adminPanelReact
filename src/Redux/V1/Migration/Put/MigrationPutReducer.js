import MIGRATION from "Redux/V1/Migration/Put/MigrationPutActionType";

const MigrationPutReducer = (
	state = {
		loading: false,
		success: false,
		migration: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case MIGRATION.MIGRATION_PUT:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case MIGRATION.MIGRATION_PUT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				migration: action.response.migration,
			};
		case MIGRATION.MIGRATION_PUT_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default MigrationPutReducer;
