import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

export const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState: {
    loginLoading: false,
    signUpLoading: false,
    updateUserDetailsLoading: false,
    userInfo: {},
    token: null,
  },
  reducers: {
    // ? login actions
    login(state) {
      return { ...state, loginLoading: true };
    },
    loginSuccess(state, { payload }) {
      return {
        ...state,
        loginLoading: false,
        userInfo: payload.data.data,
        token: payload.data.token,
      };
    },
    loginError(state, { payload }) {
      message.error(payload.message);
      return { ...state, loginLoading: false, userInfo: {}, token: null };
    },

    // ? signup actions
    signUp(state) {
      return { ...state, signUpLoading: true };
    },
    signUpSuccess(state, { payload }) {
      return {
        ...state,
        signUpLoading: false,
        userInfo: payload.data.data,
        token: payload.data.token,
      };
    },
    signUpError(state, { payload }) {
      message.error(payload.message);
      return { ...state, signUpLoading: false, userInfo: {}, token: null };
    },

    // ? update users details
    updateUsersDetails(state) {
      return { ...state, updateUserDetailsLoading: true };
    },

    updateUserDetailsSuccess(state, { payload }) {
      message.success(payload.message);
      return {
        ...state,
        updateUserDetailsLoading: false,
        userInfo: payload.getProfile.data,
      };
    },

    updateUserDetailsError(state, { payload }) {
      message.error(payload.message);
      return { ...state, updateUserDetailsLoading: false };
    },
  },
});

export const {
  login, // ? login
  loginError,
  loginSuccess,
  signUp, // ? signup
  signUpSuccess,
  signUpError,
  updateUsersDetails, // ? update users details
  updateUserDetailsSuccess,
  updateUserDetailsError,
} = userAuthSlice.actions;
export default userAuthSlice.reducer;
