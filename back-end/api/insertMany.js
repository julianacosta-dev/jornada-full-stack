import { artistsArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistsArray = artistsArray.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj };
    delete newArtistObj.id;

    return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = { ...currentSongObj };
    delete newSongObj.id;

    return newSongObj;
});

const artistsResponse = await db.collection('artists').insertMany(newArtistsArray);
const songsResponse = await db.collection('songs').insertMany(newSongsArray);

// console.log(artistsResponse);
// console.log(songsResponse);
