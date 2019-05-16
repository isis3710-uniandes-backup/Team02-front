import React, { Component } from 'react';
import './mainPage.css';
import { Route } from "react-router-dom";
import PlaylistList from './playlistPage/PlaylistList';
import { FormattedMessage } from 'react-intl';
import SongList from './songPage/songList';


var mount = false;
class MainPage extends Component {
  constructor(props) {
    super();
    this.state = {
      "accessToken" : props.match.params.accessToken
    }

  }
  changeSelected(clicked) {
    console.log(clicked);
  }
  render() {
    return (
      <div id="main">
        <div className="d-flex" id="wrapper">
          <div id="sidebar-wrapper">
            <div className="list-group list-group-flush">
              <a className="styledLink" href={`/menu/${this.state.accessToken}`} onClick={() => { this.changeSelected("home") }}><div className="sidebar-heading selected" id="home"><i className="fas fa-home"></i> <FormattedMessage id="Home" />  </div></a>
              <div className="sidebar-heading"><i className="fas fa-smile-wink"></i> <FormattedMessage id="Made For You" /> </div>
              <div className="sidebar-heading"><i className="fas fa-plus-circle"></i> <FormattedMessage id="Create Playlist" /> </div>
              <div className="sidebar-heading"><i className="fas fa-play-circle"></i> <FormattedMessage id="I'm Feeling Lucky" /></div>
              <div className="sidebar-heading"><i className="fas fa-user-circle"></i> <FormattedMessage id="Account" /> </div>
            </div>
          </div>
          <div className="background">
            <Route exact path="/menu/:accessToken" component={PlaylistList} />
            <Route exact path="/menu/:accessToken/playlist/:idPlaylist/tracks" component={SongList} />
          </div>
        </div>
      </div >
    );
  }

}
export default MainPage;