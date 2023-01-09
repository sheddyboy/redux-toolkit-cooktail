import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./features/cocktailSlice";

const store = configureStore({
  reducer: {
    app: cocktailSlice.reducer,
  },
});

export default store;
