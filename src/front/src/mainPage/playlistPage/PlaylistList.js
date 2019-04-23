import React, { Component } from 'react';
import PlayListDetail from './PlayListDetail';
import './PlayList.css';
import { FormattedMessage } from 'react-intl';

class PlaylistList extends Component {
    state = {
        "playlists": []
    }
    componentDidMount() {
        fetch('http://localhost:3001/menu/playlists')
        .then((response) => {
            response.json().then((data) => {
                console.log(data.items);
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
                    {this.state.playlists.map((e, i) => <PlayListDetail key={i} playlist={e} />)}
                </div>
                </div>
            </div>
        );
    }
}
export default PlaylistList;