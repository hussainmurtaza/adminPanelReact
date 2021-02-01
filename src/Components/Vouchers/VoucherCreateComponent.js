import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";
import VoucherFormComponent from "Components/Vouchers/Forms/VouchersFormComponent";

class VoucherCreateComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Headers />
                <Sidebar active="create-voucher" />
                <div className="content content-components">
                    <div className="container">
                        <Container>
                            <h4 className="tx-color-01 mg-b-15">
                                Create Voucher
                            </h4>
                            <VoucherFormComponent
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

export default VoucherCreateComponent;
