import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PodcastDetail.style.css";
import CardPodcast from "../../components/CardPodcast/CardPodcast";
import PodcastDetails from "../../components/PodcastDetails/PodcastDetails";
import { getPodcastDetails } from "../../utils/getPodcastDetails";
import { getPodcasts } from "../../utils/getPodcast";

function PodcastDetail({ setLoader }) {
  const { id } = useParams();
  !localStorage.getItem("podcasts") && getPodcasts();
  const podcastsData = localStorage.getItem("podcasts");
  const [podcasts, setPodcasts] = useState(podcastsData ? JSON.parse(podcastsData) : []);
  const podcastsDetailsData = localStorage.getItem("podcastsDetails");
  const podcastDetails = podcastsDetailsData ? JSON.parse(podcastsDetailsData): [];
  const [selectedPodcast, setSelectedPodcast] = useState(
    podcasts.find((podcast) => podcast.id.attributes["im:id"] === id)
  );
 const [storedPodcastDetails, setStoredPodcastDetails] = useState(
   podcastDetails.find((podcast) => podcast.id === id)
 );
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const data = await getPodcastDetails(id);
        setStoredPodcastDetails(data);
      } catch (error) {
        console.error("Error in get podcast:", error);
      }
    };

    fetchData();
  }, []);

 
  useEffect(() => {
    storedPodcastDetails && setLoader(false);
  }, [storedPodcastDetails]);

  return (
    <div className="container-podcast-details">
      <CardPodcast
        title={selectedPodcast["im:name"]?.label}
        artist={selectedPodcast["im:artist"]?.label}
        summary={selectedPodcast?.summary.label}
        img={selectedPodcast["im:image"][2]?.label}
      />
      <PodcastDetails
        resultCount={storedPodcastDetails?.resultCount}
        episodes={storedPodcastDetails?.results.slice(1)}
        id={id}
      />
    </div>
  );
}

export default PodcastDetail;
