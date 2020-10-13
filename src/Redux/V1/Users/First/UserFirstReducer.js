import USER_DETAILS from "Redux/V1/Users/First/UserFirstActionType";

const userDetails = (
	state = {
		loading: false,
		user: {
			first_name: null,
			last_name: null,
			email: null,
			contacts: [{
				phone: null,
			}],
			roles: [],
			permissions: [],
		},
		err_mess: null,
		fetched: false,
	},
	action
) => {
	switch (action.type) {
		case USER_DETAILS.USER_DETAILS_GET:
			return {
				...state,
				loading: true,
				fetched: false,
			};
		case USER_DETAILS.USER_DETAILS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.response.user,
				fetched: true,
			};
		case USER_DETAILS.USER_DETAILS_GET_FAILED:
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

export default userDetails;
