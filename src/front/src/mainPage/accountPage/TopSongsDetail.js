import React, { Component } from 'react';
import '../songPage/song.css';

export default class TopSongsDetail extends Component {
  state = {
    "name": this.props.track.name,
    "artist": this.props.track.artists[0].name,
    "album": this.props.track.album.name,
    "uri": this.props.track.uri,
    "accessToken" : this.props.accessToken
  }
  render() {
    return (
      <div className="row table-item ">
        <div className="col-sm-5">{this.state.name}</div>
        <div className="col-sm-2">{this.state.artist}</div>
        <div className="col-sm-3">{this.state.album}</div>
        <div className="col-sm-1 function clickable"><center><i className="fas fa-ellipsis-h"></i></center></div>
      </div>)
  }
}
