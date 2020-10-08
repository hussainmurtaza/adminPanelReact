import { takeEvery, put } from "redux-saga/effects";
import SITE_DETAILS from "Redux/V1/Sites/First/SiteFirstActionType";
import SiteDetailsAction from "Redux/V1/Sites/First/SiteFirstAction";
import SiteService from "Services/V1/SiteService";

function* siteDetails(data) {
	try {
		const response = yield SiteService.get(data.request);
		if (response.success) {
			yield put(SiteDetailsAction.siteDetailSuccess(response.data));
		} else {
			yield put(
				SiteDetailsAction.siteDetailFailed(response.error.message)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* SiteFirstSaga() {
	yield takeEvery(SITE_DETAILS.SITE_DETAILS_GET, siteDetails);
}
