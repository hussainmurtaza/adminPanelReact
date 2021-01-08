import UPDATEALL from "Redux/V1/WordpressUpdateAll/ActionType";

const UpdateAllPutReducer = (
	state = {
		loading: false,
		success: false,
		wordpress_update: [],
		update_slug: null,
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case UPDATEALL.UPDATEALL_PUT:
			return {
				...state,
				loading: true,
				err_mess: null,
				update_slug: action.request.slug,
			};
		case UPDATEALL.UPDATEALL_PUT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				wordpress_update: action.response,
				update_slug: null,
			};
		case UPDATEALL.UPDATEALL_PUT_FAILED:
			return {
				...state,
				loading: false,
				err_mess: action.response,
				update_slug: null,
			};
		default:
			return state;
	}
};

export default UpdateAllPutReducer;
