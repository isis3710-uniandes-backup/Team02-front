import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TopSongsDetail from './TopSongsDetail';
import PlayListDetail from '../playlistPage/PlayListDetail';
import '../songPage/song.css';

class Account extends Component {
    constructor(props) {
        super();
        var accessToken = props.accessToken;
        this.state = {
            "songs": [],
            "accessToken": accessToken
        }

        fetch('https://api.spotify.com/v1/me/top/tracks?limit=5',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
                },
            })
            .then((response) => {
                response.json().then((data) => {
                    this.setState({ "songs": data.items });
                });

            }).catch((error) => {
                console.error(error);
            });;
    }

    render() {
        var accessToken = this.state.accessToken;
        return (
            <div className="container" id="account">
                <div className="section-header">
                    Top 5 Songs
                </div>
                {this.state.songs.map((e, i) => <TopSongsDetail key={i} track={e} index = {this.state.songs.indexOf(e)}accessToken={accessToken} />)}
            </div>
        );
    }
}
export default Account;