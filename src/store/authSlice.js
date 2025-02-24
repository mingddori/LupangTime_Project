import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    loading : true,
}

export const authSlice =  createSlice({
    name : "auth",
    initialState,
    reducers : {
        setUser : (state, action) => {
            state.user = action.payload;
            state.loading = false; // 유저 데이터가 들어오면 로딩 완료
        },
        logout : (state) => {
            state.user = null;
            state.session = null;
        },
        setLoading : (state, action) => {
            state.loading = action.payload;  // 로딩 상태 업데이트 가능
        },
    }
})

export const {setUser, setLoading, logout} = authSlice.actions;

export default authSlice.reducer;