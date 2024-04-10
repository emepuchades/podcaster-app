import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Episode from "../../pages/episode/Episode";
import PodcastDetails from "../../components/PodcastDetails/PodcastDetails";
import { BrowserRouter } from "react-router-dom";

describe("Episode Page", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <PodcastDetails />
      </BrowserRouter>
    );
    expect(container).toBeTruthy();
  });
});
