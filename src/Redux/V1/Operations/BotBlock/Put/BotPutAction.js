import OPERATION from "Redux/V1/Operations/ActionType";

const botPut = (data) => {
    return {
        type: OPERATION.BOT_PUT,
        request: data,
    };
};
const botPutSuccess = (data) => {
    return {
        type: OPERATION.BOT_PUT_SUCCESS,
        response: data,
    };
};
const botPutFailed = (data) => {
    return {
        type: OPERATION.BOT_PUT_FAILED,
        response: data,
    };
};
const BotBlockAction = {
    botPut,
    botPutSuccess,
    botPutFailed,
};
export default BotBlockAction;
