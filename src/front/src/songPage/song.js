import React, { Component } from 'react';
import './song.css';

export default class Song extends Component {
    state = {
        "nombre": this.props.song.nombre,
        "id": this.props.song.id,
        "duracion": this.props.song.duracion,
        "visitas": this.props.song.visitas
    }
    render() {
        return (
            <div className="row table-item ">
                <div className="col-sm-1 function clickable"><center><i className="fas fa-play-circle"></i></center></div>
                <div className="col-sm-4">{this.state.nombre}</div>
                <div className="col-sm-2"><center>{this.state.duracion}</center></div>
                <div className="col-sm-4"><center>{this.state.visitas}</center></div>
                <div className="col-sm-1 function clickable"><center><i class="fas fa-ellipsis-h"></i></center></div>
            </div>)
    }
}