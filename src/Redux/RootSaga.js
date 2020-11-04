import { all } from "redux-saga/effects";
import LoginRootSaga from "Redux/V1/Auth/Login/LoginRootSaga";
import { UserGetSaga } from "Redux/V1/Users/Get/UserGetSaga";
import { UserPostSaga } from "Redux/V1/Users/Post/UserPostSaga";
import { UserDeleteSaga } from "Redux/V1/Users/Delete/UserDeleteSaga";
import { userFirstSaga } from "Redux/V1/Users/First/UserFirstSaga";
import { userPutSaga } from "Redux/V1/Users/Put/UserPutSaga";
import { RoleGetSaga } from "Redux/V1/Roles/Get/RoleGetSaga";
import { RolePostSaga } from "Redux/V1/Roles/Post/RolePostSaga";
import { roleDeleteSaga } from "Redux/V1/Roles/Delete/RoleDeleteSaga";
import { roleFirstSaga } from "Redux/V1/Roles/First/RoleFirstSaga";
import { rolePutSaga } from "Redux/V1/Roles/Put/RolePutSaga";
import { PermissionGetSaga } from "Redux/V1/Permissions/Get/PermissionGetSaga";
import { CustomerGetSaga } from "Redux/V1/Customers/Get/CustomerGetSaga";
import { CustomerFirstSaga } from "Redux/V1/Customers/First/CustomerFirstSaga";
import { SiteGetSaga } from "Redux/V1/Sites/Get/SiteGetSaga";
import { SiteFirstSaga } from "Redux/V1/Sites/First/SiteFirstSaga";
import { InvoiceGetSaga } from "Redux/V1/Invoices/Get/InvoiceGetSaga";
import { InvoiceFirstSaga } from "Redux/V1/Invoices/First/InvoiceFirstSaga";
import { CustomerFilterSaga } from "Redux/V1/Customers/Filter/CustomerFilterSaga";
import { SiteFilterSaga } from "Redux/V1/Sites/Filter/SiteFilterSaga";
import { InvoiceFilterSaga } from "Redux/V1/Invoices/Filter/InvoiceFilterSaga";
import { UserFilterSaga } from "Redux/V1/Users/Filter/UserFilterSaga";
import { UserSearchSaga } from "Redux/V1/Users/Search/UserSearchSaga";
import { CustomerPutSaga } from "Redux/V1/Customers/Put/CustomerPutSaga";
import { MigrationGetSaga } from "Redux/V1/Migration/Get/MigrationGetSaga";
import { MigrationFirstSaga } from "Redux/V1/Migration/First/MigrationFirstSaga";

export default function* rootSaga() {
	yield all([
		LoginRootSaga(),
		UserGetSaga(),
		UserPostSaga(),
		UserDeleteSaga(),
		userFirstSaga(),
		userPutSaga(),
		RoleGetSaga(),
		RolePostSaga(),
		roleDeleteSaga(),
		roleFirstSaga(),
		rolePutSaga(),
		PermissionGetSaga(),
		CustomerGetSaga(),
		CustomerFirstSaga(),
		SiteGetSaga(),
		SiteFirstSaga(),
		InvoiceGetSaga(),
		InvoiceFirstSaga(),
		CustomerFilterSaga(),
		SiteFilterSaga(),
		InvoiceFilterSaga(),
		UserFilterSaga(),
		UserSearchSaga(),
		CustomerPutSaga(),
		MigrationGetSaga(),
		MigrationFirstSaga(),
	]);
}
