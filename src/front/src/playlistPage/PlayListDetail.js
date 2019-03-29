import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PlayList.css';

export default class PlayListDetail extends Component {
    state = {
        "nombre": this.props.playlist.nombre,
        "id": this.props.playlist.id,
        "duracion": this.props.playlist.id,
        "tipo": this.props.playlist.tipo
    }
    render() {
        return (
            <div className="row table-item clickable">
                <div className="col-sm-1 function"><center><i className="fas fa-play-circle"></i></center></div>
                <div className="col-sm-4">{this.state.nombre}</div>
                <div className="col-sm-3"><center>{this.state.duracion}</center></div>
                <div className="col-sm-2"><center>{this.state.tipo}</center></div>
                <div className="col-sm-2 function"><center><i class="fas fa-ellipsis-h"></i></center></div>
            </div>)
    }
}