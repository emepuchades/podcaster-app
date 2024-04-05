import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  podcasts: [],
  lastFetchTime: null,
};

const podcastSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    fetchPodcastsSuccess(state, action) {
      state.podcasts = action.payload;
      state.lastFetchTime = Date.now();
    },
  },
});

export const { fetchPodcastsSuccess } = podcastSlice.actions;
export default podcastSlice.reducer;
