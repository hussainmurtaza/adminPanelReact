import ONECLICKLOGIN from "Redux/V1/Sites/OneClickLogin/OneClickLoginActionType";

const OneClickLoginReducer = (
	state = {
		loading: false,
		one_click: [],
	},
	action
) => {
	switch (action.type) {
		case ONECLICKLOGIN.ONECLICKLOGIN_GET:
			return {
				...state,
				loading: true,
				error: null,
			};
		case ONECLICKLOGIN.ONECLICKLOGIN_GET_SUCCESS:
			return {
				...state,
				loading: false,
				one_click: action.response,
			};
		case ONECLICKLOGIN.ONECLICKLOGIN_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default OneClickLoginReducer;
