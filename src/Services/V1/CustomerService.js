import V1 from "Constants/V1ApiConstant";
import V2 from "Constants/V2ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
    const response = await Gateway.authGateway("GET", V1.auth.customers);
    return response;
};

const get = async (data) => {
    const response = await Gateway.authGateway(
        "GET",
        V2.customers + "/" + data
    );
    return response;
};

const filter = async (data) => {
    const response = await Gateway.authGateway(
        "GET",
        V1.auth.customers + "?" + queryBody(data)
    );
    return response;
};

const queryBody = (data) => {
    let query = data;
    return query;
};

const put = async (id) => {
    const response = await Gateway.authGateway(
        "PUT",
        // `${V1.auth.customers}/${id}`
        V1.auth.customers_lock + "/" + id
    );
    return response;
};

const search = async (data) => {
    const response = await Gateway.authGateway(
        "GET",
        `${V1.auth.customers}/search${smartSearchBody(data)}`
    );
    return response;
};

const smartSearchBody = (data) => {
    let query = "?";

    query += `field=${data.field}&`;
    query += `value=${data.value}`;

    return query;
};

const changeAffiliate = async (id, data) => {
    const response = await Gateway.authGateway(
        "PUT",
        V1.customers.change_affiliate + id + data
        // `${V1.auth.customers}/${id}`
    );
    return response;
};

const customerSite = async (data) => {
    const query = window.location.search;
    const response = await Gateway.authGateway(
        "GET",
        `${V1.customers.site}${data}${query}`
    );
    return response;
};

const customerInvoice = async (data) => {
    const query = window.location.search;
    const response = await Gateway.authGateway(
        "GET",
        `${V1.customers.invoice}${data}${query}`
    );
    return response;
};

const CustomerService = {
    getAll,
    get,
    filter,
    put,
    search,
    changeAffiliate,
    customerSite,
    customerInvoice,
};

export default CustomerService;
