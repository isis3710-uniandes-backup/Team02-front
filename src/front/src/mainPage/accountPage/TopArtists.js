import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TopArtistsDetail from './TopArtistsDetail';
import '../songPage/song.css';

class TopArtists extends Component {
    constructor(props) {
        super();
        var accessToken = props.accessToken;
        this.state = {
            "artists": [],
            "accessToken": accessToken
        }

        fetch('https://api.spotify.com/v1/me/top/artists?limit=5',
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
            });
    }

    render() {
        var accessToken = this.state.accessToken;
        return (
            <div className="container" id="account">
                <div className="section-header">
                    <FormattedMessage id="Top 5 Artists" /> 
                </div>
                {this.state.artists.map((e, i) => <TopArtistsDetail key={i} artist={e} index =  {this.state.artists.indexOf(e)} accessToken={accessToken} />)}
            </div>
            
        );
    }
}
export default TopArtists;