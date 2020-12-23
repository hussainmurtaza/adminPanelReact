import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Operation from "Components/Sites/SiteDashboard/Components/OperationComponent";
import { faRocket, faKey } from "@fortawesome/free-solid-svg-icons";
import ClearCacheAction from "Redux/V1/Operations/CacheClear/Put/CachePutAction";
import PermissionsResetAction from "Redux/V1/Operations/PermissionReset/Get/PermissionGetAction";
class SiteOperation extends Component {
	cacheClearFunction = () => {
		this.props.dis(ClearCacheAction.cachePut(this.props.identity));
	};
	permissionResetFunction = () => {
		this.props.dis(
			PermissionsResetAction.permissionsReset(this.props.identity)
		);
	};
	render() {
		const cacheClearloading = this.props.cacheClear.loading;
		const permissionsResetloading = this.props.permissionsReset.loading;
		return (
			<React.Fragment>
				<h4 className="page-header mg-b-15 mt-4">Site Operations</h4>
				<Row>
					<Col md={4}>
						<Operation
							icon={faRocket}
							title={"Clear Cache"}
							button={"Clear Cache"}
							function={this.cacheClearFunction}
							dis={this.props.dispatch}
							loading={cacheClearloading}
						/>
					</Col>
					<Col md={4}>
						<Operation
							icon={faKey}
							title={"Reset Permissions"}
							button={"Reset Permissions"}
							function={this.permissionResetFunction}
							dis={this.props.dispatch}
							loading={permissionsResetloading}
						/>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		cacheClear: state.operation.cacheClear,
		permissionsReset: state.operation.permissionsReset,
	};
};

export default connect(mapStateToProps)(SiteOperation);
