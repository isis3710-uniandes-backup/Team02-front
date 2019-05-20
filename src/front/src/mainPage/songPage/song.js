import React, { Component } from 'react';
import './song.css';

export default class Song extends Component {
  state = {
    "name": this.props.song.track.name,
    "artist": this.props.song.track.artists[0].name,
    "album": this.props.song.track.album.name,
    "uri": this.props.song.track.uri,
    "accessToken" : this.props.accessToken,
    "idlista": this.props.song.added_at.idLista
  }
  render() {
    var name = this.state.name;
    console.log(name);
    if(name.length > 35){
      name = name.substring(0,35)+ "...";
    }
    var album = this.state.album;
    if(album.length > 25){
      album = album.substring(0,25) + "...";
    }
    var artist = this.state.artist;
    if(artist.length > 15){
      artist = artist.substring(0,15) + "...";
    }
    return (
      <div className="row table-item " id={"Fila"+this.state.name}>
        <div className="col-sm-1 function clickable" onClick={() => this.playSong(this.state.uri)}><center><i className="fas fa-play-circle"></i></center></div>
        <div className="col-sm-4">{name}</div>
        <div className="col-sm-2">{artist}</div>
        <div className="col-sm-3">{album}</div>
        <div className="col-sm-1"><span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
            <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
                  aria-hidden="true"></i></a></span></div>

        <div className="col-sm-1 function clickable" onClick={() => this.delete(this.state.name)}>
          <span class="table-remove">
            <button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
              Remove
            </button>
          </span>
        </div>
      </div>


      )
  }

  playSong(uri) {
    fetch(`http://localhost:3001/play/${this.state.accessToken}/tracks/${this.props.song.track.id}`)
    .then((response) => {
      response.text().then((text) => {
      });
    });
  };

  delete(id) {    
    var cosa = document.getElementById("Fila"+id);
    if(cosa.parentNode)
    {
      var url = "https://api.spotify.com/v1/playlists/"+this.props.song.added_at.idLista+"/tracks";
      fetch(url,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.state.accessToken,
        },
        body: JSON.stringify({
          "tracks": [
            { 
              "uri": this.state.uri, 
              "positions": [this.props.song.added_at.pos] 
            }
          ]
          })
        })
      .then((res) => {
        if(res.status == 403) {
        alert("No puede elimnar canciones de listas que no le pertenencen");
      }
      else
      {
        cosa.parentNode.removeChild(cosa);
      }
      }
    ).then( (res) => {});
    }
    
  }
}
