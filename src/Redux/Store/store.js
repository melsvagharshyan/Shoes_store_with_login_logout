import {configureStore} from "@reduxjs/toolkit";
import Products from "../Reducers/ProductsReducer";
import singlePage from "../Reducers/SinglePageReducer";
import user from '../Reducers/UserReducer';


const store = configureStore({
    reducer: {
        Products,
        singlePage,
        user
    }
})


export default store;