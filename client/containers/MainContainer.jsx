import React, { useEffect, useState } from 'react';
import ContentContainer from './ContentContainer.jsx';
import LandingContainer from './LandingContainer.jsx';
import SignupContainer from './SignupContainer.jsx';
//we utilized react-bootstrap to style our page with pre-made components
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

//we imported the next set to utilize react-router as we wanted to route in a landing page
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
  } from "react-router-dom";

//We created a main container preferentially as to carry our other containers
//This allows us to also utilize another layer for styling as well

//react router has two parts, one part is integrated into your main code to direct your user
//the second portion sends the user to where they go based on where your routes are established


const MainContainer = () => {
  //instantiating hook in this component so that the fetch occurs earlier
  const [firenews, firenewsUpdate] = useState([[{title:'Loading...', link:'#'}],[{title:'Loading...', link:'#'}],[{title:'Loading...', link:'#'}]]);
  const [earthnews, earthnewsUpdate] = useState([[{title:'Loading...', link:'#'}],[{title:'Loading...', link:'#'}],[{title:'Loading...', link:'#'}]]);
  // const [windnews, windnewsUpdate] = useState([[{title:'Loading...', link:'#'}],[{title:'Loading...', link:'#'}],[{title:'Loading...', link:'#'}]]);
  // const [waternews, waternewsUpdate] = useState([[{title:'Loading...', link:'#'}],[{title:'Loading...', link:'#'}],[{title:'Loading...', link:'#'}]]);
  // upon rendering, the fetch will occur and the hook 'newsUpdate' should update the state
  useEffect(() => {
    fetch('/firenews')
    .then(resp => {
        return resp.json()})
    .then(data => {
        firenewsUpdate([...data])
    })
    .catch((err) => {
        console.log(err)
    })
    // fetch('/windnews')
    // .then(resp => {
    //     return resp.json()})
    // .then(data => {
    //     windnewsUpdate([...data])
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
    fetch('/earthnews')
    .then(resp => {
        return resp.json()})
    .then(data => {
        earthnewsUpdate([...data])
    })
    .catch((err) => {
        console.log(err)
    })
    // fetch('/waternews')
    // .then(resp => {
    //     return resp.json()})
    // .then(data => {
    //     waternewsUpdate([...data])
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
},[])
    //easter egg for sandstorm- just need to click the fire icon
    const Easteregg = () => {
      const audio = new Audio(
        'https://iringtone.net/rington/file?id=8454&type=sound&name=mp3'
      );
      audio.play();
      const app = document.getElementById('root');
      app.classList.add('easter-egg');
      const colorGen = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
      };
      setInterval(() => {
        const elements = document.querySelectorAll('*');
        for (let i = 0; i < elements.length; i += 1) {
          elements[i].style.backgroundColor = `${colorGen()}`;
          elements[i].style.color = `${colorGen()}`;
          elements[i].style.fill = `${colorGen()}`;
        }
      }, 100);
    };

    return ( 
        <article id ="mainContainer">
          <Router>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                <img
                    alt=""
                    src="http://www.clker.com/cliparts/P/r/s/n/g/W/maron-flame-logo-4.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    onClick={()=> Easteregg()}
                />
                <Link className="navLinks" to="/">Verifire</Link>
                
                </Navbar.Brand>
                
                <NavLink className="navLinks" to="/earth"> Earth </NavLink>
                {/* <NavLink className="navLinks" to="/wind"> Wind </NavLink> */}
                <NavLink className="navLinks" to="/fire"> Fire </NavLink>
                {/* <NavLink className="navLinks" to="/water"> Water </NavLink> */}
                
                <NavLink className="navLinks" to="/sign-up">Sign Up/Log In</NavLink>

              </Navbar>
              
            <Switch>
              <Route path="/earth">
                <ContentContainer element ={'earth'} news={earthnews}/>
              </Route>
              <Route path="/wind">
                {/* <ContentContainer element ={'wind'} news={windnews}/> */}
              </Route>
              <Route path="/fire">
                <ContentContainer element ={'fire'} news={firenews}/>
              </Route>
              <Route path="/water">
                {/* <ContentContainer element ={'water'} news={waternews}/> */}
              </Route>
              <Route exact={true} path="/">
                <LandingContainer/>
              </Route>
              <Route path="/sign-up">
                <SignupContainer/>
              </Route>
            </Switch>
          </Router>
        </article>
     );
}

//
 
export default MainContainer;