import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import InputDateField from "./Fields/InputDateField";
import InputSelectField from "./Fields/InputSelectField";

class FilterForm extends Component {
    // state = {
    //     form: {
    //         first_name: null,
    //         last_name: null,
    //         status: null,
    //         email: null,
    //         created_at: null,
    //     },
    // };
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
                        {
                            //condition if field name is available in array,display field
                        }
                        <Col md="3">
                            <InputSelectField
                                name={this.props.name1}
                                option={this.props.option1}
                                placeholder={this.props.placeholder1}
                            />
                        </Col>
                        <Col md="3">
                            <InputSelectField
                                name={this.props.name2}
                                option={this.props.option2}
                                placeholder={this.props.placeholder2}
                            />
                        </Col>

                        <Col md="3">
                            <InputSelectField
                                name={this.props.name3}
                                option={this.props.option3}
                                placeholder={this.props.placeholder3}
                            />
                        </Col>
                        <Col md="3">
                            <InputDateField
                                name={this.props.dateName}
                                placeholder={this.props.datePlaceholder}
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
                        {/* <Col md="3 mt-3">
                            <Button
                                type="reset"
                                className="btn btn-secondary btn-block"
                                onClick={this.handleClear}
                            >
                                Clear
                                </Button>
                        </Col> */}
                    </Form.Row>
                </form>
            </React.Fragment>
        );
    }
}

export default FilterForm;
