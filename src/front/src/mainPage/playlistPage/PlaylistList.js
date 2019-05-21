import React, { Component } from 'react';
import PlayListDetail from './PlayListDetail';
import './PlayList.css';
import { FormattedMessage } from 'react-intl';

class PlaylistList extends Component {
    constructor(props)
    {
        super();
        var accessToken = props.match.params.accessToken;
        this.state = {
            "playlists":[],
            "accessToken" : accessToken
        }
        fetch('http://34.220.86.8:3001/menu/'+accessToken +'/playlists')
        .then((response) => {
            response.json().then((data) => {
                this.setState({ "playlists": data.items });
            });
        });
    }

    render() {
        return (
            <div className="container" id = "playlist">
                <div className="header">
                    <FormattedMessage id="My PlayLists" />
                </div>
                <div className="content" id="song">
                <div className="row">
                    {this.state.playlists.map((e, i) => <PlayListDetail key={i} playlist={e} accessToken = {this.state.accessToken} />)}
                </div>
                </div>
            </div>
        );
    }
}
export default PlaylistList;