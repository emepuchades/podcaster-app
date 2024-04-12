import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPodcast from "../../components/CardPodcast/CardPodcast";
import PodcastPlayer from "../../components/PodcastPlayer/PodcastPlayer";

function Episode({ setLoader }) {
  const { id, idepisode } = useParams();
  !localStorage.getItem("podcasts") && getPodcasts();
  const podcastsData = localStorage.getItem("podcasts");
  const podcasts = podcastsData ? JSON.parse(podcastsData) : [];
  const podcastsDetailsData = localStorage.getItem("podcastsDetails");
  const podcastDetails = podcastsDetailsData
    ? JSON.parse(podcastsDetailsData)
    : [];
  const selectedPodcastDetails = podcastDetails.find(
    (podcast) => podcast.id === id
  );
   const selectedPodcast = podcasts.find(
    (podcast) => podcast.id.attributes["im:id"] === id
  );
  const selectedEpisodie = selectedPodcastDetails.results.find(
    (episodie) => episodie.trackId === parseInt(idepisode)
  );

  useEffect(() => {
    setLoader(false);
  }, [selectedEpisodie]);

  return (
    <div className="container-podcast-details">
      <CardPodcast
        title={selectedPodcast["im:name"].label}
        artist={selectedPodcast["im:artist"].label}
        summary={selectedPodcast.summary.label}
        img={selectedPodcast["im:image"][2].label}
      />
      <PodcastPlayer
        title={selectedEpisodie.trackName}
        description={selectedEpisodie.description}
        podcast={selectedEpisodie.previewUrl}
        id={id}
      />
    </div>
  );
}

export default Episode;
