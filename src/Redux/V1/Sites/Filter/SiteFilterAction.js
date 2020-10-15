import SITES from "Redux/V1/Sites/Filter/SiteFilterActionType";

const SitesFilterAction = {
	filterSites,
	filterSitesSuccess,
	filterSitesFailed,
};

function filterSites(data) {
	return {
		type: SITES.FILTER_SITES,
		request: data,
	};
}
function filterSitesSuccess(data) {
	return {
		type: SITES.FILTER_SITES_SUCCESS,
		response: data,
	};
}
function filterSitesFailed(data) {
	return {
		type: SITES.FILTER_SITES_FAILED,
		response: data,
	};
}

export default SitesFilterAction;