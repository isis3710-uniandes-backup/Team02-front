import React, { Component } from 'react';
import './signUp.css';
import ReactDOM from 'react-dom';
import LoginPage from '../loginPage/loginPage.js'

class SignUp extends Component {
    render() {
        return (
            <div id="register">
                <div className="background">
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
                                                    <input type="text" className="form-control" placeholder="Name" id="name"></input>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Last Name" id="lastName"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-fluid row">
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-at"></i></span>
                                                    </div>
                                                    <input type="email" className="form-control" placeholder="Email" id="email"></input>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-at"></i></span>
                                                    </div>
                                                    <input type="email" className="form-control" placeholder="Confirm Email" id="cemail"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-fluid row">
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                    </div>
                                                    <input type="password" className="form-control" placeholder="Password" id="password"></input>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group form-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                    </div>
                                                    <input type="password" className="form-control" placeholder="Confirm Password" id="cpassword"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-fluid row">
                                            <div className="col-sm-12">
                                                <div className="d-flex justify-content-center links form-group">
                                                    By creating an account you accept our <span className="link"> Terms and Conditions</span>
                                                </div>
                                                <div id="d-flex justify-content-center form-group">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <button className="btn login_btn" onClick={this.postUser}>Create Account</button>
                                    <div id="errors">
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Do you have an account? <span to="/login" className="link" onClick={this.goToLogin}> Sign In</span>
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
    postUser() {
        var data = {
            "loginUsuario": document.getElementById("name").value + " " + document.getElementById("lastName").value,
            "correo": document.getElementById("email").value,
            "imagen": "todo",
            "clave": document.getElementById("password").value,
            "premium": "0",
            "idioma": "ES"
        }
        console.log(data);
        fetch("/usuario", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => ReactDOM.render(<LoginPage />, document.getElementById('root'))
        )
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }
    goToLogin(){
        ReactDOM.render(<LoginPage />, document.getElementById('root'));
    }


}

export default SignUp;