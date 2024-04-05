import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PodcastDetail from "./pages/podcastDetails/PodcastDetail.js";
import Header from "./components/Header/Header.js";

ReactDOM.createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/podcast/:id" element={<PodcastDetail />} />
      </Routes>
    </Router>
  </Provider>
);
