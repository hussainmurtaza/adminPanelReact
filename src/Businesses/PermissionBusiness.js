import Error403Component from "Components/403/Error403Component";
import DefaultPermissions from "Constants/Permissions.js";
const checkPermissions = (Component, props) => {
	let permissions = JSON.parse(localStorage.getItem("permissions")) || "";
	let componentPermissions = props.permissions || [];
	console.log(DefaultPermissions, permissions, "permission");
	permissions = permissions.concat(DefaultPermissions);
	let permissionFilter = componentPermissions.filter((p) => {
		return permissions.indexOf(p) !== -1;
	});

	if (permissionFilter.length > 0) return Component;
	else return Error403Component;
};
const Permission = {
	checkPermissions,
};
export default Permission;
