import { createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload;
            return products;
        }
    } 
})

export const getProductsThunk = () => dispatch => {
    //dispatch(setIsLoading(true))
    axios.get("https://shalomapi-production.up.railway.app/api/v1/products")
        .then(res => dispatch(setProducts(res.data)))   
        //.finally(() => dispatch(setIsLoading(false)))
}



    


export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;