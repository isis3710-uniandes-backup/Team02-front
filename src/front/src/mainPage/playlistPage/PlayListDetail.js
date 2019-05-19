import React, { Component } from 'react';
import './PlayList.css';
import { FormattedMessage } from 'react-intl';


class PlayListDetail extends Component {
    constructor(props)
    {
        super();
        this.state = {
            "nombre": props.playlist.name,
            "id": props.playlist.id,
            "image": props.playlist.images[0].url,
            "creador": props.playlist.owner.display_name,
            "accessToken" : props.accessToken
        };
    }
   
    render() {
        var nombre = this.state.nombre;
        if(this.state.nombre.length >= 24){
            nombre = nombre.substring(0,18)+"...";
        }
        return (
            <div className="col-sm-3 clickable">
                <a className="styledLink" href={"/menu/" + this.state.accessToken+"/playlist/" + this.state.id + "/tracks"}>
                    <div className="row">
                            <img className="img-center center-block" src={this.state.image}></img>
                    </div>
                    <div className = "section-header">{nombre}</div>
                </a>
            </div>)
    }

}
export default PlayListDetail;