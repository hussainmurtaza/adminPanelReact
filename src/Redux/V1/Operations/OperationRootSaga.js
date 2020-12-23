import { all } from "redux-saga/effects";
import { cachePutSaga } from "Redux/V1/Operations/CacheClear/Put/CachePutSaga";
import { permissionsGetSaga } from "Redux/V1/Operations/PermissionReset/Get/PermissionGetSaga";

export default function* OperationRootSaga() {
    yield all([cachePutSaga(), permissionsGetSaga()]);
}
