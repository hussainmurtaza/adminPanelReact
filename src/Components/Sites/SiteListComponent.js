import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Row, Col } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
// import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import SiteFilterForm from "Components/Forms/SiteFilterForm";
// import FilterForm from "Components/Forms/FilterForm";
import OneClickLoginAction from "Redux/V1/Sites/OneClickLogin/OneClickLoginAction";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import "Assets/css/sites.css";
class SiteListComponent extends Component {
    quickLogin = (e) => {
        const identity = e.target.getAttribute("data-identity");
        this.props.dispatch(OneClickLoginAction.getOneClickLogin(identity));
    };
    handleSort = () => {
        alert("sorting");
        // this.props.dispatch(
        // 	SitesFilterAction.filterSites("order_by=asc&column=domains")
        // );
    };

    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="sites" />

                    <div className="content content-components">
                        <div className="container">
                            <SiteFilterForm
                                location={this.props.location.search}
                            />

                            <h4 className="page-header mg-b-15 mt-3">
                                Sites List
                            </h4>
                            <div className="site-list-page">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th
                                                className="sort-btn"
                                                onClick={this.handleSort}
                                            >
                                                Customer Name
                                            </th>
                                            <th
                                                className="sort-btn"
                                                onClick={this.handleSort}
                                            >
                                                Identity
                                                <i class="icon-arrow-up"></i>
                                            </th>
                                            <th
                                                className="sort-btn"
                                                onClick={this.handleSort}
                                            >
                                                Domain
                                            </th>
                                            <th>Quick Login</th>
                                            <th>Ip Address</th>
                                            <th
                                                className="sort-btn"
                                                onClick={this.handleSort}
                                            >
                                                Location
                                            </th>
                                            <th>Total Updates</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.site_filter.sites.map(
                                            (site) => (
                                                <tr>
                                                    <td>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href={
                                                                "/customer/" +
                                                                site.user_id
                                                            }
                                                        >
                                                            {site.first_name}{" "}
                                                            {site.last_name}
                                                        </a>
                                                    </td>

                                                    <td>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href={
                                                                "/site/" +
                                                                site.host
                                                            }
                                                        >
                                                            {site.identity}
                                                        </a>
                                                    </td>

                                                    <td>
                                                        <a
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href={
                                                                "https://" +
                                                                site.domain
                                                            }
                                                        >
                                                            {site.domain}
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faExternalLinkAlt
                                                                }
                                                                className="ml-2"
                                                            />
                                                        </a>
                                                    </td>
                                                    <td className="text-center">
                                                        <img
                                                            src="/assets/img/Wordpress.png"
                                                            alt="wordpresswhite"
                                                            className="site-wordpress"
                                                            data-identity={
                                                                site.identity
                                                            }
                                                            onClick={(e) =>
                                                                this.quickLogin(
                                                                    e
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                    <td>{site.public_ip}</td>
                                                    <td>{site.location}</td>
                                                    <td>{site.updates}</td>
                                                    <td className="text-center">
                                                        <a
                                                            href={
                                                                "/site/" +
                                                                site.host
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
                                <Row>
                                    <Col md={4}>
                                        <PaginationDropDown
                                            title={"Sites"}
                                            perPage={
                                                this.props.site_filter
                                                    .pagination.per_page
                                            }
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <PaginationNumber
                                            perPage={
                                                this.props.site_filter
                                                    .pagination.per_page
                                            }
                                            totalPages={
                                                this.props.site_filter
                                                    .pagination.total_pages
                                            }
                                            currentPage={
                                                this.props.site_filter
                                                    .pagination.current_page
                                            }
                                        />
                                    </Col>
                                    <Col md={4}></Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //sites: state.sites.sites,
        site_filter: state.site_filter,
    };
};

export default connect(mapStateToProps)(SiteListComponent);
