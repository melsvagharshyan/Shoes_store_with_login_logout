import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: null,
    id: null,
    token: null
}


const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
        },
        deleteUser(state) {
            state.email = null;
            state.id = null;
            state.token = null;
        }
    }
})

export const {setUser, deleteUser} = userReducer.actions;

export default userReducer.reducer;