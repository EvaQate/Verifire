
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Axios from 'axios';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


var firebaseConfig = {
  apiKey: "AIzaSyBYxH0RxxaByhPzYaB7b4BfLb89jp_MDDE",
  authDomain: "evaqate-e0174.firebaseapp.com",
  databaseURL: "https://evaqate-e0174.firebaseio.com",
  projectId: "evaqate-e0174",
  storageBucket: "evaqate-e0174.appspot.com",
  messagingSenderId: "468412941433",
  appId: "1:468412941433:web:7d4964193d1f0bc42380a8",
  measurementId: "G-V8K8YE4XWZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',

      isLoggedIn: false

      isSignedIn: false

    };
    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
    this.onChangeInputEmail = this.onChangeInputEmail.bind(this);
    this.onChangeInputPassword = this.onChangeInputPassword.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.signUpButton = this.signUpButton.bind(this);

  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(prevState => {
      this.setState({isSignedIn: !prevState})
    })
  }

  onChangeInputEmail(e) {
    this.setState({email: e.target.value});
  }
  onChangeInputPassword(e) {
    this.setState({password: e.target.value});
  }

  loginButton() {

    Axios
      .post("/sign-up/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(data =>this.setState({isLoggedIn:true}))
  }
  //sign up fetch request
  signUpButton() {

    Axios
      .post("/sign-up/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(data => this.setState({isLoggedIn:true}))
  }
  
  render() {
    
    if(this.state.isLoggedIn){
      return <Redirect to="/" />;
    }
 
    return (
      <div id="signup">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">           
              <form>
                <p className="h5 text-center mb-4">Sign in</p>          
                <div className="grey-text">
                  <MDBInput
                    onChange={this.onChangeInputEmail}
                    value = {this.state.email}
                    label="Type your email"     
                  />
                  <MDBInput
                    onChange={this.onChangeInputPassword}
                    value = {this.state.password}
                    type="password"
                    label="Type your password"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn onClick={()=> this.loginButton()}>Login</MDBBtn>
                  <MDBBtn onClick={()=> this.signUpButton()}>Sign-Up</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="App">
          {this.state.isSignedIn ? ( 
            <div>You are signed in!</div>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      </div>
     
    )
  }
}

export default Login;

