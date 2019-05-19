import React, { Component } from 'react';
import './PlayList.css';
import { FormattedMessage } from 'react-intl';

class Account extends Component {
    constructor(props)
    {
        super();
        var accessToken = props.match.params.accessToken;
        this.state = {
            "playlists":[],
            "accessToken" : accessToken
        }
        fetch('http://localhost:3001/menu/'+accessToken +'/playlists')
        .then((response) => {
            response.json().then((data) => {
                this.setState({ "playlists": data.items });
            });
        });
    }

    render() {
        return (
            <div className="container" id = "account">
                <div className="header">
                    <FormattedMessage id="Account" />
                </div>
                
            </div>
        );
    }
}
export default Account;