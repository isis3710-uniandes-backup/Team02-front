import React, { Component } from 'react';
import './song.css';
import Song from './song';
import { FormattedMessage } from 'react-intl';


export default class SongList extends Component {
    constructor(props) {
        super();
        var accessToken = props.match.params.accessToken;
        this.state = {
            "name": "",
            "songs": [],
            "acessToken" : accessToken,
            "idlista" : ""
        }
        fetch(`http://34.220.86.8:3001/menu/${props.match.params.accessToken}/playlists/${props.match.params.idPlaylist}/tracks`)
            .then((response) => {
                response.json().then((data) => {
                    this.setState({ "name": data.name });
                    this.setState({ "songs": data.tracks.items });
                    this.setState({ "idlista": props.match.params.idPlaylist });
                    this.startWebPlayer(props.match.params.accessToken);
                });
            });
    }
    render() {
        var accessToken = this.state.acessToken;
        var idLista = this.state.idlista
        var d = function(e,i) {
          e.added_at = {idLista,"pos":i};
          return e;
        };
        return (


            <div className="container" id="song">
                <div className="header">
                    {this.state.name}

                </div>
                <div className="content">
                    <div className="row table-header">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-4"><FormattedMessage id="Name" /></div>
                        <div className="col-sm-2"><FormattedMessage id="Artist" /></div>
                        <div className="col-sm-3"><FormattedMessage id="Album" /></div>
                        <div className="col-sm-1"><FormattedMessage id="Sort" /> </div>
                        <div className="col-sm-1"> <FormattedMessage id="Remove" /> </div>
                    </div>
                </div>
                {this.state.songs.map((e, i) => <Song key={i} song={d(e,i)} accessToken={accessToken}/>)}

            </div>


            )
    }
    startWebPlayer(text) {
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