import { configureStore } from "@reduxjs/toolkit";
import podcastReducer from "../slice/podcastSlice";
import podcastsDetailsReducer from "../slice/podcastDetailsSlice";

const store = configureStore({
  reducer: {
    podcasts: podcastReducer,
    podcastDetails: podcastsDetailsReducer,
  },
});

export default store;
