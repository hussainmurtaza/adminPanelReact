import USER from "Redux/V1/Users/First/UserFirstActionType";

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
		case USER.USER_FIRST:
			return {
				...state,
				loading: true,
				fetched: false,
			};
		case USER.USER_FIRST_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.response.user,
				fetched: true,
			};
		case USER.USER_FIRST_FAILED:
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
