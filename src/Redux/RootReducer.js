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
import SiteGetReducer from "Redux/V1/Sites/Details/Get/SiteGetReducer";
import SiteFirstReducer from "Redux/V2/Sites/Details/First/SiteFirstReducer";
import InvoiceGetReducer from "Redux/V1/Invoices/Get/InvoiceGetReducer";
import InvoiceFirstReducer from "Redux/V1/Invoices/First/InvoiceFirstReducer";
import CustomerFilterReducer from "Redux/V1/Customers/Filter/CustomerFilterReducer";
import SiteFilterReducer from "Redux/V1/Sites/Details/Filter/SiteFilterReducer";
import InvoiceFilterReducer from "Redux/V1/Invoices/Filter/InvoiceFilterReducer";
import UserFilterReducer from "Redux/V1/Users/Filter/UserFilterReducer";
import UserSearchReducer from "Redux/V1/Users/Search/UserSearchReducer";
import WordpressGetReducer from "Redux/V1/Sites/Wordpress/Get/WordpressGetReducer";
import WordpressUpdateReducer from "Redux/V1/Sites/Wordpress/Put/WordpressPutReducer";
import CustomerPutReducer from "Redux/V1/Customers/Put/CustomerPutReducer";
import DashboardGetReducer from "Redux/V1/Dashboard/Get/DashboardGetReducer";
import UserStatusReducer from "Redux/V1/Users/ToggleStatus/UserStatusReducer";
import MigrationGetReducer from "Redux/V1/Migration/Get/MigrationGetReducer";
import MigrationFirstReducer from "Redux/V1/Migration/First/MigrationFirstReducer";
import OneClickLoginReducer from "Redux/V1/Sites/OneClickLogin/OneClickLoginReducer";
import WordpressRefreshReducer from "Redux/V1/Sites/Wordpress/Refresh/WordpressGetReducer";
import DataCenterGetReducer from "Redux/V1/DataCenters/Get/DataCenterGetReducer";
import DataCenterDeleteReducer from "Redux/V1/DataCenters/Delete/DataCenterDeleteReducer";
import DataCenterFirstReducer from "Redux/V1/DataCenters/First/DataCenterFirstReducer";
import DataCenterPostReducer from "Redux/V1/DataCenters/Post/DataCenterPostReducer";
import DataCenterPutReducer from "Redux/V1/DataCenters/Put/DataCenterPutReducer";
import HostNodeGetReducer from "Redux/V1/HostNodes/Get/HostNodeGetReducer";
import HostNodeDeleteReducer from "Redux/V1/HostNodes/Delete/HostNodeDeleteReducer";
import HostNodeFirstReducer from "Redux/V1/HostNodes/First/HostNodeFirstReducer";
import HostNodePostReducer from "Redux/V1/HostNodes/Post/HostNodePostReducer";
import HostNodePutReducer from "Redux/V1/HostNodes/Put/HostNodePutReducer";
import HostNodeStatusReducer from "Redux/V1/HostNodes/ToggleStatus/HostNodeStatusReducer";
import ContainerGetReducer from "Redux/V1/Container/Get/ContainerGetReducer";
import DomainGetReducer from "Redux/V1/Sites/Domain/Get/DomainGetReducer";
import MigrationPutReducer from "Redux/V1/Migration/Put/MigrationPutReducer";
import MigrationStatusReducer from "Redux/V1/Migration/ToggleStatus/MigrationStatusReducer";
import MigrationFilterReducer from "Redux/V1/Migration/Filter/MigrationFilterReducer";
import OperationRootReducer from "Redux/V1/Operations/OperationRootReducer";
import WordpressUpdateAllRootReducer from "Redux/V1/WordpressUpdateAll/UpdateAllRootReducer";
import ChangeAffiliateReducer from "Redux/V1/Customers/AffiliateAssign/AffiliatePutReducer";
import SiteRootReducer from "Redux/V1/Sites/SiteRootReducer";
import PremiumRootReducer from "Redux/V1/Premiums/PremiumRootReducer";
import VoucherRootReducer from "Redux/V1/Vouchers/VoucherRootReducer";
import CustomerRootReducerV3 from "Redux/V3/Customers/CustomerRootReducerV3";

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
    invoice_filter: InvoiceFilterReducer,
    user_filter: UserFilterReducer,
    user_search: UserSearchReducer,
    dashboards: DashboardGetReducer,
    wordpress: WordpressGetReducer,
    wordpress_updates: WordpressUpdateReducer,
    customer_put: CustomerPutReducer,
    user_status: UserStatusReducer,
    migrations: MigrationGetReducer,
    migration_first: MigrationFirstReducer,
    one_click: OneClickLoginReducer,
    wordpress_refresh: WordpressRefreshReducer,
    data_centers: DataCenterGetReducer,
    data_center_delete: DataCenterDeleteReducer,
    data_center_first: DataCenterFirstReducer,
    data_center_post: DataCenterPostReducer,
    data_center_put: DataCenterPutReducer,
    hostnodes: HostNodeGetReducer,
    hostnode_delete: HostNodeDeleteReducer,
    hostnode_first: HostNodeFirstReducer,
    hostnode_post: HostNodePostReducer,
    hostnode_put: HostNodePutReducer,
    hostnode_status: HostNodeStatusReducer,
    containers: ContainerGetReducer,
    domains: DomainGetReducer,
    migration_put: MigrationPutReducer,
    migration_status: MigrationStatusReducer,
    migration_filter: MigrationFilterReducer,
    operation: OperationRootReducer,
    //wordpressUpdateAll: WordpressUpdateGetReducer,
    change_affiliate: ChangeAffiliateReducer,
    wpUpdateAll: WordpressUpdateAllRootReducer,
    siteV1: SiteRootReducer,
    premium: PremiumRootReducer,
    vouchers: VoucherRootReducer,
    customerV3: CustomerRootReducerV3,
});
