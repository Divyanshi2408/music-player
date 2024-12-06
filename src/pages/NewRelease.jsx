import React, { useState, useEffect } from 'react';
import SongSection from '../components/SongSection'; 
import { fetchNewReleases } from '../services/itunesService';
export const NewRelease = () => {
  const [newRelease, setNewRelease] = useState([]);
  const [currentSongId, setCurrentSongId] = useState(null); 
  const [audio, setAudio] = useState(null); 
  const [showAll, setShowAll] = useState(false); 


  useEffect(() => {
    const getNewReleases = async () => {
      const releases = await fetchNewReleases();
     
      setNewRelease(
        releases.map((song, index) => ({
          id: index,
          trackId: song.id.attributes['im:id'],
          trackName: song['im:name'].label,
          artistName: song['im:artist'].label,
          artworkUrl100: song['im:image'][2].label, 
          previewUrl: song.link.attributes.href, 
        }))
      );
    };

    getNewReleases();
  }, []); 


const handlePlayClick = (song) => {
  
  if (audio) {
    audio.pause();
    audio.currentTime = 0; 
  }
  if (song.previewUrl) {
    const newAudio = new Audio(song.previewUrl);
    newAudio.play()
      .catch((error) => {
        console.error("Error playing audio:", error);
        alert("Failed to play the audio. This might be an unsupported format.");
      });
    setAudio(newAudio);
    setCurrentSongId(song.trackId);
  } else {
    console.error("Preview URL is not available.");
    alert("No preview available for this song.");
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

  const songsToDisplay = showAll ? newRelease : newRelease.slice(0, 4);

  return (
    <div>
      <SongSection
        trackName={<h2>New Release <span>Songs</span></h2>}
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
