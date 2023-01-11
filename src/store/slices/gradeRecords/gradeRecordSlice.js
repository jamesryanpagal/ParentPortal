import { createSlice } from "@reduxjs/toolkit";

export const gradeRecordsSlice = createSlice({
  name: "gradeRecordsSlice",
  initialState: {
    isLoading: false,
    gradeList: [],
    errors: {},
  },
  reducers: {
    getGradeRecords(state) {
      return { ...state, isLoading: true };
    },
    getGradeRecordsSuccess(state, { payload }) {
      return { ...state, isLoading: false, gradeList: payload.data };
    },
    getGradeRecordsError(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        gradeList: [],
        errors: { ...payload },
      };
    },
  },
});

export const { getGradeRecords, getGradeRecordsSuccess, getGradeRecordsError } =
  gradeRecordsSlice.actions;
export default gradeRecordsSlice.reducer;
