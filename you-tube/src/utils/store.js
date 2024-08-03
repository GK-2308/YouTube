import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import selectedSlice from "./selectedSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    selected: selectedSlice,
    chat: chatSlice,

    // search: searchSlice,
    // chat: chatSlice,
  },
});

export default store;
