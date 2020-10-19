import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import InputDateField from "./Fields/InputDateField";
import InputSelectField from "./Fields/InputSelectField";

class SiteFilterForm extends Component {
    state = {
        form: {
            site_name: null,
            identity: null,
            created_at: null,
        },
    };
    handleMultiSelect = (e, options) => {
        let { form } = this.state;
        form[e.name] = options;
        this.setState({
            form,
        });
    };
    render() {
        return (
            <React.Fragment>
                <form>
                    <Form.Row className="align-items-center mb-4">
                        <Col md="3">
                            <InputSelectField
                                name="customer"
                                option={this.props.customer}
                                placeholder="Search By Customer Name"
                            />
                        </Col>
                        <Col md="3">
                            <InputSelectField
                                name="site_name"
                                option={this.props.site_name}
                                placeholder="Search By Site Name"
                            />
                        </Col>
                        <Col md="3">
                            <InputSelectField
                                name="identity"
                                option={this.props.identity}
                                placeholder="Search By identity"
                            />
                        </Col>
                        <Col md="3">
                            <InputSelectField
                                name="primary_domain_name"
                                option={this.props.primary_domain_name}
                                placeholder="Search By Domain"
                            />
                        </Col>

                        <Col md="3 mt-3">
                            <InputDateField
                                name="created_at"
                                placeholder="Search By Date"
                            />
                        </Col>
                        <Col md="3 mt-3">
                            <Button
                                type="submit"
                                className="btn btn-brand-02 btn-block"
                            >
                                Search
                            </Button>
                        </Col>
                    </Form.Row>
                </form>
            </React.Fragment>
        );
    }
}

export default SiteFilterForm;
