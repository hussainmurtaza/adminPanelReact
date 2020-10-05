import USER_DETAILS from "Redux/V1/Users/First/UserFirstActionType";

const userDetails = (
	state = {
		loading: false,
		user: {},
		err_mess: null,
	},
	action
) => {
	switch (action.type) {
		case USER_DETAILS.USER_DETAILS_GET:
			return {
				...state,
				loading: true,
			};
		case USER_DETAILS.USER_DETAILS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.response.user,
			};
		case USER_DETAILS.USER_DETAILS_GET_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default userDetails;
