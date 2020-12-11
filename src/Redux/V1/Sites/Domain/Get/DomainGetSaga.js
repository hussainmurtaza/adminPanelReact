import { takeEvery } from "redux-saga/effects";
import DOMAIN from "Redux/V1/Sites/Domain/Get/DomainGetActionType";

function* domainGet() {
	// try {
	// 	const response = yield ContainerService.search();
	// 	if (response.success) {
	// 		yield put(ContainerGetAction.getContainersSuccess(response.data));
	// 	} else {
	// 		yield put(ContainerGetAction.getContainersFailed(response.error));
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// }
}

export function* DomainGetSaga() {
	yield takeEvery(DOMAIN.DOMAIN_GET, domainGet);
}
