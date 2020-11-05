import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.dashboards
	);
	return response;
};

const DashboardService = {
	get,
};

export default DashboardService;
