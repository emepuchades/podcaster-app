import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPodcastsLoader,
  fetchPodcastsSuccess,
} from "./redux/slice/podcastSlice";
import { getPodcasts } from "./utils/getPodcast";
import Card from "./components/Card/Card";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchPodcastsLoader(true));
  const podcastsData = localStorage.getItem("podcasts");
  const [podcasts, setPodcast] = useState(podcastsData ? JSON.parse(podcastsData) : []);
  const [searchTerm, setSearchTerm] = useState("");
  const storedLastFetchTime = localStorage.getItem("lastFetchTime");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (
          !storedLastFetchTime ||
          Date.now() - parseInt(storedLastFetchTime) > 86400000
        ) {
          const data = await getPodcasts();
          localStorage.setItem("podcasts", JSON.stringify(data.feed.entry));
          localStorage.setItem("lastFetchTime", Date.now().toString());
          setPodcast(data.feed.entry);
        }
      } catch (error) {
        console.error("Error in get podcast:", error);
      }
    };

    fetchData();
    dispatch(fetchPodcastsLoader(false));
  }, []);

   useEffect(() => {
     podcasts.length !== 0 && dispatch(fetchPodcastsLoader(false));
   }, [podcasts]);

  const filteredPodcasts = podcasts.filter((podcast) => {
    const titleMatch = podcast["im:name"].label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const authorMatch = podcast["im:artist"].label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return titleMatch || authorMatch;
  });

  return (
    <div>
      <div className="input-container">
        <p className="podcast-length">{filteredPodcasts.length}</p>
        <input
          type="text"
          placeholder="Filter podcasts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-filtered"
        />
      </div>
      <div className="card-container">
        {filteredPodcasts.map((podcast) => (
          <div key={podcast.id.label}>
            <Card
              artist={podcast["im:artist"].label}
              title={podcast["im:name"].label}
              img={podcast["im:image"][2].label}
              id={podcast.id.attributes["im:id"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
