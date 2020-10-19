import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
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
                                name="site_name"
                                option={this.props.site_name}
                                placeholder="Search By Site Name"
                            />
                        </Col>
                        <Col md="3">
                            <InputSelectField
                                name="identity"
                                option={this.props.identity}
                                placeholder="Search By Identity"
                            />
                        </Col>
                        <Col md="3">

                            <input
                                type="date"
                                name="created_at"
                                className="form-control"
                                placeholder="Search By Identity"
                                options={this.props.date}
                            />
                        </Col>
                        <Col md="3">
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
