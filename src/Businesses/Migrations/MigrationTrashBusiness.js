import React from "react";
import TimeStampHelper from "Helpers/TimeStampHelper";
import Capitilize from "Helpers/CapitilizeHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

const migrationTrash = (data) => {
    if (data) {
        const list = data.map((migration) => {
            return (
                <React.Fragment>
                    <tr>
                        <td>
                            <a
                                href={"/customer/" + migration.user_id}
                                target="
								_blank"
                            >
                                {Capitilize.capital(`${migration.first_name}`)}{" "}
                                {Capitilize.capital(`${migration.last_name}`)}
                            </a>
                        </td>
                        <td>
                            {migration.agency_name === null
                                ? "-"
                                : Capitilize.capital(
                                      `${migration.agency_name}`
                                  )}
                        </td>
                        <td>
                            {migration.custom_domain === null &&
                            migration.staging_domain === null
                                ? "-"
                                : null}
                            {migration.custom_domain === null ? null : (
                                <a
                                    className="domain-list"
                                    target="
									_blank"
                                    href={"https://" + migration.custom_domain}
                                >
                                    <Badge
                                        variant="primary"
                                        className="mr-1"
                                        title="Custom Domain"
                                    >
                                        C
                                    </Badge>
                                    {migration.custom_domain}
                                    <FontAwesomeIcon
                                        icon={faExternalLinkAlt}
                                        className="ml-2"
                                    />
                                </a>
                            )}
                            {migration.staging_domain === null ? null : (
                                <a
                                    className="domain-list"
                                    target="
									_blank"
                                    href={"https://" + migration.staging_domain}
                                >
                                    <Badge
                                        variant="primary"
                                        className="mr-1"
                                        title="Staging Domain"
                                    >
                                        S
                                    </Badge>
                                    {migration.staging_domain}
                                    <FontAwesomeIcon
                                        icon={faExternalLinkAlt}
                                        className="ml-2"
                                    />
                                </a>
                            )}
                        </td>

                        <td className="migration-trash-status">
                            {Capitilize.removeUnderscore(`${migration.status}`)}
                        </td>

                        <td>
                            {migration.created_at === null
                                ? "-"
                                : TimeStampHelper.standardDateFormat(
                                      `${migration.site_migration_created_at}`
                                  )}
                        </td>
                    </tr>
                </React.Fragment>
            );
        });
        return list;
    }
};

const MigrationTrashBusiness = {
    migrationTrash,
};

export default MigrationTrashBusiness;
