import { createSlice } from "@reduxjs/toolkit";

// ? plugins
import { message } from "antd";

export const childrenProfileSlice = createSlice({
  name: "childrenProfileSlice",
  initialState: {
    isLoading: false,
    childrenDetails: [],
  },
  reducers: {
    getChildren(state) {
      return { ...state, isLoading: true };
    },
    getChildrenSuccess(state, { payload }) {
      return { ...state, isLoading: false, childrenDetails: payload.data };
    },
    getChildrenError(state, { payload }) {
      message.error(payload.message);
      return { ...state, isLoading: false, childrenDetails: [] };
    },
  },
});

export const { getChildren, getChildrenSuccess, getChildrenError } =
  childrenProfileSlice.actions;
export default childrenProfileSlice.reducer;
