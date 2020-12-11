import DOMAIN from "Redux/V1/Sites/Domain/Get/DomainGetActionType";

const DomainGetReducer = (
	state = {
		loading: false,
		domain: [],
	},
	action
) => {
	switch (action.type) {
		case DOMAIN.DOMAIN_GET:
			return {
				...state,
				loading: true,
			};
		case DOMAIN.DOMAIN_GET_SUCCESS:
			return {
				...state,
				loading: false,
				domain: action.response.domain,
			};
		case DOMAIN.DOMAIN_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default DomainGetReducer;
