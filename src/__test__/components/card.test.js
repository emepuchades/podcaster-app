import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Card from "../../components/Card/Card";
import { createMemoryHistory } from "history";

describe("Card Component", () => {
  const podcast = {
    id: "1",
    title: "Podcast Title",
    artist: "Podcast Artist",
    img: "podcast_image.jpg",
  };

  it("renders card with correct title, artist, and image", () => {
    const { container } = render(
      <BrowserRouter>
        <Card
          title={podcast.title}
          artist={podcast.artist}
          img={podcast.img}
          id={podcast.id}
        />
      </BrowserRouter>
    );

    expect(container).toBeTruthy();
    expect(screen.getByText("Podcast Title")).toBeInTheDocument();
    expect(screen.getByText("Autor: Podcast Artist")).toBeInTheDocument();
  });
});
