import SITE from "Redux/V1/Sites/First/SiteFirstActionType";

const SiteFirstAction = {
	siteFirst,
	siteFirstSuccess,
	siteFirstFailed,
};

function siteFirst(data) {
	return {
		type: SITE.SITE_FIRST,
		request: data,
	};
}
function siteFirstSuccess(data) {
	return {
		type: SITE.SITE_FIRST_SUCCESS,
		response: data,
	};
}
function siteFirstFailed(data) {
	return {
		type: SITE.SITE_FIRST_FAILED,
		response: data,
	};
}

export default SiteFirstAction;
