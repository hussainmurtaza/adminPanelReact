import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Operation extends Component {
    render() {
        return (
            <div className="operation-component">
                <FontAwesomeIcon icon={this.props.icon} className="ml-2" />
                <h6>{this.props.title}</h6>
                <p>{this.props.description}</p>
                {this.props.botSwitch === true ? (
                    <Button
                        className={`btn-brand-02 btn-sm ${
                            this.props.loading ? "loading" : ""
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
                            this.props.loading ? "loading" : ""
                        }`}
                        onClick={() => {
                            this.props.function();
                        }}
                    >
                        {this.props.button}
                    </Button>
                )}
            </div>
        );
    }
}

export default Operation;
