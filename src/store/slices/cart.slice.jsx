import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import userId from "../../utils/getUserId";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            const cart = action.payload;
            return cart;
        }
    }
})


    const getId = () => {

    }


export const getCartThunk = () => dispatch => {
    return axios.post("https://shalomapi-production.up.railway.app/api/v1/cart", userId(), getConfig())
        .then(res => dispatch(setCart(res.data.products)))
}

export const addToCartThunk = (data) => dispatch => {
    return axios.post("https://shalomapi-production.up.railway.app/api/v1/cart/addToCart", data, getConfig())
        .then(res => dispatch(getCartThunk()))
}
export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;