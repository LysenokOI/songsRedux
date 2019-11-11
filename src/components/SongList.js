import React, { Component } from "react";
//create Connect function
import { connect } from "react-redux";

class Songlist extends Component {
  render() {
    return <div>SongList</div>;
  }
}

// convention function - caal all the state inside redux store
let mapStateToProps = state => {
  console.log(state);

  return state;
};

//tell Provider about changes to the SongList
export default connect(mapStateToProps)(Songlist);

/*example syntaxes of the connect
function connect(){
  return function(){
    return 'Connected';
  }
}
connect()()
*/
