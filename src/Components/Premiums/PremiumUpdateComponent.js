import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import PluginFormComponent from "Components/Premiums/Forms/PremiumFormComponent";

class PluginUpdateComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="plugins" />
                    <div className="content content-components">
                        <div className="container">
                            <Container>
                                <h4 className="tx-color-01 mg-b-15">
                                    Update Premimum/Theme Plugin
                                </h4>
                                <PluginFormComponent
                                    method="PUT"
                                    submitText="Update"
                                    params={this.props.match.params.id}
                                />
                            </Container>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

export default PluginUpdateComponent;
