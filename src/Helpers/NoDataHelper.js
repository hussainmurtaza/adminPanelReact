import React from "react";

const available = (list, loading = false) => {
    let message;
    if (loading === true) {
        message = (
            <td colspan="100%" className="no-data">
                Loading...
            </td>
        );
    } else if (list.length === 0 && loading === false) {
        message = <h5 className="no-data">No Data Available</h5>;
    } else {
        message = "";
    }
    return message;
};

const NoData = {
    available,
};

export default NoData;
