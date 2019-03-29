import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayListDetail from './PlayListDetail';

class PlaylistList extends Component {
    state = {
        "playlists": []
    }
    componentDidMount() {
        fetch('/usuario/2/playlists')
            .then((response) => {
                response.json().then((data) => {
                    this.setState({ "playlists": data });
                });
            });
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    My PlayLists
                </div>
                <div className="content" id="song">
                    <div className="row table-header">
                        <div className = "col-sm-1"></div>
                        <div className = "col-sm-4">Name</div>
                        <div className = "col-sm-3"><center>Duration</center></div>
                        <div className = "col-sm-2"><center>Owner</center></div>
                        <div className = "col-sm-2"></div>
                    </div>
                    {this.state.playlists.map((e, i) => <PlayListDetail key={i} playlist={e} />)}
                </div>
            </div>
        );
    }
    renderPlayLists() {
        ReactDOM.render(<PlaylistList />, document.getElementById("detailComponent").innerHTML = "Guau");
    }
}
export default PlaylistList;