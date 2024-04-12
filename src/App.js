import React, { useState, useEffect } from "react";
import "./App.css";
import { getPodcasts } from "./utils/getPodcast";
import Card from "./components/Card/Card";

function App({ setLoader }) {
  const [podcasts, setPodcast] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const data = await getPodcasts();
        setPodcast(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    podcasts.length !== 0 && setLoader(false);
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
