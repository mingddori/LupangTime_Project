import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    session : null
}

export const authSlice =  createSlice({
    name : "auth",
    initialState,
    reducers : {
        setUser : (state, action) => {
            state.user = action.payload;
        },
        setSession : (state, action) => {
            state.session = action.payload;
        },
        logout : (state) => {
            state.user = null;
            state.session = null;
        }
    }
})

export const {setUser, setSession, logout} = authSlice.actions;

export default authSlice.reducer;