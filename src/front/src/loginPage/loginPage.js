import React, { Component } from 'react';
import './loginPage.css';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div id="login">
        <div className="background">
          <div className="container">
            <div className="d-flex justify-content-center">
              <div className="card" id="carta">
                <div className="card-header">
                  <h1><b> <FormattedMessage id="Sign In" /></b></h1>
                </div>
                <div className="card-body">
                  <a className="styledLink" href="/login"><span><button  className="btn float-right login_btn"><i className="fab fa-spotify sptIcon"> <FormattedMessage id="Connect using spotify" /></i></button></span></a>
                  <br></br>
                  <br></br>
                  <div className="d-flex justify-content-center links">
                    <FormattedMessage id="Don't have an account? " /> <span className="link" onClick = {this.redirectToSpotify}> <FormattedMessage id="Sign Up" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  redirectToSpotify(){
    window.open('https://www.spotify.com/', '_blank');
  }
  login(){
    
  }
}

export default Login;