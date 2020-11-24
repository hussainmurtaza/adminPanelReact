import HOSTNODE from "Redux/V1/HostNodes/First/HostNodeFirstActionType";

const hostNodeDetails = (
	state = {
		loading: false,
		host_node: {
			public_ip: null,
			ram: null,
			disk: null,
			cpu: null,
			status: null,
			bandwidth: null,
			identity: null,
			available_ram: null,
			available_cpu: null,
			available_disk: null,
			available_bandwith: null,
			server: null,
			private_ip: null,
			location: null,
		},
		err_mess: null,
		fetched: false,
	},
	action
) => {
	switch (action.type) {
		case HOSTNODE.HOSTNODE_FIRST:
			return {
				...state,
				loading: true,
				fetched: false,
			};
		case HOSTNODE.HOSTNODE_FIRST_SUCCESS:
			return {
				...state,
				loading: false,
				host_node: action.response.host_node,
				fetched: true,
			};
		case HOSTNODE.HOSTNODE_FIRST_FAILED:
			return {
				...state,
				loading: false,
				err_mess: action.response,
				fetched: true,
			};
		default:
			return state;
	}
};

export default hostNodeDetails;
