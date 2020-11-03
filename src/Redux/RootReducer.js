import { combineReducers } from "redux";
import LoginReducer from "Redux/V1/Auth/Login/LoginPostReducer";
import UserGetReducer from "Redux/V1/Users/Get/UserGetReducer";
import UserPostReducer from "Redux/V1/Users/Post/UserPostReducer";
import UserDeleteReducer from "Redux/V1/Users/Delete/UserDeleteReducer";
import UserFirstReducer from "Redux/V1/Users/First/UserFirstReducer";
import UserPutReducer from "Redux/V1/Users/Put/UserPutReducer";
import RoleGetReducer from "Redux/V1/Roles/Get/RoleGetReducer";
import RolePostReducer from "Redux/V1/Roles/Post/RolePostReducer";
import RoleDeleteReducer from "Redux/V1/Roles/Delete/RoleDeleteReducer";
import RoleFirstReducer from "Redux/V1/Roles/First/RoleFirstReducer";
import RolePutReducer from "Redux/V1/Roles/Put/RolePutReducer";
import PermissionGetReducer from "Redux/V1/Permissions/Get/PermissionGetReducer";
import CustomerGetReducer from "Redux/V1/Customers/Get/CustomerGetReducer";
import CustomerFirstReducer from "Redux/V1/Customers/First/CustomerFirstReducer";
import SiteGetReducer from "Redux/V1/Sites/Get/SiteGetReducer";
import SiteFirstReducer from "Redux/V1/Sites/First/SiteFirstReducer";
import InvoiceGetReducer from "Redux/V1/Invoices/Get/InvoiceGetReducer";
import InvoiceFirstReducer from "Redux/V1/Invoices/First/InvoiceFirstReducer";
import CustomerFilterReducer from "Redux/V1/Customers/Filter/CustomerFilterReducer";
import SiteFilterReducer from "Redux/V1/Sites/Filter/SiteFilterReducer";
import InvoiceFilterReducer from "Redux/V1/Invoices/Filter/InvoiceFilterReducer";
import UserFilterReducer from "Redux/V1/Users/Filter/UserFilterReducer";
import UserSearchReducer from "Redux/V1/Users/Search/UserSearchReducer";
import CustomerPutReducer from "Redux/V1/Customers/Put/CustomerPutReducer";
import DashboardGetReducer from "Redux/V1/Dashboard/Get/DashboardGetReducer";

export default combineReducers({
	login: LoginReducer,
	users: UserGetReducer,
	users_post: UserPostReducer,
	user_delete: UserDeleteReducer,
	user_first: UserFirstReducer,
	user_put: UserPutReducer,
	roles: RoleGetReducer,
	roles_post: RolePostReducer,
	role_delete: RoleDeleteReducer,
	role_first: RoleFirstReducer,
	roles_put: RolePutReducer,
	permissions: PermissionGetReducer,
	customers: CustomerGetReducer,
	customer_first: CustomerFirstReducer,
	sites: SiteGetReducer,
	site_first: SiteFirstReducer,
	invoices: InvoiceGetReducer,
	invoice_first: InvoiceFirstReducer,
	customer_filter: CustomerFilterReducer,
	site_filter: SiteFilterReducer,
	customer_put: CustomerPutReducer,
	invoice_filter: InvoiceFilterReducer,
	user_filter: UserFilterReducer,
	user_search: UserSearchReducer,
	dashboards: DashboardGetReducer,
});
