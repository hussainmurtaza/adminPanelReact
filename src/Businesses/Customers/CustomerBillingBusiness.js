import React from "react";
import TimeStampHelper from "Helpers/TimeStampHelper";

const customerBilling = (data) => {
    if (data) {
        const list = data.map((billing) => {
            return (
                <React.Fragment>
                    <tr>
                        <td>
                            {TimeStampHelper.standardDateFormat(
                                billing.billing_start_date
                            )}
                        </td>
                        <td>
                            {TimeStampHelper.standardDateFormat(
                                billing.billing_last_date
                            )}
                        </td>
                        <td>
                            {TimeStampHelper.standardDateFormat(
                                billing.billing_next_date
                            )}
                        </td>
                        <td>
                            {TimeStampHelper.standardDateFormat(
                                billing.payment_last_date
                            )}
                        </td>
                    </tr>
                </React.Fragment>
            );
        });
        return list;
    }
};

const CustomerBillingBusiness = {
    customerBilling,
};

export default CustomerBillingBusiness;
