import React, { Component } from 'react';
import './song.css';

export default class Song extends Component {
  state = {
    "name": this.props.song.track.name,
    "artist": this.props.song.track.artists[0].name,
    "album": this.props.song.track.album.name,
    "uri": this.props.song.track.uri,
    "accessToken" : this.props.accessToken
  }
  render() {
    console.log(this.props);
    return (
      <div className="row table-item ">
        <div className="col-sm-1 function clickable" onClick={() => this.playSong(this.state.uri)}><center><i className="fas fa-play-circle"></i></center></div>
        <div className="col-sm-5">{this.state.name}</div>
        <div className="col-sm-2">{this.state.artist}</div>
        <div className="col-sm-3">{this.state.album}</div>
        <div className="col-sm-1 function clickable"><center><i className="fas fa-ellipsis-h"></i></center></div>
      </div>)
  }
  playSong(uri) {
    fetch(`http://localhost:3001/play/${this.state.accessToken}/tracks/${this.props.song.track.id}`)
    .then((response) => {
      response.text().then((text) => {
        console.log(text);
      });
    });
  };
}
