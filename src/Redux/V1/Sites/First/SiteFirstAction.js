import SITE_DETAILS from "Redux/V1/Sites/First/SiteFirstActionType";

const SiteDetailAction = {
	siteDetail,
	siteDetailSuccess,
	siteDetailFailed,
};

function siteDetail(data) {
	return {
		type: SITE_DETAILS.SITE_DETAILS_GET,
		request: data,
	};
}
function siteDetailSuccess(data) {
	return {
		type: SITE_DETAILS.SITE_DETAILS_GET_SUCCESS,
		response: data,
	};
}
function siteDetailFailed(data) {
	return {
		type: SITE_DETAILS.SITE_DETAILS_GET_FAILED,
		response: data,
	};
}

export default SiteDetailAction;
