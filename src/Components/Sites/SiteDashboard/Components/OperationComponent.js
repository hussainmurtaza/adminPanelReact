import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";

class Operation extends Component {
    render() {
        const { redisStatus } = this.props;
        return (
            <div className="operation-component ">
                <FontAwesomeIcon icon={this.props.icon} className="ml-2" />
                <h6>{this.props.title}</h6>
                <p>{this.props.description}</p>
                {this.props.featureTitle !== "normal" ? (
                    ""
                ) : (
                    <Button
                        className={`btn-brand-02 btn-sm ${
                            this.props.loading ? "loading" : ""
                        }`}
                        onClick={() => {
                            this.props.function();
                        }}
                    >
                        {this.props.button}
                    </Button>
                )}
                {this.props.botSwitch === true ? (
                    <Button
                        className={`btn-brand-02 btn-sm ${
                            this.props.loading ? "loading" : ""
                        } ${this.props.featureTitle === "bot" ? "" : "d-none"}`}
                        onClick={() => {
                            this.props.function();
                        }}
                    >
                        {"Disable"}
                    </Button>
                ) : (
                    <Button
                        className={`btn-brand-02 btn-sm ${
                            this.props.loading ? "loading" : ""
                        } ${this.props.featureTitle === "bot" ? "" : "d-none"}`}
                        onClick={() => {
                            this.props.function();
                        }}
                    >
                        {this.props.button}
                    </Button>
                )}
                {this.props.redisStatus === "enabled" ? (
                    <Button
                        className={`btn-brand-02 btn-sm ${
                            this.props.loading ? "loading" : ""
                        } ${
                            this.props.featureTitle === "redis" ? "" : "d-none"
                        }`}
                        onClick={() => {
                            this.props.function();
                        }}
                    >
                        {"Disable"}
                    </Button>
                ) : (
                    <Button
                        className={`btn-brand-02 btn-sm ${
                            this.props.loading || redisStatus === "in_progress"
                                ? "loading"
                                : ""
                        } ${
                            this.props.featureTitle === "redis" ? "" : "d-none"
                        }`}
                        onClick={() => {
                            this.props.function();
                        }}
                    >
                        {"Enable"}
                    </Button>
                )}
                {/* Redis Status Conditions  */}
                {redisStatus !== "not_installed" &&
                redisStatus !== "in_progress" &&
                this.props.featureTitle === "redis" ? (
                    <button
                        className={`btn btn-outline-danger btn-sm redis-trash-icon ml-2`}
                        onClick={() => {
                            this.props.redisDeleteFunction();
                        }}
                    >
                        Delete
                    </button>
                ) : (
                    ""
                )}
                <Row>
                    <Col lg={12}>
                        {redisStatus === "in_progress" ? (
                            <p className={`text-success  mt-3`}>In Progress</p>
                        ) : (
                            ""
                        )}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Operation;
