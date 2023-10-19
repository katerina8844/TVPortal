import axios from "axios";
import { ADD_BASKET, GET_BASKET } from "../types";


export const getBasket = (payload) => ({type: GET_BASKET , payload})
export const addBasket = (payload) => ({type: ADD_BASKET , payload})



export const getBasketThunk = (data) => (dispatch) => {
    axios.post('https://базара.net/index.php?route=/react/controller' , data)
    .then((res) => {
        if(res?.data?.success === true){
            dispatch(getBasket(res.data.data))
        }else alert('Error!')
    })
    .catch(console.log)
}

export const addBasketThunk = (data) => (dispatch) => {
    axios.post('https://базара.net/index.php?route=/react/controller' , data)
    .then((res) => {
        if(res?.data?.success === true){
            alert('ТОВАР ДОБАВЛЕН В КОРЗИНУ')
            dispatch(addBasket(res.data))
        }else alert('Error!')
    })
    .catch(console.log)
}