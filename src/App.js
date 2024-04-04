import React, { useState, useEffect } from "react";
import "./App.css";
import { getPodcasts } from "./utils/getPodcast";
import Card from "./components/Card";

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
    <>
      <h1>Podcaster</h1>
      {podcasts.map((podcast) => (
        <div key={podcast.id.label}>
          <Card
            artist={podcast["im:artist"].label}
            title={podcast.title.label}
            img={podcast["im:image"][0].label}
          />
        </div>
      ))}
    </>
  );
}

export default App;
