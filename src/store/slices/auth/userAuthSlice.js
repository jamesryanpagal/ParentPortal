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
      state = { ...state, loginLoading: true };
      return state;
    },
    loginSuccess(state, { payload }) {
      state = {
        ...state,
        loginLoading: false,
        userInfo: payload.data.data,
        token: payload.data.token,
      };
      return state;
    },
    loginError(state, { payload }) {
      message.error(payload.message);
      state = { ...state, loginLoading: false, userInfo: {}, token: null };
      return state;
    },

    // ? signup actions
    signUp(state) {
      state = { ...state, signUpLoading: true };
      return state;
    },
    signUpSuccess(state, { payload }) {
      state = {
        ...state,
        signUpLoading: false,
        userInfo: payload.data.data,
        token: payload.data.token,
      };
      return state;
    },
    signUpError(state, { payload }) {
      message.error(payload.message);
      state = { ...state, signUpLoading: false, userInfo: {}, token: null };
      return state;
    },

    // ? update users details
    updateUsersDetails(state) {
      state = { ...state, updateUserDetailsLoading: true };
      return state;
    },

    updateUserDetailsSuccess(state, { payload }) {
      message.success(payload.message);
      state = {
        ...state,
        updateUserDetailsLoading: false,
        userInfo: payload.getProfile.data,
      };
      return state;
    },

    updateUserDetailsError(state, { payload }) {
      message.error(payload.message);
      state = { ...state, updateUserDetailsLoading: false };
      return state;
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
