import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    menData: [],
    womenData: [],
    jeweleryData: [],
    loading: false
}

const ProductsReducer = createSlice({
    name: "products",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setMenData(state, action) {
            state.menData = action.payload;
        },
        setWomenData(state, action) {
            state.womenData = action.payload;
        },
        setJeweleryData(state, action) {
            state.jeweleryData = action.payload;
        }
    }
})

//Actions
export const {
    setLoading,
    setMenData,
    setWomenData,
    setJeweleryData,
} = ProductsReducer.actions;


// Thunks
export const getMenData = () => async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`);
    dispatch(setLoading(false));
    dispatch(setMenData(response.data));

}

export const getWomenData = () => async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.get(`https://fakestoreapi.com/products/category/women's clothing`);
    dispatch(setLoading(false));
    dispatch(setWomenData(response.data));

}

export const getJeweleryData = () => async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.get(`https://fakestoreapi.com/products/category/jewelery`);
    dispatch(setLoading(false));
    dispatch(setJeweleryData(response.data));

}




export default ProductsReducer.reducer;


