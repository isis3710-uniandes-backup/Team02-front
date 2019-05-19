import React, { Component } from 'react';
import './mainPage.css';
import { Route } from "react-router-dom";
import PlaylistList from './playlistPage/PlaylistList';
import Account from './accountPage/Account';
import { FormattedMessage } from 'react-intl';
import SongList from './songPage/songList';
import CreatePage from './createPage/CreatePage';


class MainPage extends Component {
  constructor(props) {
    super();
    this.state = {
      "accessToken": props.match.params.accessToken
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
              <a className="styledLink" href={`/menu/${this.state.accessToken}/create`} onClick={() => { this.changeSelected("create") }}><div className="sidebar-heading" id="create"><i className="fas fa-plus-circle"></i> <FormattedMessage id="Create Playlist" />  </div></a>
              <div className="sidebar-heading"><i className="fas fa-play-circle"></i> <FormattedMessage id="I'm Feeling Lucky" /></div>
              <a className="styledLink" href={`/menu/${this.state.accessToken}/account`} onClick={() => { this.changeSelected("account") }}><div className="sidebar-heading" id="account"><i className="fas fa-user-circle"></i> <FormattedMessage id="Account" />  </div></a>
              <div className= "empty"></div>
              <div className= "empty"></div>
              <div className= "empty"></div>
              <div className= "empty"></div>
              <div className= "empty"></div>
              <div className= "empty"></div>
              <div className= "empty"></div>
              <div className = "test"><p>Ad</p></div>
            </div>
         
          </div>
          <div className="background">
            <Route exact path="/menu/:accessToken" component={PlaylistList} />
            <Route exact path="/menu/:accessToken/playlist/:idPlaylist/tracks" component={SongList} />
            <Route exact path="/menu/:accessToken/create" component={CreatePage} />
            <Route exact path="/menu/:accessToken/account" component={Account} />
          </div>
        </div>
      </div >
    );
  }

}
export default MainPage;