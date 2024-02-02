import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    error : null,
    loadng : false,
}

const userSlice = createSlice ({
name : 'user',
initialState,
reducers : {
    signInStart : (state) => {
    state.loadng = true;
    },
signInSuccess : (state, action) => {
state.currentUser = action.payloading;
state.loadng = false;
state.error = null;
},
signInFailure : (state, action) => {
    state.error = action.payloading;
    state.loadng = false;
    },
}
})

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;