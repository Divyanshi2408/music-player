import React, { useState, useEffect } from "react";
import SongSection from "../components/SongSection";

export const WeeklyTopSongsPage = () => {
  const [weeklyTopSongs, setWeeklyTopSongs] = useState([]);
  const [currentSongId, setCurrentSongId] = useState(null);
  const [audio, setAudio] = useState(null); 
  const [showAll, setShowAll] = useState(false);

  
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          "https://itunes.apple.com/us/rss/topsongs/limit=20/json"
        );
        const data = await response.json();

        
        const formattedSongs = data.feed.entry.map((song, index) => ({
          id: index,
          trackId: song.id.attributes["im:id"],
          trackName: song["im:name"].label,
          artistName: song["im:artist"].label,
          artworkUrl100: song["im:image"][2].label,
          previewUrl: song.link[1]?.attributes?.href || "", 
        }));

        setWeeklyTopSongs(formattedSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  
  const handlePlayClick = (song) => {
   
    if (audio) {
      audio.pause();
      audio.currentTime = 0; 
    }

    if (currentSongId !== song.trackId) {
      const newAudio = new Audio(song.previewUrl); 
      newAudio.play();
      setAudio(newAudio);
      setCurrentSongId(song.trackId);
    } else {
      setCurrentSongId(null); 
    }
  };

 
  const handleStopClick = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0; 
    }
    setCurrentSongId(null);
  };

 
  const handleViewAllClick = () => {
    setShowAll(!showAll); 
  };

 
  const songsToDisplay = showAll ? weeklyTopSongs : weeklyTopSongs.slice(0, 4);

  return (
    <div>
      <SongSection
        trackName={<h2>Weekly Top <span>Songs</span></h2>}
        songs={songsToDisplay}
        currentSongId={currentSongId} 
        onPlayClick={handlePlayClick} 
        onStopClick={handleStopClick} 
        onViewAllClick={handleViewAllClick}
        isShowingAll={showAll}
      />
      
      
      </div>
  
  );
};
