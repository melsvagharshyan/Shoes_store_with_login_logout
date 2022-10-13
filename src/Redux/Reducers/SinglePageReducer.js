import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    singlePage: null
}

const singlePageReducer = createSlice({
    name: "singlePage",
    initialState,
    reducers: {
        setSinglePage(state, action) {
            state.singlePage = action.payload
        }
    }
});


export const {setSinglePage} = singlePageReducer.actions;

export const singlePageThunk = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch(setSinglePage(response.data));
    }
}

export default singlePageReducer.reducer;