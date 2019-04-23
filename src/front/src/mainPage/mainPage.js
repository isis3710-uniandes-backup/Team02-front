import React, { Component } from 'react';
import './mainPage.css';
import MenuPage from './menuPage/menuPage';
import { Route } from "react-router-dom";
import PlaylistList from './playlistPage/PlaylistList';
import { FormattedMessage } from 'react-intl';
import SongList from './songPage/songList';


var mount = false;
class MainPage extends Component {
  state = {
    "accessToken" : ""
  }
  componentDidMount() {
    mount = true;
    fetch('http://localhost:3001/menu')
      .then((response) => {
        response.text().then((text) => {
          this.setState({"accessToken" : text});
          console.log(this.state);
          this.startWebPlayer(text);
        });
      });
  }
  changeSelected(clicked) {
    // if (mount) {
    //   document.getElementById("home").classList.remove("selected");
    //   document.getElementById("Your Library").classList.remove("selected");

    //   document.getElementById(clicked).classList.add("selected");
    // }
  }
  render() {
    return (
      
      <div id="main">
        <div className="d-flex" id="wrapper">
          <div id="sidebar-wrapper">
            <div className="list-group list-group-flush">
              <a className="styledLink" href={"/menu"} onClick={this.changeSelected("home")}><div className="sidebar-heading selected" id="home"><i className="fas fa-home"></i> <FormattedMessage id="Home" />  </div></a>
              <a className="styledLink" href={"/menu/"+this.state.accessToken+"/playlists/"} onClick={this.changeSelected("Your Library")}><div className="sidebar-heading" id = "Your Library"><i className="fas fa-book-open"></i> <FormattedMessage id="Your Library" /></div></a>
              <div className="sidebar-heading"><i className="fas fa-smile-wink"></i> <FormattedMessage id="Made For You" /> </div>
              <div className="sidebar-heading"><i className="fas fa-plus-circle"></i> <FormattedMessage id="Create Playlist" /> </div>
              <div className="sidebar-heading"><i className="fas fa-play-circle"></i> <FormattedMessage id="I'm Feeling Lucky" /></div>
              <div className="sidebar-heading"><i className="fas fa-user-circle"></i> <FormattedMessage id="Account" /> </div>
            </div>
          </div>
          <div className="background">
            <Route exact path="/menu/" component={MenuPage} />
            <Route exact path="/menu/:accessToken/playlists/" component={PlaylistList} />
            <Route exact path="/menu/:accessToken/playlists/:idPlaylist/tracks" component={SongList} />
          </div>
        </div>
      </div >
    );
  }
  startWebPlayer(text){
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    const startScript = document.createElement("script");
    startScript.setAttribute("id", "PlayerScript");
    const startScriptContent = document.createTextNode(`window.onSpotifyWebPlaybackSDKReady = () => {
      const token = '${text}';
      const player = new Spotify.Player({
        name: 'Playlist Maker',
        getOAuthToken: cb => { cb(token); }
      });
    
      // Error handling
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      player.addListener('account_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });
    
      // Playback status updates
      player.addListener('player_state_changed', state => { console.log(state); });
    
      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });
    
      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
    
      // Connect to the player!
      player.connect();
    }`)
    startScript.appendChild(startScriptContent);
    document.body.appendChild(startScript);
  }
}
export default MainPage;