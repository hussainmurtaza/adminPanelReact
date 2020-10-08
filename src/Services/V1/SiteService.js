import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.sites);
	return response;
};

const SiteService = {
	getAll,
};

export default SiteService;
