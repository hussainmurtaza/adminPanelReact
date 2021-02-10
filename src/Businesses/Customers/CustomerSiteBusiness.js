import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import TimeStampHelper from "Helpers/TimeStampHelper";

const customerSite = (data) => {
    if (data) {
        const list = data.map((site) => {
            return (
                <React.Fragment>
                    <tr>
                        <td>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={"/site/" + site.host}
                            >
                                {site.site_name}
                            </a>
                        </td>
                        <td>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={"/site/" + site.host}
                            >
                                {site.identity}
                            </a>
                        </td>
                        <td>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={"https://" + site.domain}
                            >
                                {site.domain}
                                <FontAwesomeIcon
                                    icon={faExternalLinkAlt}
                                    className="ml-2"
                                />
                            </a>
                        </td>
                        <td>{site.site_type}</td>
                        <td>{site.location}</td>
                        <td>{site.updates}</td>
                        <td>
                            {TimeStampHelper.standardDateFormat(
                                site.created_at
                            )}
                        </td>
                    </tr>
                </React.Fragment>
            );
        });
        return list;
    }
};

const CustomerSiteBusiness = {
    customerSite,
};

export default CustomerSiteBusiness;
