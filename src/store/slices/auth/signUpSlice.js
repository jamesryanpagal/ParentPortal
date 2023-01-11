// import { createSlice } from "@reduxjs/toolkit";
// import { message } from "antd";

// export const signUpSlice = createSlice({
//   name: "signUpSlice",
//   initialState: {
//     isLoading: false,
//     userInfo: {},
//     token: null,
//   },
//   reducers: {
//     signUp(state) {
//       state.isLoading = true;
//     },
//     signUpSuccess(state, { payload }) {
//       state.isLoading = false;
//       state.userInfo = payload.data.data;
//       state.token = payload.data.token;
//     },
//     signUpError(state, { payload }) {
//       message.error(payload.message);
//       state.isLoading = false;
//     },
//   },
// });

// export const { signUp, signUpSuccess, signUpError } = signUpSlice.actions;
// export default signUpSlice.reducer;
