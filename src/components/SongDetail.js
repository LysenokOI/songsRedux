import React from "react";
import { connect } from "react-redux";

/*let SongDetail = props => {
  //получим song: state.selectedSong как props === song: payload
  console.log(props);
  return <div>SongDetail</div>;
};*/
//отформатируем без props
let SongDetail = ({ song }) => {
  //чтобы избежать ошибки title == null
  if (!song) {
    return <div>Select Song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

//завернем SongDetail в connect, чтобы иметь доступ к redux store
// selectedSong это ключ из combinereducers
let mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
