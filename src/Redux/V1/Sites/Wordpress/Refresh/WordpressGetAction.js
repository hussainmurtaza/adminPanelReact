import WORDPRESS from "Redux/V1/Sites/Wordpress/Refresh/WordpressGetActionType";

const WordpressRefreshAction = {
	getWordpress,
	getWordpressSuccess,
	getWordpressFailed,
};

function getWordpress(data) {
	return {
		type: WORDPRESS.WORDPRESS_REFRESH,
		request: data,
	};
}
function getWordpressSuccess(data) {
	return {
		type: WORDPRESS.WORDPRESS_REFRESH_SUCCESS,
		response: data,
	};
}
function getWordpressFailed(data) {
	return {
		type: WORDPRESS.WORDPRESS_REFRESH_FAILED,
		response: data,
	};
}

export default WordpressRefreshAction;
