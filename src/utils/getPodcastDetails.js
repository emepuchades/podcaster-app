import { getPodcasts } from "/src/utils/getPodcast";

export async function getPodcastDetails(id) {
  const podcastsDetailsData = localStorage.getItem("podcastsDetails");
  const podcastDetails = podcastsDetailsData
    ? JSON.parse(podcastsDetailsData)
    : [];
  const storedPodcastDetails = podcastDetails.find(
    (podcast) => podcast.id === id
  );
  try {
    if (!storedPodcastDetails) {
      const response = await fetch(
        `https://itunes.apple.com/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode`
      );
      const data = await response.json();
      const updatedPodcastDetails = [...podcastDetails, { id, ...data }];
      localStorage.setItem(
        "podcastsDetails",
        JSON.stringify(updatedPodcastDetails)
      );
      localStorage.setItem("lastFetchTimeDetails", Date.now().toString());
      return data;
    }

    console.log("podcastDetails[0]", podcastDetails);
    return {storedPodcastDetails, selectedPodcast};
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
