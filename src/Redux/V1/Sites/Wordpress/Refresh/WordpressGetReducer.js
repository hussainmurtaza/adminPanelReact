import WORDPRESS from "Redux/V1/Sites/Wordpress/Refresh/WordpressGetActionType";

const WordpressRefreshReducer = (
	state = {
		loading: false,
		success: false,
		wordpress_refresh: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case WORDPRESS.WORDPRESS_REFRESH:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case WORDPRESS.WORDPRESS_REFRESH_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				wordpress_refresh: action.response.wordpress_refresh,
			};
		case WORDPRESS.WORDPRESS_REFRESH_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default WordpressRefreshReducer;
