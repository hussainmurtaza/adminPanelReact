import V3 from "Constants/V3ApiConstant";
import Gateway from "Gateways/Gateway";

const customerFirst = async (data) => {
    const response = await Gateway.authGateway("GET", V3.customers + data);
    return response;
};

const CustomerServiceV3 = {
    customerFirst,
};

export default CustomerServiceV3;
