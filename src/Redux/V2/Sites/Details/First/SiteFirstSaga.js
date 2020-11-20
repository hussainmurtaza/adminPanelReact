import { takeEvery, put } from "redux-saga/effects";
import SITE from "Redux/V2/Sites/Details/First/SiteFirstActionType";
import SiteFirstAction from "Redux/V2/Sites/Details/First/SiteFirstAction";
import SiteService from "Services/V2/SiteService";

function* siteDetails(data) {
	try {
		const response = yield SiteService.get(data.request);
		if (response.success) {
			yield put(SiteFirstAction.siteFirstSuccess(response.data));
		} else {
			yield put(SiteFirstAction.siteFirstFailed(response.error.message));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* SiteFirstSaga() {
	yield takeEvery(SITE.SITE_FIRST, siteDetails);
}
