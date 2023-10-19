import { ADD_BASKET, GET_BASKET } from "../types";


export default function basketReducer(state = [] , action) {
    const { type , payload } = action
    switch (type) {
        case GET_BASKET:
            return payload;
        case ADD_BASKET:
            return state.some((product) => product.id === payload.id ) ? state : [...state, payload];
        default:
            return state;
    }
}