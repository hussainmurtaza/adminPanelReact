import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import TimeStampHelper from "Helpers/TimeStampHelper";
import Capitilize from "Helpers/CapitilizeHelper";
import RoundUpHelper from "Helpers/RoundUpHelper";

const generate = (data) => {
    if (data) {
        const list = data.map((voucher) => {
            return (
                <React.Fragment>
                    <tr>
                        <td>{voucher.promo_code}</td>
                        <td>
                            $ {RoundUpHelper.twodecimalplace(voucher.amount)}
                        </td>
                        <td className="text-center">
                            {voucher.max_usage_limit}
                        </td>

                        <td>
                            {TimeStampHelper.standardDateFormat(
                                `${voucher.start_date}`
                            )}
                        </td>

                        <td>
                            {TimeStampHelper.standardDateFormat(
                                `${voucher.end_date}`
                            )}
                        </td>
                        <td>
                            {" "}
                            {TimeStampHelper.standardDateFormat(
                                `${voucher.created_at}`
                            )}
                        </td>
                        <td>{Capitilize.capital(voucher.status)}</td>

                        <td className="text-center">
                            <a
                                href={"/voucher/" + voucher.id}
                                className="btn btn-link"
                                title="View"
                            >
                                <FontAwesomeIcon icon={faEye} />
                            </a>
                            <a
                                href={"/update-voucher/" + voucher.id}
                                className="btn btn-link"
                                title="Edit"
                            >
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </a>
                            <button
                                className="btn btn-link text-danger"
                                title="Delete"
                                onClick={() => this.voucherDelete(voucher.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </td>
                    </tr>
                </React.Fragment>
            );
        });
        return list;
    }
};

const VoucherBusiness = {
    generate,
};

export default VoucherBusiness;
