import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PlayList.css';
import Song from '../songPage/song';
var infor;
class PlayListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "nombre": this.props.playlist.nombre,
            "id": this.props.playlist.id,
            "duracion": this.props.playlist.duracion,
            "tipo": this.props.playlist.tipo,
            "canciones": []
        };
        infor = {
            "nombre": this.props.playlist.nombre,
            "id": this.props.playlist.id,
            "duracion": this.props.playlist.duracion,
            "tipo": this.props.playlist.tipo,
            "canciones": []
        };
    }
    componentDidMount() {
        fetch('/playlist/1/canciones')
            .then((response) => {
                response.json().then((data) => {
                    this.setState({ "canciones": data });
                    infor.canciones = data;
                });
            });
    }
    render() {
        return (
            <div className="row table-item">
                <div className="col-sm-1 function clickable" onClick={this.showSongs}><center><i className="fas fa-play-circle"></i></center></div>
                <div className="col-sm-4">{this.state.nombre}</div>
                <div className="col-sm-3"><center>{this.state.duracion}</center></div>
                <div className="col-sm-2"><center>{this.state.tipo}</center></div>
                <div className="col-sm-2 function clickable"><center><i class="fas fa-ellipsis-h"></i></center></div>
            </div>)
    }
    showSongs() {
        console.log(infor);
        ReactDOM.render(<div className="container">
            <div className="header">
                {infor.nombre}
            </div>
            <div className="content" id="song">
                <div className="row table-header">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4">Name</div>
                    <div className="col-sm-2"><center>Duration</center></div>
                    <div className="col-sm-4"><center>Times Played</center></div>
                    <div className="col-sm-1"></div>
                </div>
                {infor.canciones.map((e, i) => <Song key={i} song={e} />)}
            </div>
        </div>, document.getElementById("detailComponent"))
    }

}
export default PlayListDetail;