import { combineReducers } from "redux";
import VoucherGetReducer from "Redux/V1/Vouchers/Get/VoucherGetReducer";
import VoucherFirstReducer from "Redux/V1/Vouchers/First/VoucherFirstReducer";
import VoucherDeleteReducer from "Redux/V1/Vouchers/Delete/VoucherDeleteReducer";
import VoucherPostReducer from "Redux/V1/Vouchers/Post/VoucherPostReducer";
import VoucherPutReducer from "Redux/V1/Vouchers/Put/VoucherPutReducer";

const VoucherRootReducer = combineReducers({
    list: VoucherGetReducer,
    detail: VoucherFirstReducer,
    delete: VoucherDeleteReducer,
    create: VoucherPostReducer,
    update: VoucherPutReducer,
});
export default VoucherRootReducer;
