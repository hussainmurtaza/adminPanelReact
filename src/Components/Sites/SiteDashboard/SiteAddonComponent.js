import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TimeStampHelper from "Helpers/TimeStampHelper";
class SiteAddonComponent extends Component {
    render() {
        const siteAddon = this.props.site.addons;
        return (
            <React.Fragment>
                <h4 className="page-header mg-b-15 mt-4">Site Addons</h4>
                <Table striped bordered hover className="site-update-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Purchased At</th>
                            <th>Expired At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(siteAddon).length === 0 ? (
                            <td colspan="100%">No Date Available</td>
                        ) : (
                            siteAddon.map((site) => (
                                <tr>
                                    <td>{site.name}</td>
                                    <td>$ {site.amount_net}</td>
                                    <td>
                                        {TimeStampHelper.standardDateFormat(
                                            site.date_purchase
                                        )}
                                    </td>
                                    <td>
                                        {TimeStampHelper.standardDateFormat(
                                            site.date_expired
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default SiteAddonComponent;
