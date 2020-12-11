import DOMAIN from "Redux/V1/Sites/Domain/Get/DomainGetActionType";

const DomainGetAction = {
	getDomains,
	getDomainsSuccess,
	getDomainsFailed,
};

function getDomains() {
	return {
		type: DOMAIN.DOMAIN_GET,
	};
}
function getDomainsSuccess(data) {
	return {
		type: DOMAIN.DOMAIN_GET_SUCCESS,
		response: data,
	};
}
function getDomainsFailed(data) {
	return {
		type: DOMAIN.DOMAIN_GET_FAILED,
		response: data,
	};
}

export default DomainGetAction;
