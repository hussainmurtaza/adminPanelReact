import SITES from "Redux/V1/Sites/Details/Get/SiteGetActionType";

const SitesDetails = (
	state = {
		loading: false,
		sites: [],
	},
	action
) => {
	switch (action.type) {
		case SITES.GET_SITES:
			return {
				...state,
				loading: true,
				error: null,
			};
		case SITES.GET_SITES_SUCCESS:
			return {
				...state,
				loading: false,
				sites: action.response.sites,
			};
		case SITES.GET_SITES_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default SitesDetails;
