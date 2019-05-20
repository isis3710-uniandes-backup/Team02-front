import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TopSongsDetail from './TopSongsDetail';
import PlayListDetail from '../playlistPage/PlayListDetail';
import '../songPage/song.css';
import Song from '../songPage/song';

class UserProfile extends Component {
    constructor(props) {
        super();
        var accessToken = props.match.params.accessToken;
        this.state = {
            "name": "",
            "birthdate": "",
            "email": "",
            "followers": "",
            "id": "",
            "type": "",
            "uri": "",
            "accessToken": accessToken
        }

        fetch('https://api.spotify.com/v1/me',
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
                    this.setState({ "name": data.display_name });
                    this.setState({ "birthdate": data.birthdate });
                    this.setState({ "email": data.email });
                    this.setState({ "followers": data.followers });
                    this.setState({ "id": data.id });
                    this.setState({ "type": data.type });
                    this.setState({ "uri": data.uri });
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
                    <FormattedMessage id="User profile" />
                </div>


                <div className="content">
               
                        <div className="col-sm-1"></div>
                        <div className="col-sm-9"><FormattedMessage id="Name" /> : {this.state.name}</div>
                        <div className="col-sm-9"><FormattedMessage id="birthdate" /> : {this.state.birthdate}</div>
                        <div className="col-sm-9"><FormattedMessage id="email" /> : {this.state.email}</div>
                        <div className="col-sm-9"><FormattedMessage id="followers" /> : {this.state.followers.total}</div>
                        <div className="col-sm-9"><FormattedMessage id="id" /> : {this.state.id}</div>
                        <div className="col-sm-9"><FormattedMessage id="type" /> : {this.state.type}</div>
                        <div className="col-sm-9"><FormattedMessage id="uri" /> : {this.state.uri}</div>
                        <div className="col-sm-1"></div>
                   
                </div>
                
            </div>
        );
    }
}
export default UserProfile;