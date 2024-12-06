export const fetchNewReleases = async () => {
    try {
      const response = await fetch(
        'https://itunes.apple.com/us/rss/topalbums/limit=10/json' 
      );
      const data = await response.json();
      return data.feed.entry; 
    } catch (error) {
      console.error('Error fetching new releases:', error);
      return [];
    }
  };
  