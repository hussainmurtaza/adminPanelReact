import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Capitilize from "Helpers/CapitilizeHelper";
const generate = (data, logApproveFunction) => {
    return data.map((content) => (
        <tr>
            <td>
                {" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"/customer/" + content.customer.id}
                >
                    {content.customer.first_name +
                        " " +
                        content.customer.last_name}{" "}
                </a>
            </td>

            <td>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://" + content.container.primary_domain_name}
                >
                    {content.container.primary_domain_name}
                    <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="ml-2"
                    />
                </a>
            </td>
            <td> {Capitilize.capital(content.type)}</td>
            <td>{Capitilize.capital(content.slug)}</td>
            <td>{content.update_version}</td>
            <td>
                {content.request_by.first_name +
                    " " +
                    content.request_by.last_name}{" "}
                {`(${content.request_by.email})`}
            </td>
            <td className="text-center">
                <button
                    className="btn btn-link log-approve cursor-pointer"
                    title="Approve"
                    onClick={() => logApproveFunction(content.id)}
                >
                    <FontAwesomeIcon icon={faCheck} />
                </button>{" "}
            </td>
        </tr>
    ));
};

const WordpressLogsBusiness = {
    generate,
};

export default WordpressLogsBusiness;
