import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const userStatus = async (identity) => {
	const response = await Gateway.authGateway(
		"PUT",
		V1.user.user_status + identity
	);
	return response;
};

const UserStatusService = {
	userStatus,
};

export default UserStatusService;
