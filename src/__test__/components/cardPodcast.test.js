import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardPodcast from "../../components/CardPodcast/CardPodcast";

describe("CardPodcast Component", () => {
  const podcast = {
    title: "Podcast Title",
    artist: "Podcast Artist",
    summary: "Podcast Summary",
    img: "podcast_image.jpg",
  };

  it("renders card with correct title, artist, summary, and image", () => {
    render(
      <CardPodcast
        title={podcast.title}
        artist={podcast.artist}
        summary={podcast.summary}
        img={podcast.img}
      />
    );

    expect(screen.getByText("Podcast Title")).toBeInTheDocument();

    expect(screen.getByText("by Podcast Artist")).toBeInTheDocument();

    expect(screen.getByText("Desciption:")).toBeInTheDocument();
    expect(screen.getByText("Podcast Summary")).toBeInTheDocument();

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "podcast_image.jpg");
  });
});
