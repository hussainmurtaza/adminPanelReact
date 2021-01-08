import { all } from "redux-saga/effects";
import { UpdateAllGetSaga } from "Redux/V1/WordpressUpdateAll/Get/UpdateAllGetSaga";
import { UpdateAllPutSaga } from "Redux/V1/WordpressUpdateAll/Put/UpdateAllPutSaga";

function* WordpressUpdateAllRootSaga() {
	yield all([UpdateAllGetSaga(), UpdateAllPutSaga()]);
}
export default WordpressUpdateAllRootSaga;
