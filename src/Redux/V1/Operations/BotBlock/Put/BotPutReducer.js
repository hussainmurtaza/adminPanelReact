import OPERATION from "Redux/V1/Operations/ActionType";

const BotBlockReducer = (
    state = {
        loading: false,
        success: false,
        bot_block: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case OPERATION.BOT_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case OPERATION.BOT_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                bot_block: action.response,
            };
        case OPERATION.BOT_PUT_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default BotBlockReducer;
