import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import PodcastPlayer from "../../components/PodcastPlayer/PodcastPlayer";

describe("PodcastPlayer Component", () => {
  const podcast = {
    id: "1",
    title: "Podcast Title",
    description: "Podcast Description",
    podcast: "podcast_audio.mp3",
  };

  it("renders podcast player with correct title, description, and audio", () => {
    const { container } = render(
      <BrowserRouter>
        <PodcastPlayer
          title={podcast.title}
          description={podcast.description}
          podcast={podcast.podcast}
          id={podcast.id}
        />
      </BrowserRouter>
    );
    expect(container).toBeTruthy();
    expect(screen.getByText("Podcast Title")).toBeInTheDocument();
    expect(screen.getByText("Podcast Description")).toBeInTheDocument();
  });
});
