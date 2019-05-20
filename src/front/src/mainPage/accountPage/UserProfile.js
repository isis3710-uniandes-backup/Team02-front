import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './UserProfile.css';

class UserProfile extends Component {
    constructor(props) {
        super();
        var accessToken = props.match.params.accessToken;
        this.state = {
            "name": "",
            "email": "",
            "followers": "",
            "id": "",
            "accessToken": accessToken,
            "coutry": "",
            "image": ""
        }

        fetch('http://localhost:3001/menu/'+accessToken+'/userProfile')
            .then((response) => {
                response.json().then((data) => {
                    this.setState({ "name": data.display_name });
                    this.setState({ "email": data.email });
                    this.setState({ "followers": data.followers });
                    this.setState({ "username": data.id });
                    this.setState({ "type": data.product });
                    this.setState({ "coutry": data.country });
                    this.setState({ "image": data.images[0].url });
                    console.log(data);
                });

            }).catch((error) => {
                console.error(error);
            });;
    }

    render() {
        var accessToken = this.state.accessToken;
        return (
            <div className="container" id="account">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <img className="img-center center-block" src={this.state.image} />
                        <div className="name">
                            {this.state.name}
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">
                            <div className="section-header">
                                Top 5 Songs
                            </div>
                        </div>
                        <div className="col-sm-5">
                        </div>
                        <div className="col-sm-1"></div>
                    </div>

                </div>

            </div>
        );
    }
}
export default UserProfile;