
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Axios from 'axios';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    };
    this.onChangeInputEmail = this.onChangeInputEmail.bind(this);
    this.onChangeInputPassword = this.onChangeInputPassword.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.signUpButton = this.signUpButton.bind(this);

  }

  onChangeInputEmail(e) {
    this.setState({email: e.target.value});
  }
  onChangeInputPassword(e) {
    this.setState({password: e.target.value});
  }

  loginButton() {
    console.log('this is login')
    Axios
      .post("/sign-up/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(data =>this.setState({isLoggedIn:true}))
  }
  //sign up fetch request
  signUpButton() {
    console.log('this is signup')
    Axios
      .post("/sign-up/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(data => this.setState({isLoggedIn:true}))
  }
  
  render() {
    console.log(this.state.isLoggedIn)
    if(this.state.isLoggedIn){
      return <Redirect to="/" />;
    }
    console.log(this.state.email);
    console.log(this.state.password);
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
      </div>
     
    )
  }
}
export default Login;