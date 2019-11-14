import React, { useEffect } from  "react";

//react-bootstrap has pre-made css files that tidy up a little from default
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.scss'

import MainContainer from "./containers/MainContainer.jsx";


// const socket=io('http://localhost:3000')
//We used functional components throughout the application so we could utilize hooks
    //functional components don't require you to make constructors
    //they also don't need to have a super as a result
    //you pass in the name of your props inside the parameters of your function
    //note that there is no render() method as the implicit method in a functional component is render()
//We didn't instantiate state at the parent level because none of the state we use relates to other components

const App = () => { 
    // useEffect(() => {

    // // socket.broadcast.emit('user connected')

    // },[])

    // useEffect(()=>){
    
    // },[...])

   
    // var useWebSocketsOnOpen = (ws) => {
    //     const [state,setState] = react.useState(null)
    // }

    // const [theme,setTheme]=useState('fire');
    //toggle states: 'fire', 'earth', 'air'(tornado), drought, 'water' 
    //the containers will look exactly the same only different apis and data,
    //use css transition to make the screen rain

    // socket.on('message',(username,text) => {
    //  this.add
    // })
    return (
        <MainContainer />
    )
}

 
export default App;