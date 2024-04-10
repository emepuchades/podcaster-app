import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PodcastDetail.style.css";
import CardPodcast from "../../components/CardPodcast/CardPodcast";
import PodcastDetails from "../../components/PodcastDetails/PodcastDetails";
import { getPodcastDetails } from "../../utils/getPodcastDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchPodcastsLoader } from "../../redux/slice/podcastSlice";

function PodcastDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const podcastsData = localStorage.getItem("podcasts");
  const podcasts = podcastsData ? JSON.parse(podcastsData) : [];
  const selectedPodcast = useSelector((state) => {
    return podcasts.find((podcast) => podcast.id.attributes["im:id"] === id);
  });
  const podcastsDetailsData = localStorage.getItem("podcastsDetails");
  const podcastDetails = podcastsDetailsData
    ? JSON.parse(podcastsDetailsData)
    : [];
  const [storedPodcastDetails, setStoredPodcastDetails] = useState(
    podcastDetails.find((podcast) => podcast.id === id)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchPodcastsLoader(true));
        if (!storedPodcastDetails) {
          const data = await getPodcastDetails(id);
          const updatedPodcastDetails = [...podcastDetails, { id, ...data }];
          localStorage.setItem(
            "podcastsDetails",
            JSON.stringify(updatedPodcastDetails)
          );
          setStoredPodcastDetails(data);
        }
        localStorage.setItem("lastFetchTimeDetails", Date.now().toString());
      } catch (error) {
        console.error("Error in get podcast:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    storedPodcastDetails && dispatch(fetchPodcastsLoader(false));
  }, [dispatch, storedPodcastDetails]);

  return (
    <div className="container-podcast-details">
      <CardPodcast
        title={selectedPodcast["im:name"].label}
        artist={selectedPodcast["im:artist"].label}
        summary={selectedPodcast.summary.label}
        img={selectedPodcast["im:image"][2].label}
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
