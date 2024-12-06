import axios from 'axios';

const LAST_FM_API_URL = 'http://ws.audioscrobbler.com/2.0/';
const API_KEY = '49169dc06ead1e32aafe907d00a6d489'; 

export const fetchLastFmTopTracks = async () => {
    try {
        const response = await axios.get(LAST_FM_API_URL, {
            params: {
                method: 'chart.gettoptracks',
                api_key: API_KEY,
                format: 'json',
            },
        });
        return response.data.tracks.track;
    } catch (error) {
        console.error('Error fetching Last.fm top tracks:', error);
        return [];
    }
};

export const fetchLastFmArtistDetails = async (artistName) => {
    try {
        const response = await axios.get(LAST_FM_API_URL, {
            params: {
                method: 'artist.getinfo',
                artist: artistName,
                api_key: API_KEY,
                format: 'json',
            },
        });
        return response.data.artist;
    } catch (error) {
        console.error('Error fetching artist details:', error);
        return null;
    }
};
