import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

class MenuPage extends Component {

    render() {
        return (
            <div className="container">
                <div className="header">
                    <FormattedMessage id="Home" />
                </div>
                <div className="content">
                    <div className="section-header">
                        <FormattedMessage id="Our Selections" />
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-3 clickable">
                            <div className="temp-image">

                            </div>
                        </div>
                        <div className="col-sm-3 clickable">
                            <div className="temp-image">

                            </div>
                        </div>
                        <div className="col-sm-3 clickable">
                            <div className="temp-image">

                            </div>
                        </div>
                        <div className="col-sm-3 clickable">
                            <div className="temp-image">

                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="section-header">
                        <FormattedMessage id="Made For You" />
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-3 clickable">
                            <div className="temp-image">

                            </div>
                        </div>
                        <div className="col-sm-3 clickable">
                            <div className="temp-image">

                            </div>
                        </div>
                        <div className="col-sm-3 clickable">
                            <div className="temp-image">

                            </div>
                        </div>
                        <div className="col-sm-3 clickable">
                            <div className="temp-image">

                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>)
    };
}
export default MenuPage;