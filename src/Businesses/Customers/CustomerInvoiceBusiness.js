import React from "react";
import TimeStampHelper from "Helpers/TimeStampHelper";
import Capitilize from "Helpers/CapitilizeHelper";

const customerInvoice = (data) => {
    if (data) {
        const list = data.map((invoice) => {
            return (
                <React.Fragment>
                    <tr>
                        <td>
                            <a
                                href={"/invoice/" + invoice.id}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {invoice.reference}
                            </a>
                        </td>
                        <td>$ {invoice.amount_net}</td>
                        <td>{Capitilize.capital(invoice.status)}</td>
                        <td>
                            {TimeStampHelper.standardDateFormat(
                                invoice.created_at
                            )}
                        </td>
                    </tr>
                </React.Fragment>
            );
        });
        return list;
    }
};

const CustomerInvoiceBusiness = {
    customerInvoice,
};

export default CustomerInvoiceBusiness;
