import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './UserProfile.css';
import Account from './TopSongs';
import TopArtists from './TopArtists';
import * as d3 from "d3";
import BarComponent from './BarComponent';

class UserProfile extends Component {
    constructor(props) {
        super();
        var accessToken = props.match.params.accessToken;
        this.state = {
            "name": "",
            "email": "",
            "followers": "",
            "id": "",
            "accessToken": accessToken,
            "coutry": "",
            "image": "",
            "songs": [],
            "artists": []
        }
        fetch('http://34.220.86.8:3001/menu/' + accessToken + '/userProfile')
            .then((response) => {
                response.json().then((data) => {
                    this.setState({ "name": data.display_name });
                    this.setState({ "email": data.email });
                    this.setState({ "followers": data.followers });
                    this.setState({ "username": data.id });
                    this.setState({ "type": data.product });
                    this.setState({ "coutry": data.country });
                    this.setState({ "image": data.images[0].url });
                });
            }).catch((error) => {
                console.error(error);
            });;
        fetch('https://api.spotify.com/v1/me/top/tracks?limit=50',
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
            });

    }

    render() {
        var accesstoken = this.state.accessToken;
        return (
            <div className="container" id="account">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <img className="img-center img-header center-block rounded-circle" src={this.state.image} />
                        <div className="name">
                            {this.state.name}
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">
                            <TopArtists accessToken={accesstoken} />
                        </div>
                        <div className="col-sm-5">
                            <Account accessToken={accesstoken} />
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>
                <div className="section-header">
                    <FormattedMessage id="The music you listen" /> 
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <BarComponent accessToken={accesstoken} />
                    <div className="col-sm-1"></div>
                </div>
            </div>
        );
    }
}
export default UserProfile;