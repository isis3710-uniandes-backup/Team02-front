import React, { Component } from 'react';
import './mainPage.css';


class MainPage extends Component {
  render() {
    return (
      <div id="main">
        <div className="d-flex" id="wrapper">
          <div id="sidebar-wrapper">
            <div className="list-group list-group-flush">
              <div className="sidebar-heading selected"><i className="fas fa-home"></i> Home </div>
              <div className="sidebar-heading"><i className="fas fa-binoculars"></i> Discover </div>
              <div className="sidebar-heading"><i className="fas fa-search"></i> Search </div>
              <div className="sidebar-heading"><i className="fas fa-book-open"></i> Your Library </div>
              <div className="sidebar-heading"><i className="fas fa-music"></i> Your Songs </div>
              <div className="sidebar-heading"><i className="fas fa-smile-wink"></i> Made For You </div>
              <div className="sidebar-heading"><i className="fas fa-plus-circle"></i>>Create Playlist </div>
              <div className="sidebar-heading"><i className="fas fa-play-circle"></i> Currently Playing </div>
              <div className="sidebar-heading"><i className="fas fa-cat"></i> I'm Feeling Lucky</div>
              <div className="sidebar-heading"><i className="fas fa-cogs"></i> Settings</div>
              <div className="sidebar-heading"><i className="fas fa-user-circle"></i> Account</div>
            </div>
          </div>
          <div class="background">
            <div className="container" id="detail">
              <div className="header">
                Home
          </div>
              <div className="content">
                <div className="section-header">
                  Our Selections
            </div>
                <br></br>
                <div className="row">
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                  </div>
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                  </div>
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                  </div>
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                  </div>
                </div>
                <br></br>
                <div className="section-header">
                  Made For You
            </div>
                <br></br>
                <div className="row">
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                  </div>
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                  </div>
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                  </div>
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                  </div>
                </div>
                <br></br>
                <div className="section-header">
                  Your Library
            </div>
                <br></br>
                <div className="row">
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">
                    </div>
                    <h4>
                      Your Songs
                </h4>
                    <p className="section-content">
                      Blah Blah Blah
                </p>
                  </div>
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                    <h4>
                      Your Albums
                </h4>
                    <p className="section-content">
                      Blah Blah Blah
                </p>
                  </div>
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                    <h4>
                      Your Artists
                </h4>
                    <p className="section-content">
                      Blah Blah Blah
                </p>
                  </div>
                  <div className="col-sm-3 clickable">
                    <div className="temp-image">

                    </div>
                    <h4>
                      Your Playlists
                </h4>
                    <p className="section-content">
                      See all the playlists you have created until now, share them or create a new one.
                </p>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;