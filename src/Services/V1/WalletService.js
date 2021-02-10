import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const walletCredit = async (data) => {
    const _data = walletBody(data);
    const response = await Gateway.authGateway(
        "PUT",
        V1.customers.wallet + "credit/" + parseInt(data.customer_id),
        _data
    );
    return response;
};
const walletBody = (data) => {
    let _data = {};
    _data.amount = data.amount;
    return JSON.stringify(_data);
};

const walletDebit = async (data) => {
    const _data = walletBody(data);
    const response = await Gateway.authGateway(
        "PUT",
        V1.customers.wallet + "debit/" + parseInt(data.customer_id),
        _data
    );
    return response;
};

const WalletService = {
    walletCredit,
    walletDebit,
};

export default WalletService;
