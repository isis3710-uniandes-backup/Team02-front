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
        return (
            <div className="col-sm-3 clickable">
                <a className="styledLink" href={"/menu/" + this.state.accessToken+"/playlist/" + this.state.id + "/tracks"}>
                    <div className="row">
                        <img className="img-responsive center-block" src={this.state.image}></img>
                    </div>
                    <h4>{this.state.nombre}</h4>
                    <p className="section-content"> <FormattedMessage id="Created By:" /> {this.state.creador}</p>
                </a>
            </div>)
    }

}
export default PlayListDetail;