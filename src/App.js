import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPodcastsSuccess } from "./redux/slice/podcastSlice";
import { getPodcasts } from "./utils/getPodcast";
import Card from "./components/Card/Card";

function App() {
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcasts.podcasts);
  const lastFetchTime = useSelector((state) => state.podcasts.lastFetchTime);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!lastFetchTime || Date.now() - lastFetchTime > 86400000) {
          const data = await getPodcasts();
          dispatch(fetchPodcastsSuccess(data.feed.entry));
        }
      } catch (error) {
        console.error("Error in get podcast:", error);
      }
    };
    
    fetchData();
  }, [dispatch, lastFetchTime]);
  
  return (
    <div className="container-app">
      <div className="card-container">
        {podcasts.map((podcast) => (
          <div key={podcast.id.label}>
            <Card
              artist={podcast["im:artist"].label}
              title={podcast["im:name"].label}
              img={podcast["im:image"][0].label}
              id={podcast.id.attributes["im:id"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
