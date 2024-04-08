import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PodcastDetail.style.css';
import CardPodcast from "../../components/CardPodcast/CardPodcast";
import PodcastDetails from "../../components/PodcastDetails/PodcastDetails";
import { getPodcastDetails } from "../../utils/getPodcastDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchPodcastsDetailsSuccess } from "../../redux/slice/podcastDetailsSlice";
import { fetchPodcastsLoader } from "../../redux/slice/podcastSlice";

function PodcastDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedPodcast = useSelector((state) => {
    return state.podcasts.podcasts.find(
      (podcast) => podcast.id.attributes["im:id"] === id
    );
  });    
  const podcastDetails = useSelector((state) => state.podcastDetails);
  const loader = useSelector((state) => state.podcasts.loader);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPodcastDetails(id);
        dispatch(fetchPodcastsDetailsSuccess(data));
        dispatch(fetchPodcastsLoader(false));
      } catch (error) {
        console.error("Error in get podcast:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-podcast-details">
      {console.log('loader', loader)}
      <CardPodcast
        title={selectedPodcast["im:name"].label}
        artist={selectedPodcast["im:artist"].label}
        summary={selectedPodcast.summary.label}
        img={selectedPodcast["im:image"][2].label}
      />
      <PodcastDetails
        resultCount={podcastDetails?.resultCount}
        episodes={podcastDetails?.results.slice(1)}
        id={id}
      />
    </div>
  );
}

export default PodcastDetail;
