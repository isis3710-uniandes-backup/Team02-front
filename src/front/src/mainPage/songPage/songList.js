import React, { Component } from 'react';
import './song.css';
import Song from './song';
import { FormattedMessage } from 'react-intl';


export default class SongList extends Component {
    state = {
        "name": "",
        "songs": []
    }
    componentDidMount() {
        console.log(this.props);
        fetch(`http://localhost:3001/menu/playlists/${this.props.match.params.idPlaylist}/tracks`)
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
                    this.setState({ "name": data.name });
                    this.setState({ "songs": data.tracks.items });
                });
            });
    }
    render() {
        return (
            <div className="container" id="song">
                <div className="header">
                    {this.state.name}
                </div>
                <div className="content">
                    <div className="row table-header">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5"><FormattedMessage id="Name" /></div>
                        <div className="col-sm-2"><FormattedMessage id="Artist" /></div>
                        <div className="col-sm-3"><FormattedMessage id="Album" /></div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>
                {this.state.songs.map((e, i) => <Song key={i} song={e} accessToken={this.props.match.params.accessToken}/>)}
            </div>)
    }
}