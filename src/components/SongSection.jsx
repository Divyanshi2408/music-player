import React from "react";
import "./SongSection.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

const SongSection = ({ trackName, songs, currentSongId,onViewAllClick, isShowingAll, onPlayClick, onStopClick }) => (
  <div className="song-section">
    <h2 className="heading">{trackName}</h2>
    <div className="songs-container">
      {songs.map((song) => (
        <div className="song-card" key={song.trackId}>
          <img src={song.artworkUrl100} alt={song.trackName} />
          <div >
            <h4>{song.trackName}</h4>
            <div className="player">
            <p>{song.artistName}</p>
            {currentSongId === song.trackId ? (
              <button className="stop-btn" onClick={onStopClick}>
              <StopIcon />
              </button>
            ) : (
              <button className="play-btn" onClick={() => onPlayClick(song)}>
              <PlayArrowIcon />
              </button>
            )}
          </div>
          
          </div>
        </div>
      ))}
    </div>
    <div className="view-all">
      <button onClick={onViewAllClick}>
         {isShowingAll ? "Show Less" : "View All"}
      </button>
   </div>
  </div>
);

export default SongSection;
