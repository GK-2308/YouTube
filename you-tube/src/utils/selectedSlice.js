import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
  name: "selected",
  initialState: {
    isSelected: false,
    data: null,
  },
  reducers: {
    selectVideo: (state) => {
      state.isSelected = true;
    },
    selectData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { selectData, selectVideo } = selectedSlice.actions;
export default selectedSlice.reducer;
