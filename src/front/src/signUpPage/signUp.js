import React, { Component } from 'react';
import './signUp.css';
import { Link } from 'react-router-dom'

class SignUp extends Component {
    render() {
        return (
            <div id="register">
                <div class="background">
                    <div className="container">
                        <div className="d-flex justify-content-center h-100">
                            <div className="card" id="carta">
                                <div className="card-header">
                                    <h1><b>Sign Up</b></h1>
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
                                                <h4>or fill this form</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="container-fluid row">
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Name"></input>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Last Name"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-fluid row">
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-at"></i></span>
                                                    </div>
                                                    <input type="email" className="form-control" placeholder="Email"></input>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-at"></i></span>
                                                    </div>
                                                    <input type="email" className="form-control" placeholder="Confirm Email"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-fluid row">
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                    </div>
                                                    <input type="password" className="form-control" placeholder="Password"></input>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                    </div>
                                                    <input type="password" className="form-control" placeholder="Confirm Password"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-fluid row">
                                            <div className="col-sm-12">
                                                <div className="d-flex justify-content-center links form-group">
                                                    By creating an account you accept our <span className="link"> Terms and Conditions</span>
                                                </div>
                                                <input type="submit" value="Create Account" className="btn login_btn"></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Do you have an account? <Link to="/login" className="link"> Sign In</Link>
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
}

export default SignUp;