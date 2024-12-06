import React, { useEffect, useState } from "react";
import "./ArtistGallery.css"; 

const ArtistGallery = ({ artistMbids }) => {
  const [artistsData, setArtistsData] = useState([]);
  const [showAll, setShowAll] = useState(false); 

  useEffect(() => {
    const fetchArtistsData = async () => {
      const results = await Promise.all(
        artistMbids.map(async (mbid) => {
          try {
            const response = await fetch(
              `https://webservice.fanart.tv/v3/music/${mbid}?api_key=1f3ba9d75db7c9bf2957378961c0d73e`
            );
            const data = await response.json();
            return { mbid, ...data };
          } catch (error) {
            console.error(`Error fetching data for MBID ${mbid}:`, error);
            return null;
          }
        })
      );

      setArtistsData(results.filter((artist) => artist !== null));
    };

    fetchArtistsData();
  }, [artistMbids]);


  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  const artistsToDisplay = showAll ? artistsData : artistsData.slice(0, 6);

  return (
    <div className="artists-gallery-container">
      <h2 className="title">Popular <span>Artists</span></h2>
      <div className="cont">
      <div className="artists-container">
        {artistsToDisplay.map((artist) => (
          <div key={artist.mbid_id} className="artist-card">
            <img
              src={artist.artistthumb?.[0]?.url || "placeholder.jpg"}
              alt={artist.name}
              className="artist-image"
            />
            <p className="artist-name">{artist.name}</p>
          </div>
        ))}
      </div>
      <div className="view-all">
        <button className="view-all-button" onClick={handleViewAllClick}>
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
      </div>
    </div>
  );
};

export default ArtistGallery;
