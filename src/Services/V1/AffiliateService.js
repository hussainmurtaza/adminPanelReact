import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const affiliatePut = async (data) => {
    console.log(data);
    const _data = affiliatePutBody(data);
    const response = await Gateway.authGateway(
        "PUT",
        V1.customers.change_affiliate + parseInt(data.customer_id),
        _data
    );
    return response;
};
const affiliatePutBody = (data) => {
    let _data = {};
    _data.affiliate_id = parseInt(data.affiliate_id);
    return JSON.stringify(_data);
};

const AffliateService = {
    affiliatePut,
};

export default AffliateService;
