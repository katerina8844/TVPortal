import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/authReducer";
import infoReducer from "./reducer/infoReducer";
import orderReducer from "./reducer/ordersReducer";
import basketReducer from "./reducer/basketReducer";
export default configureStore({
    reducer: {
        user: userReducer,
        info: infoReducer,
        order: orderReducer,
        basket: basketReducer
    }
});