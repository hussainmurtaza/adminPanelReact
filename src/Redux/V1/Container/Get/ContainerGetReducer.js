import CONTAINER from "Redux/V1/Container/Get/ContainerGetActionType";

const ContainerGetReducer = (
	state = {
		loading: false,
		container: [],
	},
	action
) => {
	switch (action.type) {
		case CONTAINER.CONTAINER_GET:
			return {
				...state,
				loading: true,
			};
		case CONTAINER.CONTAINER_GET_SUCCESS:
			return {
				...state,
				loading: false,
				container: action.response.container,
			};
		case CONTAINER.CONTAINER_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default ContainerGetReducer;
