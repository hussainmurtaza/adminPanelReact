import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const cachePut = async (data) => {
    const response = await Gateway.authGateway(
        "PUT",
        V1.operation.cache_clear + data
    );
    return response;
};
const permissionsGet = async (data) => {
    const response = await Gateway.authGateway(
        "GET",
        V1.operation.permissions_reset + data
    );
    return response;
};

const OperationService = {
    cachePut,
    permissionsGet,
};

export default OperationService;
