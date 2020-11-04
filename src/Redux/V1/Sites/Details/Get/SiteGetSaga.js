import { takeEvery, put } from "redux-saga/effects";
import SITES from "Redux/V1/Sites/Details/Get/SiteGetActionType";
import SitesAction from "Redux/V1/Sites/Details/Get/SiteGetAction";
import SiteService from "Services/V1/SiteService";

function* siteGet() {
	try {
		const response = yield SiteService.getAll();
		if (response.success) {
			yield put(SitesAction.getSitesSuccess(response.data));
		} else {
			yield put(SitesAction.getSitesFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* SiteGetSaga() {
	yield takeEvery(SITES.GET_SITES, siteGet);
}
