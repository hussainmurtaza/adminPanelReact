import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Operation from "Components/Sites/SiteDashboard/Components/OperationComponent";
import {
    faRocket,
    faKey,
    faRobot,
    faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import ClearCacheAction from "Redux/V1/Operations/CacheClear/Put/CachePutAction";
import PermissionsResetAction from "Redux/V1/Operations/PermissionReset/Get/PermissionGetAction";
import BotBlockAction from "Redux/V1/Operations/BotBlock/Put/BotPutAction";
// import RedisDetailAction from "Redux/V1/Sites/Features/Operations/Redis/First/RedisFirstAction";
import RedisToggleAction from "Redux/V1/Sites/Features/Operations/Redis/RedisToggle/RedisToggleAction";
import RedisDeleteAction from "Redux/V1/Sites/Features/Operations/Redis/RedisDelete/RedisDeleteAction";
import Confirm from "Helpers/ConfirmationHelper";
class SiteOperation extends Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.dispatch(
    //             RedisDetailAction.redisFirst(this.props.identity)
    //         );
    //     }, 2000);
    // }

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

    redisFunciton = () => {
        const data = {
            identity: this.props.identity,
            status:
                this.props.redisDetail.redis.status === "enabled"
                    ? false
                    : true,
        };
        this.props.dis(RedisToggleAction.redisToggleStatus(data));
    };

    redisDeleteFunction = () => {
        Confirm(
            this.props.dis,
            RedisDeleteAction.redisDelete(this.props.identity),
            "Do you want to delete Redis?"
        );
    };
    render() {
        const cacheClearloading = this.props.cacheClear.loading;
        const permissionsResetloading = this.props.permissionsReset.loading;
        const botBlockLoading = this.props.botBlock.loading;
        const botStatus = this.props.botStatus === "enable" ? true : false;
        const redisLoading = this.props.redisToggle.loading;
        const redisStatus = this.props.redisDetail.redis.status;
        console.log(this.props.botStatus);
        return (
            <React.Fragment>
                <h4 className="page-header mg-b-15 mt-4">Site Operations</h4>
                <Row>
                    <Col md={4}>
                        <Operation
                            icon={faRocket}
                            title={"Clear Cache"}
                            featureTitle={"normal"}
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
                            featureTitle={"normal"}
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
                            featureTitle={"bot"}
                            button={"Enable"}
                            function={this.botBlockFunction}
                            dis={this.props.dispatch}
                            loading={botBlockLoading}
                            botSwitch={botStatus}
                        />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={4}>
                        <Operation
                            icon={faLayerGroup}
                            title={"Redis"}
                            featureTitle={"redis"}
                            button={"Enable"}
                            function={this.redisFunciton}
                            dis={this.props.dispatch}
                            loading={redisLoading}
                            redisStatus={redisStatus}
                            redisDeleteFunction={this.redisDeleteFunction}
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
        redisDetail: state.siteV1.features.operations.redisFirst,
        redisToggle: state.siteV1.features.operations.redisToggle,
    };
};

export default connect(mapStateToProps)(SiteOperation);
