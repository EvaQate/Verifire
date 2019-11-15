import React, { useEffect, useState } from 'react'
// import io from 'socket.io-client'
// import useWebSocket from 'react-use-websocket';

// const io = require('socket.io-client');

// const socket = io('ws://localhost:3000', {transports: ['websocket']});



//Note the <React.Fragment> it's utilized instead of a <div>
// this allows for multiple items to be part of the render without the surrounding "holder" to be rendered in too
//because they're not rendered, we can't style them, so all selectors have to be initiated on our parent component

//this message component was built for the purpose of having an internal messaging board
//this could be tied to authentication for identification

const Messages = (props) => {

    // const[messagecount,setMessageCount] = useState(0)
    const [messages,setMessages]=useState([])
    const [input, setInput]= useState('')


    // const[id,setId]=useState['']
    // const[chatRoom,setChatRoom]=useState['']

    const[userName,setUserName]=useState('')
    const[isTyping,setIsTyping]=useState(false)
    const [users,setUsers]=useState({})
    const[numUsers,setNumUsers]=useState(0)
    const displayMessage = messages.map((message, i) => {
        console.log("displaymessages")
        return <p key={i}>{messages}</p>
    })
    // useEffect(() => {
    //     //this is used to fetch the message from the database
    //     fetch('/messages')
    //     .then(resp => {
    //         return resp.json()
    //     })
    //     .then(data => {
    //         setMessages([...data])
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])
    // const [theme,setTheme]=useState('fire')
    // useEffect(() =>{
    //     socket.on('receive message',payload => {
    //         setMessageCount(messageCount++)
    //     })
    // })

    const handleType = e => {
        setInput(e.target.value)

        socket.emit('typing','user')
    };

    const handleClick = () => {
        console.log('emitting new message', input)
        socket.emit('chat',{
            message: message.value
        })
        // setMessages(messages.concat([{'message': input}]))
        //  setInput('');
        // setMessageCount(messageCount++)
    }
    // useEffect(() =>{
    //     console.log('received new message')
    //     document.title=`${messageCount} new messages have been emitted `
    // },[messageCount])
   
useEffect(()=> {
    console.log('socket', socket);
    socket.on('chat',(data) => {

        console.log(data.message+'in useEffect')
        setMessages([data.message].concat(messages))
        console.log('msgs',messages)
        setInput['']
    })
},[])


useEffect(() =>{

    // while(input!=''){
    //     socket.emit('isTyping','is typing')

    // // }
    // socket.on('typing',(data) => {
    //     isTyping=true
    //     data.message='is typing'
    // })
 
    socket.on('typing', (input) =>{
        console.log('typing in messages..')
        if (input) {
            // socket.emit('typing',)
            // let append1=document.createElement('div')
            // append1.id='typing'
            // append1.innerHTML('<p><em> user is typing...</em></p>')
            // document.getElementById('messages').append(append1)
            setIsTyping(input);
        //   document.createElement('div').innerHTML = '<p><em>' + <input type="button" value=""/> + ' user is typing...</em></p>';
        } else {
            setIsTyping(false);
        }
    
    })
},[])


// useEffect(() => {
//     socket.on('add user', (username) => {
//         socket.username=username;
//         socket.emit('add user',username)
//     })
// },[])




    // const handleSetTheme = () => {
    //     let newTheme
    //     (theme=='fire')
    //     ? newTheme = 'fire'
    //     : newTheme = 'air'


    //     console.log('new theme '+ newTheme)
    //     setTheme(newTheme)
    // }

    
    // // this.socket = socketIOClient('ws://localhost:8989', {
    // //     query : 'username='+this.state.username+'&uid='+this.state.uid
    // // });

    // // this.socket.on('updateUsersList', function (users) {
    // //     console.log(users);
    // //     this.setState({
    // //         users : users
    // //     });

 
    // //This hook was built to receive and show messages
    // const [messages, setMessages]= useState([{message: 'message'}])
    // // const [socket, setSocket]=useState(null)
    // //this hook was built to take in user input and utilize it to show messages sent
    // const [input, setInput]= useState('')

    

    // //use effects mimics lifecycle methods, the second parameter being an empty array mimics componentDidMount
    // useEffect(() => {
    //     //this is used to fetch the message from the database
    //     // fetch('/messages')
    //     // .then(resp => {
    //     //     return resp.json()
    //     // })
    //     // .then(data => {
    //     //     setMessages([...data])
    //     // })
    //     // .catch(err => {
    //     //     console.log(err)
    //     // })
    //     // socket.on('result',result =>{
    //     //     [messages,setMessages]=setState({result})
    //     // })
    // }, [])

    // //hooks are simplified by making methods with hooks built into them
    // //Think of the method that is paired in the hook ('setInput') here as another form of this.setState
    // const handleType = e => {
    //     setInput(e.target.value)
    // };

    // // const handleMessageSubmit((msg) => {
    // //     socket.emit("chat message", )
    // // })

    // const handleClick = () => {
    //     // fetch('/messages/create', {
    //     //     method: 'POST',
    //     //     body: {message: input}})
    //     // setMessages(messages.concat([{'message': input}]))
    //     setInput('');
    //         // socket.emit('message',{message: message, name: users[socket.id]})
    //         socket.emit('message',{message: message, name: 'sicc'})

    // }

    // socket.on('result',result =>{
    //     // [messages,setMessages]=setState({result})
    //     console.log(result)
    // })
    let typingUser;
    if(isTyping){
        typingUser = <p>'User typing..'</p>;
    }
    return ( 
        <React.Fragment><div id="input-field">
             {displayMessage}
               <input id="message" type="text" placeholder="Enter message here" value={input} onChange={handleType}/>
               <input id="send" type="button" value="press to send" onClick={handleClick} />
               {typingUser}
               </div> </React.Fragment>
        
     );
}
 
export default Messages;