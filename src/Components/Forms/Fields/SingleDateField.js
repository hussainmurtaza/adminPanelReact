import React, { Component } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

class SingleDateField extends Component {
    onCancel = () => {
        this.setState({
            eventStartDate: undefined,
        });
    };

    render() {
        return (
            <React.Fragment>
                <label>{this.props.label}</label>
                <DateRangePicker
                    initialSettings={{
                        singleDatePicker: true,
                        locale: {
                            format: "YYYY-MM-DD",
                            cancelLabel: "Clear",
                        },
                    }}
                    onCallback={this.props.onChange}
                    onCancel={this.onCancel}
                >
                    <input
                        type="text"
                        name={this.props.name}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        value={this.props.defaultValue}
                        autocomplete="off"
                    ></input>
                </DateRangePicker>
            </React.Fragment>
        );
    }
}

export default SingleDateField;
