import React, { useState, useEffect } from "react";
import "./App.css";
import { getPodcasts } from "./utils/getPodcast";
import Card from "./components/Card/Card";

function App() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPodcasts();
        setPodcasts(data.feed.entry);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-app">
      <h1>Podcaster</h1>
      <div className="card-container">
        {podcasts.map((podcast) => (
          <div key={podcast.id.label}>
            <Card
              artist={podcast["im:artist"].label}
              title={podcast["im:name"].label}
              img={podcast["im:image"][0].label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
