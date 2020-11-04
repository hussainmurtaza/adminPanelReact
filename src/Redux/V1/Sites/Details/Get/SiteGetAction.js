import SITES from "Redux/V1/Sites/Details/Get/SiteGetActionType";

const SitesAction = {
	getSites,
	getSitesSuccess,
	getSitesFailed,
};

function getSites() {
	return {
		type: SITES.GET_SITES,
	};
}
function getSitesSuccess(data) {
	return {
		type: SITES.GET_SITES_SUCCESS,
		response: data,
	};
}
function getSitesFailed(data) {
	return {
		type: SITES.GET_SITES_FAILED,
		response: data,
	};
}

export default SitesAction;
