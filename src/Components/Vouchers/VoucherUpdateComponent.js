import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import VouchersFormComponent from "Components/Vouchers/Forms/VouchersFormComponent";

class VoucherUpdateComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="vouchers" />
                    <div className="content content-components">
                        <div className="container">
                            <Container>
                                <h4 className="tx-color-01 mg-b-15">
                                    Update Voucher
                                </h4>
                                <VouchersFormComponent
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

export default VoucherUpdateComponent;
