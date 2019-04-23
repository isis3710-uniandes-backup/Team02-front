import React, { Component } from 'react';
import './song.css';

export default class Song extends Component {
    state = {
        "name": this.props.song.track.name,
        "artist": this.props.song.track.artists[0].name,
        "album": this.props.song.track.album.name,
        "uri": this.props.song.track.uri
    }
    render() {
        return (
            <div className="row table-item ">
                <div className="col-sm-1 function clickable" onClick = {this.playSong(this.state.uri)}><center><i className="fas fa-play-circle"></i></center></div>
                <div className="col-sm-5">{this.state.name}</div>
                <div className="col-sm-2">{this.state.artist}</div>
                <div className="col-sm-3">{this.state.album}</div>
                <div className="col-sm-1 function clickable"><center><i className="fas fa-ellipsis-h"></i></center></div>
            </div>)
    }
    playSong(uri) {
        const script = document.getElementById("PlayerScript");
        const startScriptContent = document.createTextNode(`window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new Spotify.Player({
                name: 'Web Playback SDK Quick Start Player',
                getOAuthToken: cb => { cb(token); }
              });
              const ide = null;
              player.addListener('ready', ({ device_id }) => {
                ide = device_id;
                console.log('Ready with Device ID', device_id);
              });
            const play = ({
                spotify_uri,
                playerInstance: {
                  _options: {
                    getOAuthToken,
                    id
                  }
                }
              }) => {
                getOAuthToken(access_token => {
                    console.log('https://api.spotify.com/v1/me/player/play?device_id='+ide);
                  fetch('https://api.spotify.com/v1/me/player/play?device_id='+id, {
                    method: 'PUT',
                    body: JSON.stringify({ uris: [spotify_uri] }),
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': Bearer ${this.props.accessToken}
                    },
                  });
                });
              };

              play({
                playerInstance: player),
                spotify_uri: '${uri}',
              });
          }`);
          script.appendChild(startScriptContent);
    }
}