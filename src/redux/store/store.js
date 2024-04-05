import { configureStore } from "@reduxjs/toolkit";
import podcastReducer from "../slice/podcastSlice";

const store = configureStore({
  reducer: {
    podcasts: podcastReducer,
  },
});

export default store;
