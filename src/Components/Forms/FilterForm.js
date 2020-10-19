import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import InputDateField from "./Fields/InputDateField";
import InputSelectField from "./Fields/InputSelectField";

class FilterForm extends Component {
    state = {
        form: {
            first_name: null,
            last_name: null,
            status: null,
            email: null,
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
                                name="first_name"
                                option={this.props.first_name}
                                placeholder="Search By First name"
                            />
                            {/* <Select
                                isMulti
                                name="first_name"
                                options={this.props.first_name}
                                placeholder="Search First name"
                                onChange={(options, e) =>
                                    this.handleMultiSelect(
                                        e,
                                        options
                                    )
                                }
                            /> */}
                        </Col>
                        <Col md="3">
                            <InputSelectField
                                name="last_name"
                                option={this.props.last_name}
                                placeholder="Search By Last name"
                            />
                            {/* <Select
                                isMulti
                                name="last_name"
                                options={this.props.last_name}
                                placeholder="Search Last name"
                                onChange={(options, e) =>
                                    this.handleMultiSelect(
                                        e,
                                        options
                                    )
                                }
                            /> */}
                        </Col>
                        <Col md="3">
                            <InputSelectField
                                name="email"
                                option={this.props.email}
                                placeholder="Search By Email"
                            />
                            {/* <Select
                                isMulti
                                name="email"
                                options={this.props.email}
                                placeholder="Search Email"
                            /> */}
                        </Col>

                        <Col md="3">
                            <InputSelectField
                                name="status"
                                option={this.props.status}
                                placeholder="Search By Status"
                            />
                            {/* <Select
                                isMulti
                                name="status"
                                options={this.props.status}
                                placeholder="Search Status"
                            /> */}
                        </Col>
                        <Col md="3  mt-3">
                            {/* <input
                                type="date"
                                name="created_at"
                                className="form-control"
                                placeholder="Enter your date"
                                options={this.props.date}
                            /> */}
                            <InputDateField
                                name="created_at"
                                option={this.props.date}
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
                        <Col md="3 mt-3">
                            <Button
                                type="reset"
                                className="btn btn-secondary btn-block"
                                onClick={this.handleClear}
                            >
                                Clear
                                </Button>
                        </Col>
                    </Form.Row>
                </form>
            </React.Fragment>
        );
    }
}

export default FilterForm;
