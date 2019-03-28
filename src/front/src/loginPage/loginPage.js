import React, { Component } from 'react';
import './loginPage.css';
import SignUp from '../signUpPage/signUp';
import ReactDOM from 'react-dom';
import MainPage from '../mainPage/mainPage';
import { Link } from 'react-router-dom'


class Login extends Component {
  render() {
    return (
      <div id="login">
        <div class="background">
          <div className="container">
            <div className="d-flex justify-content-center">
              <div className="card" id="carta">
                <div className="card-header">
                  <h1><b>Sign In</b></h1>
                </div>
                <div className="card-body">
                  <div className="container-fluid row">
                    <div className="col-sm-12">
                      <div className="d-flex justify-content-center option form-group">
                      </div>
                      <div className="d-flex justify-content-center option form-group">
                        <button className="btn">
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button className="btn">
                          <i className="fab fa-github"></i>
                        </button>
                        <button className="btn">
                          <i className="fab fa-google-plus-g"></i>
                        </button>
                      </div>
                      <div className="d-flex justify-content-center option form-group">
                        <h4>or use email</h4>
                      </div>
                    </div>
                  </div>
                  <form>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                      </div>
                      <input type="email" className="form-control" placeholder="Email"></input>
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                      </div>
                      <input type="password" className="form-control" placeholder="password"></input>
                    </div>
                    <div className="form-group">
                      <Link to="/home"><input type="submit" value="Login" className="btn float-right login_btn" onClick={this.logUser}></input></Link>
                    </div>
                  </form>
                  <br></br>
                  <br></br>
                  <div className="d-flex justify-content-center links">
                    Don't have an account? <Link to="/register" className="link" onClick={this.goToSignUp}> Sign Up</Link>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <span className="link"> Forgot your password?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  goToSignUp() {
    ReactDOM.render(<SignUp />, document.getElementById('root'));
  }
  logUser() {
    ReactDOM.render(<MainPage />, document.getElementById('root'));
  }
}

export default Login;