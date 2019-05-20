import React, { Component } from 'react';
import '../songPage/song.css';

export default class TopArtistsDetail extends Component {
  state = {
    "name": this.props.artist.name,
    "popularity": this.props.artist.popularity,
    "uri": this.props.artist.uri,
    "accessToken" : this.props.accessToken
  }
  render() {
    return (
      <div className="row table-item ">
        <div className="col-sm-4">{this.state.name}</div>
        <div className="col-sm-2">{this.state.popularity}</div>
        <div className="col-sm-4">{this.state.uri}</div>
        <div className="col-sm-1 function clickable"><center><i className="fas fa-ellipsis-h"></i></center></div>
      </div>)
  }
}
