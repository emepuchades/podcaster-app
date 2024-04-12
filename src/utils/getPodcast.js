export async function getPodcasts() {
  try {
    const podcastsData = localStorage.getItem("podcasts");
    const podcasts = podcastsData ? JSON.parse(podcastsData) : []
    const storedLastFetchTime = localStorage.getItem("lastFetchTime");
    if (
      !storedLastFetchTime ||
      Date.now() - parseInt(storedLastFetchTime) > 86400000
    ) {
      const response = await fetch(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      );
      const data = await response.json();
      localStorage.setItem("podcasts", JSON.stringify(data.feed.entry));
      localStorage.setItem("lastFetchTime", Date.now().toString());
      return data.feed.entry;
    }
    return podcasts;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
