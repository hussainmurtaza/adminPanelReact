import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";
import PluginFormComponent from "Components/Premiums/Forms/PremiumFormComponent";

class PluginCreateComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Headers />
                <Sidebar active="create-plugin" />
                <div className="content content-components">
                    <div className="container">
                        <Container>
                            <h4 className="tx-color-01 mg-b-15">Create</h4>
                            <PluginFormComponent
                                method="POST"
                                submitText="Create"
                                params={this.props.match.params.id}
                            />
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PluginCreateComponent;
