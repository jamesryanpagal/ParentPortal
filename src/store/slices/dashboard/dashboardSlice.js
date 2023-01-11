import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

export const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState: {
    subjectsLoading: false,
    firstQuarterLoading: false,
    secondQuarterLoading: false,
    thirdQuarterLoading: false,
    fourthQuarterLoading: false,
    subjects: [],
    quarters: {
      first: [],
      second: [],
      third: [],
      fourth: [],
    },
  },
  reducers: {
    // ? for getting subjects
    getSubjects(state) {
      return { ...state, subjectsLoading: true };
    },
    getSubjectsSuccess(state, { payload }) {
      return { ...state, subjectsLoading: false, subjects: payload.data };
    },

    // ? for getting quaters
    // ? first
    getFirstQuarters(state, { payload }) {
      return { ...state, firstQuarterLoading: true };
    },
    getFirstQuarterSuccess(state, { payload }) {
      return {
        ...state,
        firstQuarterLoading: false,
        quarters: { ...state.quarters, first: payload.data },
      };
    },
    getFirstQuarterError(state, { payload }) {
      message.error(payload);
      return { ...state, firstQuarterLoading: false, quarters: {} };
    },

    // ? second
    getSecondQuarters(state, { payload }) {
      return { ...state, secondQuarterLoading: true };
    },
    getSecondQuarterSuccess(state, { payload }) {
      return {
        ...state,
        secondQuarterLoading: false,
        quarters: { ...state.quarters, second: payload.data },
      };
    },
    getSecondQuarterError(state, { payload }) {
      message.error(payload);
      return { ...state, secondQuarterLoading: false, quarters: {} };
    },

    // ? third
    getThirdQuarters(state, { payload }) {
      return { ...state, thirdQuarterLoading: true };
    },
    getThirdQuarterSuccess(state, { payload }) {
      return {
        ...state,
        thirdQuarterLoading: false,
        quarters: { ...state.quarters, third: payload.data },
      };
    },
    getThirdQuarterError(state, { payload }) {
      message.error(payload);
      return { ...state, thirdQuarterLoading: false, quarters: {} };
    },

    // ? fourth
    getFourthQuarters(state, { payload }) {
      return { ...state, fourthQuarterLoading: true };
    },
    getFourthQuarterSuccess(state, { payload }) {
      return {
        ...state,
        fourthQuarterLoading: false,
        quarters: { ...state.quarters, fourth: payload.data },
      };
    },
    getFourthQuarterError(state, { payload }) {
      message.error(payload);
      return { ...state, fourthQuarterLoading: false, quarters: {} };
    },
  },
});

export const {
  getSubjects,
  getSubjectsSuccess,
  getFirstQuarters,
  getFirstQuarterSuccess,
  getFirstQuarterError,
  getSecondQuarters,
  getSecondQuarterSuccess,
  getSecondQuarterError,
  getThirdQuarters,
  getThirdQuarterSuccess,
  getThirdQuarterError,
  getFourthQuarters,
  getFourthQuarterSuccess,
  getFourthQuarterError,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
