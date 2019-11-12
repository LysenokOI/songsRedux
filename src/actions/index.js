//acyion creator
export let selectSong = song => {
  //return action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
