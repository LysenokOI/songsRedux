import React, { Component } from "react";
//create Connect function
import { connect } from "react-redux";
// присоединим selectSong к connector
import { selectSong } from "../actions";

class Songlist extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() =>
                this.props.selectSong(song)
              } /*здесь не вызвали метод selectSong()
              отдельно, потому что это была бы обычная функция js, а не action redux */
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    /*after connect(mapStateToProps)(Songlist) we have list of songs inside 
    console.log(this.props);*/
    /*получили selectSong как props после добавления в connect. dispatch function  
    console.log(this.props);*/
    return <div className="ui divided list">{this.renderList()} </div>;
  }
}

// convention function - call all the state inside redux store
//каждый раз обновляется state после onClick
//songs - это ключ из combinereducers
let mapStateToProps = state => {
  console.log(state); /*
  return state;*/
  return { songs: state.songs };
};

/*tell Provider about changes to the SongList.
connect поможет нам получить в качестве props для компонента <SongList /> 
данные из store

export default connect(mapStateToProps)(Songlist);
*/
/* присоединим selectSong к connector. передать selectSong как prop в render.
connect выполняет специальную функцию с selectSong - заворачивает в dispatch function
store.dispatch(selectSong(song))
 */
export default connect(
  mapStateToProps,
  { selectSong: selectSong } /* или { selectSong} */
)(Songlist);

/*example syntaxes of the connect
function connect(){
  return function(){
    return 'Connected';
  }
}
connect()()
*/
