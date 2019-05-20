import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TopSongsDetail from './TopSongsDetail';
import PlayListDetail from '../playlistPage/PlayListDetail';
import '../songPage/song.css';
import Song from '../songPage/song';

class Account extends Component {
    constructor(props) {
        super();
        var accessToken = props.match.params.accessToken;
        this.state = {
            "songs": [],
            "accessToken": accessToken
        }

        fetch('https://api.spotify.com/v1/me/top/tracks?limit=10',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
                },
            })
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
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
                <div className="header">
                    <FormattedMessage id="Recently played" />
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
                {this.state.songs.map((e, i) => <TopSongsDetail key={i} track={e} accessToken={accessToken} />)}
            </div>
        );
    }
}
export default Account;