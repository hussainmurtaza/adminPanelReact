import SITE from "Redux/V1/Sites/First/SiteFirstActionType";

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
		case SITE.SITE_FIRST:
			return {
				...state,
				loading: true,
			};
		case SITE.SITE_FIRST_SUCCESS:
			return {
				...state,
				loading: false,
				site: action.response.site,
			};
		case SITE.SITE_FIRST_FAILED:
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
