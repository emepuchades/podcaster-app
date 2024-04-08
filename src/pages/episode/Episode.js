import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPodcast from "../../components/CardPodcast/CardPodcast";
import { getPodcastDetails } from "../../utils/getPodcastDetails";
import { useSelector } from "react-redux";
import PodcastPlayer from "../../components/PodcastPlayer/PodcastPlayer";

function Episode() {
  const { id, idepisode } = useParams();
  const selectedPodcast = useSelector((state) => {
    return state.podcasts.podcasts.find(
      (podcast) => podcast.id.attributes["im:id"] === id
    );
  });
  const selectedPodcastDetails = useSelector((state) => {
    return state.podcastDetails.results.find((podcastDetail) => {
      return podcastDetail.trackId === parseInt(idepisode);
    });
  });

  return (
    <div className="container-podcast-details">
      <CardPodcast
        title={selectedPodcast["im:name"].label}
        artist={selectedPodcast["im:artist"].label}
        summary={selectedPodcast.summary.label}
        img={selectedPodcast["im:image"][2].label}
      />
      <PodcastPlayer
        title={selectedPodcastDetails.trackName}
        description={selectedPodcastDetails.description}
        podcast={selectedPodcastDetails.previewUrl}
      />
    </div>
  );
}

export default Episode;
