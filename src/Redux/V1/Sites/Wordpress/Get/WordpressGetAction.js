import WORDPRESS from "Redux/V1/Sites/Wordpress/Get/WordpressFirstActionType";

const WordpressAction = {
	getWordpress,
	getWordpressSuccess,
	geWordpressFailed,
};

function getWordpress(data) {
	return {
		type: WORDPRESS.WORDPRESS_GET,
		request: data,
	};
}
function getWordpressSuccess(data) {
	return {
		type: WORDPRESS.WORDPRESS_GET_SUCCESS,
		response: data,
	};
}
function geWordpressFailed(data) {
	return {
		type: WORDPRESS.WORDPRESS_GET_FAILED,
		response: data,
	};
}

export default WordpressAction;
