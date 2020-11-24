const V1 = {
	auth: {
		login: "v1/auth/login",
		users: "v1/users",
		roles: "v1/roles",
		permissions: "v1/permissions",
		customers: "v1/customers",
		customers_lock: "v1/customers/status",
		sites: "v1/sites",
		invoices: "v1/invoices",
		dashboards: "v1/dashboards",
		migrations: "v1/migrations",
		site_operation: {
			quick_login: "v1/sites/one-click-login/",
		},
		wordpress: {
			details: "v1/sites/wp/",
			update: "v1/sites/update-wp/",
		},
		data_centers: "v1/data-centers",
		hostnodes: "v1/hostnodes",
	},
	hostnode: {
		hostnode_status: "v1/hostnodes/toggle-status/",
	},
	user: {
		user_status: "v1/users/status/",
	},
};
export default V1;
