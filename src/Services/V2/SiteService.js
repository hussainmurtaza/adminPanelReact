import V2 from "Constants/V2ApiConstant";
import Gateway from "Gateways/Gateway";

const get = async (data) => {
	const response = await Gateway.authGateway("GET", V2.sites + data);
	return response;
};

const SiteService = {
	get,
};

export default SiteService;
