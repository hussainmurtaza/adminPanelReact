import CONTAINER from "Redux/V1/Container/Get/ContainerGetActionType";

const ContainerGetAction = {
	getContainers,
	getContainersSuccess,
	getContainersFailed,
};

function getContainers() {
	return {
		type: CONTAINER.CONTAINER_GET,
	};
}
function getContainersSuccess(data) {
	return {
		type: CONTAINER.CONTAINER_GET_SUCCESS,
		response: data,
	};
}
function getContainersFailed(data) {
	return {
		type: CONTAINER.CONTAINER_GET_FAILED,
		response: data,
	};
}

export default ContainerGetAction;
