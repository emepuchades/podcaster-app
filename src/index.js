import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getPodcasts } from "./utils/getPodcast.js";
import PodcastDetail from "./pages/podcastDetails/PodcastDetail.js";
import Header from "./components/Header/Header.js";
import Episode from "./pages/episode/Episode.js";

const AppContainer = () => {
  const [loader, setLoader] = useState(true);
  return (
    <Router>
      <Header loader={loader} />
      <Routes>
        <Route exact path="/" element={<App setLoader={setLoader} />} />
        <Route
          path="/podcast/:id"
          element={<PodcastDetail setLoader={setLoader} />}
        />
        <Route
          path="/podcast/:id/episode/:idepisode"
          element={<Episode setLoader={setLoader} />}
        />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<AppContainer />);
