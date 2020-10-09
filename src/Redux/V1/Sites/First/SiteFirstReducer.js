import SITE_DETAILS from "Redux/V1/Sites/First/SiteFirstActionType";

const siteDetails = (
	state = {
		loading: false,
		site: {
			user: {
				email: null,
				first_name: null,
				last_name: null,
				status: null,
				created_at: null,
			},
		},
		err_mess: null,
	},
	action
) => {
	switch (action.type) {
		case SITE_DETAILS.SITE_DETAILS_GET:
			return {
				...state,
				loading: true,
			};
		case SITE_DETAILS.SITE_DETAILS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				site: action.response.site,
			};
		case SITE_DETAILS.SITE_DETAILS_GET_FAILED:
			return {
				...state,
				loading: false,
				err_mess: action.response,
			};
		default:
			return state;
	}
};

export default siteDetails;
