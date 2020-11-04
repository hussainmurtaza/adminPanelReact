import WORDPRESS from "Redux/V1/Sites/Wordpress/Put/WordpressPutActionType";

const WordpressUpdateAction = {
	wordpressUpdate,
	wordpressUpdateSuccess,
	wordpressUpdateFailed,
};

function wordpressUpdate(data) {
	return {
		type: WORDPRESS.WORDPRESS_UPDATE_PUT,
		request: data,
	};
}
function wordpressUpdateSuccess(data) {
	return {
		type: WORDPRESS.WORDPRESS_UPDATE_PUT_SUCCESS,
		response: data,
	};
}
function wordpressUpdateFailed(data) {
	return {
		type: WORDPRESS.WORDPRESS_UPDATE_PUT_FAILED,
		response: data,
	};
}

export default WordpressUpdateAction;
