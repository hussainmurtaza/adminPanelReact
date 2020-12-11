import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const search = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		`${V1.auth.containers}/search${smartSearchBody(data)}`
	);
	return response;
};

const smartSearchBody = (data) => {
	//console.log(data, "smartSearchBody");
	let query = "?";

	query += `field=${data.field}&`;
	query += `value=${data.value}`;

	return query;
};

const ContainerService = {
	search,
};

export default ContainerService;
