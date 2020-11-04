import WORDPRESS from "Redux/V1/Sites/Wordpress/Put/WordpressPutActionType";

const WordpressUpdateReducer = (
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
		case WORDPRESS.WORDPRESS_UPDATE_PUT:
			return {
				...state,
				loading: true,
				err_mess: null,
				update_slug: action.request.slug,
			};
		case WORDPRESS.WORDPRESS_UPDATE_PUT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				wordpress_update: action.response,
				update_slug: null,
			};
		case WORDPRESS.WORDPRESS_UPDATE_PUT_FAILED:
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

export default WordpressUpdateReducer;
