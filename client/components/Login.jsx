import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from './firebaseConfig';
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// var provider = new firebase.auth.GoogleAuthProvider();

const Login = (props) => {
    // const {
    //     user,
    //     signOut,
    //     signInWithGoogle,
    //   } = this.props;
   
    //this hook was built to take in user input and utilize it to show messages sent
    const [inputs, setInput]= useState({email:'',password:''})

  
    //hooks are simplified by making methods with hooks built into them
    //Think of the method that is paired in the hook ('setInput') here as another form of this.setState
    const handleInputChange = e => {
        setInput(e.target.value)
    };

    const handleClick =() => {
        // fetch('/messages/create', {
        //     method: 'POST',
        //     body: {message: input}})
        console.log('handleClick');
    }

    
    console.log(inputs.email);
    return ( 
       <div id = 'signup'>
        <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
             
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
            
              <div className="grey-text">
                <MDBInput
                  onChange ={handleInputChange}
                  value = {inputs.email}
                  label="Type your email"
                 
                />
                <MDBInput
                onChange ={handleInputChange}
                  value = {inputs.password}
                  label="Type your password"
                 
                />
              </div>
              <div className="text-center">
                <MDBBtn onClick ={()=>handleClick} >Login</MDBBtn>
                <MDBBtn>Sign-Up</MDBBtn>
              </div>
              <div className="oauth">
                
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
    </div> */}
      </div>
     );
}
{/* const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login); */};
export default Login