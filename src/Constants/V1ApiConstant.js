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
            update: "v1/sites/wp/",
            refresh: "v1/wordpress/refresh/",
        },
        data_centers: "v1/data-centers",
        hostnodes: "v1/hostnodes",
        containers: "v1/containers",
        domains: "v1/domains",
    },
    hostnode: {
        hostnode_status: "v1/hostnodes/toggle-status/",
    },
    user: {
        user_status: "v1/users/status/",
    },
    migration: {
        migration_status: "v1/migrations/status/",
    },
    operation: {
        cache_clear: "v1/sites/cache/",
        permissions_reset: "v1/sites/permission/",
        bot_block: "v1/sites/bot-block/",
        redis: "v1/sites/redis/",
    },
    wordpress: {
        update_all: "v1/sites/wp/content",
    },
    customers: {
        change_affiliate: "v1/affiliates/",
        wallet: "v1/customers/wallet/",
        site: "v1/customers/sites/",
        invoice: "v1/customers/invoices/",
    },
    premiumplugin: {
        premium_plugins: "v1/premium/plugins",
    },
    voucher: {
        vouchers: "v1/vouchers",
    },
};
export default V1;
