import React, { Component } from 'react';
import './PlayList.css';
import { FormattedMessage } from 'react-intl';


class PlayListDetail extends Component {
    state = {
        "nombre": this.props.playlist.name,
        "id": this.props.playlist.id,
        "image": this.props.playlist.images[0].url,
        "creador": this.props.playlist.owner.display_name,
    };
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div className="col-sm-3 clickable">
                <a className="styledLink" href={this.state.id + "/tracks"}>
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