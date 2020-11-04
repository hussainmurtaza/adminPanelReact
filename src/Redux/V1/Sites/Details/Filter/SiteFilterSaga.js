import { takeEvery, put } from "redux-saga/effects";
import SITES from "Redux/V1/Sites/Details/Filter/SiteFilterActionType";
import SitesAction from "Redux/V1/Sites/Details/Filter/SiteFilterAction";
import SiteService from "Services/V1/SiteService";

function* siteFilter(data) {
	try {
		const response = yield SiteService.filter(data.request);
		if (response.success) {
			yield put(SitesAction.filterSitesSuccess(response.data));
		} else {
			yield put(SitesAction.filterSitesFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* SiteFilterSaga() {
	yield takeEvery(SITES.FILTER_SITES, siteFilter);
}
