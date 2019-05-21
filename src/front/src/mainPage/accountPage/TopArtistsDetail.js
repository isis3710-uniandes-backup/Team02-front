import React, { Component } from 'react';
import '../songPage/song.css';
import { FormattedMessage } from 'react-intl';

export default class TopArtistsDetail extends Component {
  state = {
    "name": this.props.artist.name,
    "popularity": this.props.artist.popularity,
    "image": this.props.artist.images[0].url,
    "accessToken": this.props.accessToken,
    "index":this.props.index
    }
  render() {

    return (
      <div className="row songInfo">
      <div className = "colo-sm-1 index">{this.state.index + 1}</div>
        <div className="col-sm-2">
          <img className="img-detail rounded-circle" src={this.state.image} />
        </div>
        <div className="col-sm-9">
          {this.state.name}
          <div className="songArtist"> <FormattedMessage id="Popularity:" />  {this.state.popularity}</div>
        </div>
      </div>)
  }
}
