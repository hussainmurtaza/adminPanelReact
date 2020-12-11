import { takeEvery } from "redux-saga/effects";
import CONTAINER from "Redux/V1/Container/Get/ContainerGetActionType";

function* containerGet() {
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

export function* ContainerGetSaga() {
	yield takeEvery(CONTAINER.CONTAINER_GET, containerGet);
}
