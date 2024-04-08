
export async function getPodcastDetails(id) {
  try {
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
