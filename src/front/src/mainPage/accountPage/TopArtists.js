import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TopArtistsDetail from './TopArtistsDetail';
import '../songPage/song.css';

class TopArtists extends Component {
    constructor(props) {
        super();
        var accessToken = props.match.params.accessToken;
        this.state = {
            "artists": [],
            "accessToken": accessToken
        }

        fetch('https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=5',
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
                    this.setState({ "artists": data.items });
                });

            }).catch((error) => {
                console.error(error);
            });;
    }

    render() {
        var accessToken = this.state.accessToken;
        return (
            <div className="container" id="TopArtists">
                <div className="header">
                    <FormattedMessage id="Top artists" />
                </div>


                <div className="content">
                    
                    <div className="row table-header">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-4"><FormattedMessage id="Name" /></div>
                        <div className="col-sm-2"><FormattedMessage id="Popularity" /></div>
                        <div className="col-sm-4"><FormattedMessage id="Uri" /></div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>
                {this.state.artists.map((e, i) => <TopArtistsDetail key={i} track={e} accessToken={accessToken} />)}
            </div>
        );
    }
}
export default TopArtists;