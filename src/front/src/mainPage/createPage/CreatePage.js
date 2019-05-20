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
                        <div className="col-sm-1">
                            <span className="badge badge-pill badge-primary ml-auto" id="nameCount">0 / 100</span>
                        </div>
                    </div>
                    <input className="form-control" id="name" rows="6" onChange={this.getName} required></input>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-11">
                            <label>Description (Optional)</label>
                        </div>
                        <div className="col-sm-1">
                            <span className="badge badge-pill badge-primary ml-auto" id="descrCount">0 / 300</span>
                        </div>
                    </div>
                    <textarea className="form-control" id="description" rows="3" onChange={this.getDescription}></textarea>

                    <br></br>
                    <div className="row">
                        <div className="col-sm-6">
                            <label>Popularity</label>
                            <select className="custom-select" required>
                                <option value="1">Mainstream</option>
                                <option value="0.75">Popular</option>
                                <option value="0.50">Medium</option>
                                <option value="0.25">Underground</option>
                                <option value="0">Unknown</option>
                            </select>
                        </div>
                        <div className="col-sm-6">
                            <label>Energy</label>
                            <select className="custom-select" required>
                                <option value="1">Happy</option>
                                <option value="0.75">Good Mood</option>
                                <option value="0.50">Neutral</option>
                                <option value="0.25">Bad Mood</option>
                                <option value="0">Sad</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-11">Genres</div>
                        <div className="col-sm-1">
                            <span className="badge badge-pill badge-primary ml-auto" id="descrCount">0 / 5</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "acoustic" value = "acoustic"/> Acoustic
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "afrobeat" value = "afrobeat"/> Afrobeat
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "alternative" value = "alternative"/> Alternative
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "ambient" value = "ambient"/> Ambient
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "blues" value = "blues"/> Blues
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "breakbeat" value = "breakbeat"/> Breakbeat
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "british" value = "british"/> British
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "chill" value = "chill"/> Chill
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "classical" value = "classical"/> Classical
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "country" value = "country"/> Country
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "dance" value = "dance"/> Dance
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "dancehall" value = "dancehall"/> Dancehall
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "deep-house" value = "deep-house"/> Deep House
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "disco" value = "disco"/> Disco
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "drum-and-bass" value = "drum-and-bass"/> Drum n Bass
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "dubstep" value = "dubstep"/> Dubstep
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "edm" value = "edm"/> EDM
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "electro" value = "electro"/> Electro
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "electronic" value = "electronic"/> Electronic
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "folk" value = "folk"/> Folk
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "funk" value = "funk"/> Funk
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "gospel" value = "gospel"/> Gospel
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "grunge" value = "grunge"/> Grunge
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "hard-rock" value = "hard-rock"/> Hard Rock
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "hardcore" value = "hardcore"/> Hardcore
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "heavy-metal" value = "heavy-metal"/> Heavy Metal
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "hip-hop" value = "hip-hop"/> Hip Hop
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "house" value = "house"/> House
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "indie" value = "indie"/> Indie
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "j-pop" value = "j-pop"/> J-Pop
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "jazz" value = "jazz"/> Jazz
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "k-pop" value = "k-pop"/> K-Pop
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "latin" value = "latin"/> Latin
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "metal" value = "metal"/> Metal
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "new-age" value = "new-age"/> New Age
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "opera" value = "opera"/> Opera
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "party" value = "party"/> Party
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "pop" value = "pop"/> Pop
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "psych-rock" value = "psych-rock"/> Psych Rock
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "punk" value = "punk"/> Punk
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "punk-rock" value = "punk-rock"/> Punk Rock
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "r-n-b" value = "r-n-b"/> RnB
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "reggae" value = "reggae"/> Reagge
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "reggaeton" value = "reggaeton"/> Reggaeton
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "rock" value = "rock"/> Rock
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "rock-n-roll" value = "rock-n-roll"/> Rock n Roll
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "rockabilly" value = "rockabilly"/> Rockabilly
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "ska" value = "ska"/> Ska
                        </div>
                    </div>
                    <div className="row">
                    <div className = "col-sm-2"></div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "soul" value = "soul"/> Soul
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "techno" value = "techno"/> Techno
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "trance" value = "trance"/> Trance
                        </div>
                        <div className="col-sm-2">
                            <input type = "checkbox" id = "trip-hop" value = "trip-hop"/> Trip Hop
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9"></div>
                        <div className="col-sm-3">
                            <span className="badge badge-pill badge-primary button" onClick={this.postPlaylist}>Create</span>
                        </div>
                    </div>
                </div>
            </div>);
    }
    getDescription() {
        var description = document.getElementById("description").value;
        if (description.length > 300) {
            description = description.substring(0, 300);
            document.getElementById("description").value = description;
        }
        this.setState({ "description": description });
        document.getElementById("descrCount").innerHTML = description.length + " / 300";
    }
    getName() {
        var name = document.getElementById("name").value;
        if (name.length > 100) {
            name = name.substring(0, 100);
            document.getElementById("name").value = name;
        }
        this.setState({ "name": name });
        document.getElementById("nameCount").innerHTML = name.length + " / 100";

    }
    postPlaylist() {
        var data = {
            "name": this.state.name,
            "description": this.state.description,
            "collaborative": false,
            "public": true
        }
        fetch(`http://localhost:3001/menu/${this.state.accessToken}/create`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.text())
            .catch(error => console.error('Error:', error))
            .then((response) => {
                console.log(response);
                if (response === "Missing Field") {

                }
                else {
                    window.location.href = `/menu/${this.state.accessToken}/playlist/${response}/tracks`;
                }
            });
    }
}

export default CreatePage;
