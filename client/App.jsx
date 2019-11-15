
import React, { useState, useEffect } from  "react";

const EventEmitter = require('events');


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// increase the limit
myEmitter.setMaxListeners(100);
//react-bootstrap has pre-made css files that tidy up a little from default
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.scss'

import MainContainer from "./containers/MainContainer.jsx";
// const io=require('socket-io.client')
// const socket=io('ws://localhost:3000')


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
// const[message,setMessage]=useState('EvaQueue: toggle for zero day type')
// const[mesageCount, setMessageCount] = useState(0)
// const [theme,setTheme]=useState('fire')
// const[onFire,setOnFire]=useState('false')
// ///fire, earth, air water

// useEffect(() =>{
//     if(onFire){ console.log('about to join room')
//     socket.emit('room',{message:'shadow-ban'})
//     }
    
//     return () => {
//         if(onFire){ console.log('shadowbanning...')
//         socket.emit('relevant info only',{
//             message: 'shadow-ban'
//         })
//     }
//     }

// })

//add a set intettr to send socket emit messages to everyone a fae user, admin, buy our  merche

    //  useEffect(()=>{
    //     socket.on('receive message',payload => {
    //         setMessageCount(messageCount++)
    //     })
    //     document.title`${messageCount} new message}`
    // },[messageCount])


   
    // var useWebSocketsOnOpen = (ws) => {
    //     const [state,setState] = react.useState(null)
    // }

    // const [theme,setTheme]=useState('fire');
    // const handleSetTheme = () => {
    //     let newTheme
    //     (theme==='fire')
    //     ? newTheme='air'
    //     : newTheme='fire'
    //     console.log('new theme:' +newTheme)
    //     setTheme(newTheme)
    // }

    // const handleOnFire = () => {
    //     onFire
    //     ? setOnFire(false)
    //     : setOnFire(true)
    // }

    // const handleNewMessage = () => {
    //     console.log('emitting new message')
    //     socket.emit('new message',{
    //         message:'new-message'
    //     })
    //     setMessageCount(messageCount++)
    // }
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