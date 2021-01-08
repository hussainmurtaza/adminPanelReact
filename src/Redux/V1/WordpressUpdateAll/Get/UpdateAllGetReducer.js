import UPDATEALL from "Redux/V1/WordpressUpdateAll/ActionType";

const UpdateAllGetReducer = (
	state = {
		loading: false,
		success: false,
		wordpress: [],
		// cores: [],
		// themes: [],
		// plugins: [],
		pagination: "",
	},
	action
) => {
	switch (action.type) {
		case UPDATEALL.UPDATEALL_GET:
			return {
				...state,
				loading: true,
				error: null,
			};
		case UPDATEALL.UPDATEALL_GET_SUCCESS:
			console.log(action);
			return {
				...state,
				loading: false,
				success: true,
				wordpress: action.response.content,
				pagination: action.response.pagination,
				// cores: action.response.content.cores,
				// themes: action.response.content.themes,
				// plugins: action.response.content.plugins,
			};
		case UPDATEALL.UPDATEALL_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default UpdateAllGetReducer;
