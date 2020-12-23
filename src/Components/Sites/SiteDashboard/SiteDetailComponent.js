import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class SiteDetailComponent extends Component {
    render() {
        const site = this.props.site;
        const serverDetail = this.props.site.server_details;
        return (
            <React.Fragment>
                <h4 className="page-header mg-b-15 mt-4">Site Details</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Site Name</td>
                            <td>{site.name}</td>
                        </tr>
                        <tr>
                            <td>Host</td>
                            <td>
                                <a
                                    target="_blank"
                                    href={
                                        "https://" +
                                        this.props.site.primary_domain
                                    }
                                    rel="noopener noreferrer"
                                >
                                    {this.props.site.primary_domain}
                                    <FontAwesomeIcon
                                        icon={faExternalLinkAlt}
                                        className="ml-2"
                                    />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Site Type</td>
                            <td>{this.props.site.site_type}</td>
                        </tr>
                        <tr>
                            <td>Create At</td>
                            <td>
                                {TimeStampHelper.standardDateFormat(
                                    this.props.site.created_at
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Flag</td>
                            <td>{this.props.site.flag}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>{serverDetail.location}</td>
                        </tr>
                        <tr>
                            <td>IP Address</td>
                            <td>{serverDetail.ip_address}</td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default SiteDetailComponent;
