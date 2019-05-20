import React, { Component } from 'react';
import './CreatePage.css';


class CreatePage extends Component {
    constructor(props) {
        super();
        var accessToken = props.match.params.accessToken;
        this.state = {
            "name": "",
            "description": "",
            "selectedGenres": [],
            "accessToken": accessToken
        }
        this.genres =
            ["acoustic",
                "afrobeat",
                "alternative",
                "ambient",
                "blues",
                "breakbeat",
                "british",
                "chill",
                "classical",
                "country",
                "dance",
                "dancehall",
                "deep-house",
                "disco",
                "drum-and-bass",
                "dubstep",
                "edm",
                "electro",
                "electronic",
                "folk",
                "funk",
                "gospel",
                "grunge",
                "hard-rock",
                "hardcore",
                "heavy-metal",
                "hip-hop",
                "house",
                "indie",
                "j-pop",
                "jazz",
                "k-pop",
                "latin",
                "metal",
                "new-age",
                "opera",
                "party",
                "pop",
                "psych-rock",
                "punk",
                "punk-rock",
                "r-n-b",
                "reggae",
                "reggaeton",
                "rock",
                "rock-n-roll",
                "rockabilly",
                "ska",
                "soul",
                "techno",
                "trance",
                "trip-hop"];
        this.getDescription = this.getDescription.bind(this);
        this.getName = this.getName.bind(this);
        this.postPlaylist = this.postPlaylist.bind(this);
        this.checkCheckboxes = this.checkCheckboxes.bind(this);
    }
    render() {
        return (
            <div className="container" id="create">
                <div className="header">
                    Create Playlist
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-sm-11 section-title">
                            Name
                        </div>
                        <div className="col-sm-1">
                            <span className="badge badge-pill badge-primary ml-auto" id="nameCount">0 / 100</span>
                        </div>
                    </div>
                    <input className="form-control" id="name" rows="6" onChange={this.getName} required></input>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-11 section-title">
                            Description (Optional)
                        </div>
                        <div className="col-sm-1">
                            <span className="badge badge-pill badge-primary ml-auto" id="descrCount">0 / 300</span>
                        </div>
                    </div>
                    <textarea className="form-control" id="description" rows="3" onChange={this.getDescription}></textarea>

                    <br></br>
                    <div className="row">
                        <div className="col-sm-6 section-title">
                            Popularity
                            <select className="custom-select" id="popularity">
                                <option value={100}>Mainstream</option>
                                <option value={75}>Popular</option>
                                <option value={50}>Medium</option>
                                <option value={25}>Underground</option>
                                <option value={0}>Unknown</option>
                            </select>
                        </div>
                        <div className="col-sm-6 section-title">
                            Mood
                            <select className="custom-select" id="energy">
                                <option value={1}>Happy</option>
                                <option value={0.75}>Good Mood</option>
                                <option value={0.50}>Neutral</option>
                                <option value={0.25}>Bad Mood</option>
                                <option value={0}>Sad</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-11 section-title">Genres (min. 3)</div>
                        <div className="col-sm-1">
                            <span className="badge badge-pill badge-primary ml-auto" id="genCount">0 / 52</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type="checkbox" id="acoustic" value="acoustic" onChange={this.checkCheckboxes} /> Acoustic
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="afrobeat" value="afrobeat" onChange={this.checkCheckboxes} /> Afrobeat
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="alternative" value="alternative" onChange={this.checkCheckboxes} /> Alternative
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="ambient" value="ambient" onChange={this.checkCheckboxes} /> Ambient
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="blues" value="blues" onChange={this.checkCheckboxes} /> Blues
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="breakbeat" value="breakbeat" onChange={this.checkCheckboxes} /> Breakbeat
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type="checkbox" id="british" value="british" onChange={this.checkCheckboxes} /> British
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="chill" value="chill" onChange={this.checkCheckboxes} /> Chill
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="classical" value="classical" onChange={this.checkCheckboxes} /> Classical
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="country" value="country" onChange={this.checkCheckboxes} /> Country
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="dance" value="dance" onChange={this.checkCheckboxes} /> Dance
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="dancehall" value="dancehall" onChange={this.checkCheckboxes} /> Dancehall
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type="checkbox" id="deep-house" value="deep-house" onChange={this.checkCheckboxes} /> Deep House
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="disco" value="disco" onChange={this.checkCheckboxes} /> Disco
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="drum-and-bass" value="drum-and-bass" onChange={this.checkCheckboxes} /> Drum n Bass
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="dubstep" value="dubstep" onChange={this.checkCheckboxes} /> Dubstep
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="edm" value="edm" onChange={this.checkCheckboxes} /> EDM
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="electro" value="electro" onChange={this.checkCheckboxes} /> Electro
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type="checkbox" id="electronic" value="electronic" onChange={this.checkCheckboxes} /> Electronic
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="folk" value="folk" onChange={this.checkCheckboxes} /> Folk
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="funk" value="funk" onChange={this.checkCheckboxes} /> Funk
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="gospel" value="gospel" onChange={this.checkCheckboxes} /> Gospel
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="grunge" value="grunge" onChange={this.checkCheckboxes} /> Grunge
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="hard-rock" value="hard-rock" onChange={this.checkCheckboxes} /> Hard Rock
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type="checkbox" id="hardcore" value="hardcore" onChange={this.checkCheckboxes} /> Hardcore
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="heavy-metal" value="heavy-metal" onChange={this.checkCheckboxes} /> Heavy Metal
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="hip-hop" value="hip-hop" onChange={this.checkCheckboxes} /> Hip Hop
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="house" value="house" onChange={this.checkCheckboxes} /> House
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="indie" value="indie" onChange={this.checkCheckboxes} /> Indie
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="j-pop" value="j-pop" onChange={this.checkCheckboxes} /> J-Pop
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type="checkbox" id="jazz" value="jazz" onChange={this.checkCheckboxes} /> Jazz
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="k-pop" value="k-pop" onChange={this.checkCheckboxes} /> K-Pop
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="latin" value="latin" onChange={this.checkCheckboxes} /> Latin
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="metal" value="metal" onChange={this.checkCheckboxes} /> Metal
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="new-age" value="new-age" onChange={this.checkCheckboxes} /> New Age
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="opera" value="opera" onChange={this.checkCheckboxes} /> Opera
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type="checkbox" id="party" value="party" onChange={this.checkCheckboxes} /> Party
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="pop" value="pop" onChange={this.checkCheckboxes} /> Pop
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="psych-rock" value="psych-rock" onChange={this.checkCheckboxes} /> Psych Rock
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="punk" value="punk" onChange={this.checkCheckboxes} /> Punk
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="punk-rock" value="punk-rock" onChange={this.checkCheckboxes} /> Punk Rock
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="r-n-b" value="r-n-b" onChange={this.checkCheckboxes} /> RnB
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <input type="checkbox" id="reggae" value="reggae" onChange={this.checkCheckboxes} /> Reagge
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="reggaeton" value="reggaeton" onChange={this.checkCheckboxes} /> Reggaeton
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="rock" value="rock" onChange={this.checkCheckboxes} /> Rock
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="rock-n-roll" value="rock-n-roll" onChange={this.checkCheckboxes} /> Rock n Roll
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="rockabilly" value="rockabilly" onChange={this.checkCheckboxes} /> Rockabilly
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="ska" value="ska" onChange={this.checkCheckboxes} /> Ska
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="soul" value="soul" onChange={this.checkCheckboxes} /> Soul
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="techno" value="techno" onChange={this.checkCheckboxes} /> Techno
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="trance" value="trance" onChange={this.checkCheckboxes} /> Trance
                        </div>
                        <div className="col-sm-2">
                            <input type="checkbox" id="trip-hop" value="trip-hop" onChange={this.checkCheckboxes} /> Trip Hop
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
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
    checkCheckboxes() {
        var selected = [];
        for (let genre of this.genres) {
            if (document.getElementById(genre).checked) {
                selected.push(genre);
            }
        }
        this.setState({ "selectedGenres": selected });
        document.getElementById("genCount").innerHTML = selected.length + " / 52";
    }
    postPlaylist() {
        var data = {
            "playList": {
                "name": this.state.name,
                "description": this.state.description,
                "collaborative": false,
                "public": true
            },
            "query": {
                "genres": this.state.selectedGenres,
                "popularity": document.getElementById("popularity").value,
                "energy": document.getElementById("energy").value
            }
        }
        if (data.playList.name.length < 1) {
            //TODO handle error
        }
        else if (data.query.genres < 3) {
            //TODO handle error
        }
        else{
            fetch(`http://localhost:3001/menu/${this.state.accessToken}/create`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.text())
                .catch(error => console.error('Error:', error))
                .then((response) => {
                    setTimeout( () => window.location.href = `/menu/${this.state.accessToken}/playlist/${response}/tracks`, 4000); 
                });
        }
    }
}

export default CreatePage;
