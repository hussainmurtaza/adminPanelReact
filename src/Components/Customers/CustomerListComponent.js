import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Badge } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import CustomersAction from "Redux/V1/Customers/Get/CustomerGetAction";
import CustomersFilterAction from "Redux/V1/Customers/Filter/CustomerFilterAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import Select from "react-select";
import queryString from 'query-string'
import FilterForm from "Components/Forms/FilterForm";

class CustomerListComponent extends Component {
    // state = {
    //     enabledCheckBox: false
    // };
    // state = {
    //     form: {
    //         first_name: null,
    //         last_name: null,
    //         status: null,
    //         email: null,
    //         created_at: null,
    //     },
    // };
    // state = {
    //     switch1: false,
    // };
    // handleSwitchChange = (id) => () => {
    //     let switchNumber = `switch${id}`;
    //     this.setState({
    //         [switchNumber]: !this.state[switchNumber],
    //     });
    //     console.log(switchNumber, "switch");
    // };
    componentDidMount() {
        const value = queryString.parse(this.props.location.search);
        this.props.dispatch(CustomersAction.getCustomers());
        this.props.dispatch(CustomersFilterAction.filterCustomers(value));
    }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.dispatch(CustomersFilterAction.filterCustomers(this.state.form));
    //     console.log(this.state.form, "submit filter");
    // };
    // handleMultiSelect = (e, options) => {
    //     let { form } = this.state;
    //     form[e.name] = options;
    //     this.setState({
    //         form,
    //     });
    // };
    // cardLists = () => {
    //     return this.props.customers.map((customer) => {
    //         return customer.contact.map((cc) => {
    //             return (
    //                 { value: cc.email, label: cc.email }
    //             );
    //         });
    //     });
    // };
    // onClick = () => {
    //     this.setState({ enabledCheckBox: !this.state.enabledCheckBox });
    // };

    render() {
        // const fullname = this.props.customers.map(function (customer) {
        //     return { value: customer.fullname, label: customer.fullname };
        // });
        // const last_name = this.props.customers.map(function (customer) {
        //     return { value: customer.last_name, label: customer.last_name };
        // });
        // const email = this.props.customers.map(function (customer) {
        //     return { value: customer.email, label: customer.email };
        // });
        // const date = this.props.customers.map(function (customer) {
        //     return {
        //         value: customer.created_at,
        //         label: customer.created_at
        //     };
        // });
        // const status = [
        //     { value: 'active', label: 'Active' },
        //     { value: 'pending', label: 'Pending' },
        //     { value: 'blocked', label: 'Blocked' }
        // ]

        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="customers" />

                    <div className="content content-components">
                        <div className="container">

                            <FilterForm
                                fields={
                                    [
                                        'customer_name',
                                        'customer_email',
                                        'customer_status',
                                        'customer_date',
                                    ]
                                }
                            />


                            {/* <FilterForm
                                option1={fullname}
                                name1="fullname"
                                placeholder1="Search By Name"
                                option2={email}
                                name2="email"
                                placeholder2="Search By Email"
                                option3={status}
                                name3="status"
                                placeholder3="Search By Status"
                                dateName="created_at"
                                datePlaceholder="Search By Date"
                            /> */}
                            {/* <form name="order">
                                <Form.Row className="align-items-center mb-4">
                                    <Col md="3">
                                        <Select
                                            isMulti
                                            name="first_name"
                                            options={first_name}
                                            placeholder="Search First name"
                                            onChange={(options, e) =>
                                                this.handleMultiSelect(
                                                    e,
                                                    options
                                                )
                                            }
                                        />
                                    </Col>
                                    <Col md="3">
                                        <Select
                                            isMulti
                                            name="last_name"
                                            options={last_name}
                                            placeholder="Search Last name"
                                            onChange={(options, e) =>
                                                this.handleMultiSelect(
                                                    e,
                                                    options
                                                )
                                            }
                                        />
                                    </Col>
                                    <Col md="3">
                                        <Select
                                            isMulti
                                            name="email"
                                            options={email}
                                            placeholder="Search Email"
                                        />
                                    </Col>

                                    <Col md="3">
                                        <Select
                                            isMulti
                                            name="status"
                                            options={status}
                                            placeholder="Search Status"
                                        />
                                    </Col>
                                    <Col md="3  mt-3">
                                        <input
                                            type="date"
                                            name="created_at"
                                            className="form-control"
                                            placeholder="Enter your date"
                                            options={date}
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
                            </form> */}

                            <h4 className="tx-color-01 mg-b-15">
                                Customer List
                            </h4>
                            <div className="customer-list-page">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Created At</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.customer_filter.map(
                                            (customer) => (
                                                <tr>
                                                    <td>
                                                        <a
                                                            href={
                                                                "/customer/" +
                                                                customer.id
                                                            }
                                                        >
                                                            {customer.fullname}
                                                            <Badge variant="primary">{customer.total_sites}</Badge>
                                                        </a>
                                                    </td>

                                                    {/* {customer.email ===
                                                        null ? (
                                                            <td className="text-center">-</td>
                                                        ) : (
                                                            <td>
                                                                {customer.email}
                                                            </td>
                                                    )} */}




                                                    <td>{customer.email}</td>
                                                    <td>{customer.status}</td>

                                                    <td>
                                                        {TimeStampHelper.standardDateFormat(
                                                            `${customer.created_at}`
                                                        )}
                                                    </td>
                                                    {/* <td>
                                                        <div className="custom-control custom-switch">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id={
                                                                    "customSwitches-" +
                                                                    customer.id
                                                                }
                                                                checked={
                                                                    this.state
                                                                        .switch1
                                                                }
                                                                // onChange={this.handleSwitchChange(
                                                                //     1
                                                                // )}
                                                                checked={this.state.enabledCheckBox}
                                                                onChange={this.onClick}
                                                                readOnly
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor={
                                                                    "customSwitches-" +
                                                                    customer.id
                                                                }
                                                            ></label>
                                                        </div>
                                                        {this.state.enabledCheckBox ? <div>Blue</div> : <div>Red</div>}
                                                    </td> */}

                                                    <td className="text-center">
                                                        <a
                                                            href={
                                                                "/customer/" +
                                                                customer.id
                                                            }
                                                            className="btn btn-link"
                                                            title="View"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faEye}
                                                            />
                                                        </a>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers.customers,
        customer_filter: state.customer_filter.customers,
    };
};

export default connect(mapStateToProps)(CustomerListComponent);
