import React, { Component } from "react";
import { Row, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";
import SitesFilterAction from "Redux/V1/Sites/Details/Filter/SiteFilterAction";
import queryString from "query-string";

class SiteFilterForm extends Component {
    componentDidMount() {
        const query = queryString.parse(this.props.location);
        for (const key of Object.keys(query)) {
            if (query[key] === "") {
                delete query[key];
            }
        }
        const params = Object.entries(query)
            .map(([key, value]) => key + "=" + value)
            .join("&");
        this.props.dispatch(SitesFilterAction.filterSites(params));
    }
    render() {
        if (!this.props.location) {
            localStorage.removeItem("customers");
            localStorage.removeItem("identities");
            localStorage.removeItem("domains");
            localStorage.removeItem("locations");
        }
        const option1 = localStorage.getItem("customers");
        const option2 = localStorage.getItem("identities");
        const option3 = localStorage.getItem("domains");
        const option4 = localStorage.getItem("locations");
        const customers_options = JSON.parse(option1);
        const identities_options = JSON.parse(option2);
        const domains_options = JSON.parse(option3);
        const locations_options = JSON.parse(option4);

        return (
            <React.Fragment>
                <form>
                    <Row>
                        <Col md="6 mt-3">
                            <AsyncSelectField
                                name="customers"
                                dispatch={this.props.dispatch}
                                placeholder="Search By Customer Name"
                                defaultValue={customers_options}
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <AsyncSelectField
                                name="identities"
                                dispatch={this.props.dispatch}
                                placeholder="Search By Identity"
                                defaultValue={identities_options}
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <AsyncSelectField
                                name="domains"
                                dispatch={this.props.dispatch}
                                placeholder="Search By Domain"
                                defaultValue={domains_options}
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <AsyncSelectField
                                name="locations"
                                dispatch={this.props.dispatch}
                                placeholder="Search By Location"
                                defaultValue={locations_options}
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <Button
                                type="submit"
                                className="btn btn-brand-02 btn-block"
                            >
                                Search
                            </Button>
                        </Col>
                    </Row>
                </form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        site_filter: state.site_filter,
    };
};

export default connect(mapStateToProps)(SiteFilterForm);
