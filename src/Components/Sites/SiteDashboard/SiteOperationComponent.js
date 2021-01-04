import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Operation from "Components/Sites/SiteDashboard/Components/OperationComponent";
import { faRocket, faKey, faRobot } from "@fortawesome/free-solid-svg-icons";
import ClearCacheAction from "Redux/V1/Operations/CacheClear/Put/CachePutAction";
import PermissionsResetAction from "Redux/V1/Operations/PermissionReset/Get/PermissionGetAction";
import BotBlockAction from "Redux/V1/Operations/BotBlock/Put/BotPutAction";
class SiteOperation extends Component {
    cacheClearFunction = () => {
        this.props.dis(ClearCacheAction.cachePut(this.props.identity));
    };
    permissionResetFunction = () => {
        this.props.dis(
            PermissionsResetAction.permissionsReset(this.props.identity)
        );
    };
    botBlockFunction = () => {
        const data = {
            host: this.props.host,
            status: this.props.botStatus === "enable" ? "disable" : "enable",
            identity: this.props.identity,
        };
        this.props.dis(BotBlockAction.botPut(data));
    };
    render() {
        const cacheClearloading = this.props.cacheClear.loading;
        const permissionsResetloading = this.props.permissionsReset.loading;
        const botBlockLoading = this.props.botBlock.loading;
        const botStatus = this.props.botStatus === "enable" ? true : false;
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
                    <Col md={4}>
                        <Operation
                            icon={faRobot}
                            title={"Bot Block"}
                            button={"Enable"}
                            function={this.botBlockFunction}
                            dis={this.props.dispatch}
                            loading={botBlockLoading}
                            botSwitch={botStatus}
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
        botBlock: state.operation.botBlock,
    };
};

export default connect(mapStateToProps)(SiteOperation);
