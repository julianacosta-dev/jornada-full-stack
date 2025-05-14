// Fetch (native) or Axios
import axios from "axios";

const URL = "http://localhost:3001";

const artistsResponse = await axios.get(`${URL}/artists`);
const songsResponse = await axios.get(`${URL}/songs`);

export const artistsArray = artistsResponse.data;
export const songsArray = songsResponse.data;

//console.log(artistsResponse.data);