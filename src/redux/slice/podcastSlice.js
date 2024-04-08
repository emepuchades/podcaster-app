import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  podcasts: [],
  lastFetchTime: null,
  loader: true,
};

const podcastSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    fetchPodcastsSuccess(state, action) {
      state.podcasts = action.payload;
      state.lastFetchTime = Date.now();
    },
    fetchPodcastsLoader(state, action) {
      state.loader = action.payload;
    },
  },
});

export const { fetchPodcastsSuccess, fetchPodcastsLoader } = podcastSlice.actions;
export default podcastSlice.reducer;
