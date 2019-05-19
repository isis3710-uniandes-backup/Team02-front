import React, { Component } from 'react';
import './CreatePage.css';


class CreatePage extends Component {
    constructor(props) {
        super();
        var accessToken = props.match.params.accessToken;
        this.state = {
            "name": "",
            "description": "",
            "accessToken": accessToken
        }
        this.getDescription = this.getDescription.bind(this);
        this.getName = this.getName.bind(this);
        this.postPlaylist = this.postPlaylist.bind(this);
    }
    render() {
        return (
            <div className="container" id="create">
                <div className="header">
                    Create Playlist
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-sm-11">
                            <label>Name</label>
                        </div>
                        <div className="col-sm-1" onClick={this.getDescription}>
                            <span className="badge badge-pill badge-primary ml-auto" id="nameCount">0 / 100</span>
                        </div>
                    </div>
                    <input className="form-control" id="name" rows="6" onChange={this.getName}></input>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-11">
                            <label>Description (Optional)</label>
                        </div>
                        <div className="col-sm-1" onClick={this.getDescription}>
                            <span className="badge badge-pill badge-primary ml-auto" id="descrCount">0 / 300</span>
                        </div>
                    </div>
                    <textarea className="form-control" id="description" rows="3" onChange={this.getDescription}></textarea>
                    <div className = "row">
                        <div className = "col-sm-9"></div>
                        <div className = "col-sm-3">
                            <span className="badge badge-pill badge-primary button" onClick = {this.postPlaylist}>Create</span>
                        </div>
                    </div>
                </div>
            </div>);
    }
    getDescription() {
        var description = document.getElementById("description").value;
        this.setState({ "description": description });
        document.getElementById("descrCount").innerHTML = description.length + " / 300";
    }
    getName() {
        var name = document.getElementById("name").value;
        this.setState({ "name": name });
        document.getElementById("nameCount").innerHTML = name.length + " / 100";
    }
    postPlaylist() {
        var data = {
            "name": this.state.name,
            "description": this.state.description,
            "collaborative" : false,
            "public" : true
        }
        fetch(`http://localhost:3001/menu/${this.state.accessToken}/create`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }}).then(res => res.text())
            .catch(error => console.error('Error:', error))
            .then((response) => {
                console.log(response);
                if(response === "Missing Field"){

                }
                else{
                    window.location.href = `/menu/${this.state.accessToken}/playlist/${response}/tracks`;
                }
            });
    }
}

export default CreatePage;
