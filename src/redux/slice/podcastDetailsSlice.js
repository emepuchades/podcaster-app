import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resultCount: 0,
  results: [],
  lastFetchTime: null,
};

const podcastsDetailsSlice = createSlice({
  name: "podcastsDetails",
  initialState,
  reducers: {
    fetchPodcastsDetailsSuccess(state, action) {
      state.resultCount = action.payload.resultCount;
      state.results = action.payload.results;
      state.lastFetchTime = Date.now();
    },
  },
});

export const { fetchPodcastsDetailsSuccess } = podcastsDetailsSlice.actions;
export default podcastsDetailsSlice.reducer;
