import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./TrendingSongs.css"; 

const TrendingSongs = () => {
  const [songs, setSongs] = useState([]);
  const [visibleSongs, setVisibleSongs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [playingSong, setPlayingSong] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false); 
  const [currentSong, setCurrentSong] = useState(null); 

  useEffect(() => {
    const fetchTrendingSongs = async () => {
      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=49169dc06ead1e32aafe907d00a6d489&format=json`
        );
        const data = await response.json();
        setSongs(data.tracks.track);
        setVisibleSongs(data.tracks.track.slice(0, 7));
      } catch (error) {
        console.error("Error fetching trending songs:", error);
      }
    };

    fetchTrendingSongs();
  }, []);

  const handleViewAll = () => {
    if (showAll) {
      setVisibleSongs(songs.slice(0, 7));
      setShowAll(false);
    } else {
      setVisibleSongs(songs);
      setShowAll(true);
    }
  };

  const handlePlaySong = async (song) => {
    if (currentSong && currentSong.name === song.name) {
      
      setIsPlaying(false);
      setCurrentSong(null);
      setVideoUrl("");
    } else {
      
      try {
        const searchResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
            `${song.name} ${song.artist.name}`
          )}&key=AIzaSyBPJ41-HUuzgKb65RLifCaFeVDckmAtppc&type=video`
        );
        const searchData = await searchResponse.json();
        const videoId = searchData.items[0]?.id?.videoId;

        if (videoId) {
          setVideoUrl(`https://www.youtube.com/watch?v=${videoId}`);
          setPlayingSong(song.name);
          setIsPlaying(true);
          setCurrentSong(song); 
        } else {
          console.error("No video found for this song.");
          setVideoUrl("");
        }
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    }
  };

  const handleStopSong = () => {
    setIsPlaying(false);
    setCurrentSong(null);
    setVideoUrl("");
  };

  return (
    <div className="trending-songs-container">
      <h2 className="title">Treanding <span>Songs</span></h2>
      <table className="songs-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Listeners</th>
            <th>Playcount</th>
            <th>Play</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {visibleSongs.map((song, index) => (
            <tr key={song.url}>
              <td>#{index + 1}</td>
              <td>{song.name}</td>
              <td>{song.artist.name}</td>
              <td>{song.listeners ? song.listeners : "Unknown"}</td>
              <td>{song.playcount || "N/A"}</td>
          
              <td>
      {currentSong && currentSong.name === song.name ? (
        <button className="stop-btn" onClick={handleStopSong}>
          <StopIcon />
        </button>
      ) : (
        <button className="play-btn" onClick={() => handlePlaySong(song)}>
          <PlayArrowIcon />
        </button>
      )}
    </td>
              <td>
                <button className="favorite-btn"><FavoriteIcon /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="view-all">
        <button className="view-all-button" onClick={handleViewAll}>
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      {videoUrl && (
        <div className="player-container">
          <h3 className="now">Now Playing: {playingSong}</h3>
          <ReactPlayer
            url={videoUrl}
            playing={isPlaying} // Controlled by state
            controls
            width="0"
            height="0"
          />
        </div>
      )}
    </div>
  );
};

export default TrendingSongs;
