import { combineReducers } from "redux";

//create static list of songs just for training

let songsReducer = () => {
  return [
    { title: "Duality", duration: "3.03" },
    { title: "Beautiful people", duration: "4.08" },
    { title: "Let it snow", duration: "3.30" }
  ];
};

//create reducer for the selected song.
let selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
