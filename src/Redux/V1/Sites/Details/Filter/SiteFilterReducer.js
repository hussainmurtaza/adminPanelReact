import SITES from "Redux/V1/Sites/Details/Filter/SiteFilterActionType";

const SitesDetails = (
	state = {
		loading: false,
		success: false,
		sites: [],
		pagination: "",
	},
	action
) => {
	switch (action.type) {
		case SITES.FILTER_SITES:
			return {
				...state,
				loading: true,
				error: null,
			};
		case SITES.FILTER_SITES_SUCCESS:
			return {
				...state,
				loading: false,
				sites: action.response.sites,
				pagination: action.response.pagination,
			};
		case SITES.FILTER_SITES_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default SitesDetails;
