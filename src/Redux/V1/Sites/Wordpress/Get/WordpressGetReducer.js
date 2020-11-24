import WORDPRESS from "Redux/V1/Sites/Wordpress/Get/WordpressGetActionType";

const WordpressDetails = (
	state = {
		loading: false,
		wordpress: [],
		core: {},
		theme: [],
		plugin: [],
	},
	action
) => {
	switch (action.type) {
		case WORDPRESS.WORDPRESS_GET:
			return {
				...state,
				loading: true,
				error: null,
			};
		case WORDPRESS.WORDPRESS_GET_SUCCESS:
			console.log(action);
			return {
				...state,
				loading: false,
				wordpress: action.response.updates,
				core: action.response.updates.core,
				theme: action.response.updates.theme,
				plugin: action.response.updates.plugin,
			};
		case WORDPRESS.WORDPRESS_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default WordpressDetails;
