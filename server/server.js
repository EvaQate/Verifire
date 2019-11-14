const express = require('express');
const app = express();
const path = require('path');
const bodyParser=require('body-parser')

const http = require("http").createServer(app);
//new Server() is the same


const PORT = 3000;
const io=require('socket.io')(http);


connections=[]
const newsController = require('./controllers/newsController');
const messageController = require('./controllers/messageController');
// const userController=require('./controllers/userController')

app.use(express.json());
app.use(express.static('assets'))


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
// everytime a user loads the website --> gives them their own socket 
// io.on("connection",socket => {
//   console.log("socket connected"+socket.id)

//     socket.on('subscribeToTime', (interval) => {

//       setInterval(() => {
//         socket.emit('timer', new Date())
//       })
//     })
//     connections.push(socket)
//     console.log(connections.length+"connections.length in serverjs line 32")

//     connecions.splice(connections.indexOf(socket))

//   socket.on('disconnect',reason => {
//     console.log('user disconnected')
//     if(!socket.username) return
//     users.splice(users.indexOf(socket.username),1)
//     updateUsernames()
//     connections.splice(connections.indexOf(socket),1)
    
//   })


//   socket.on('connection', socket => {
//     socket.set('name',name,() => {
//       socket.emit('ready')
//     })
//   })

//   //access message data from client to socket and record which client was typing
//   socket.on('msg',() =>{
//     socket.get('name', (err,name)=>{
//       console.log('Message written by ',name)
//     })
//   })

//   socket.on('send message', data => {
//     io.sockets.emit('new message',{msg: data, user: sockets.username})
//   })


  io.on('connection',socket => {
    console.log('made socket connection')
    socket.on('chat', data => {
      // io.sockets.emit('chat',data)
      socket.emit('ready')
    })

  //   let tweets=setInterval(()=>{
  //     getBieberTweet((tweet) =>
  //     socket.volatile.emit('bieber tweet',tweet))
  //    },100);
  // })
  // socket.on('new user', function(data, callback){
  //   callback(true)
  //   socket.username=data
  //   users.push(socket.username)
  //   updateUsernames()
    
 })



  //this allows for client side instant, when another user is typing it will display "Person L is typing"
  // socket.on('typing', data=> {
  //     socket.broadcast.emit('typing',data)
  // })


  // socket.on('connection', socket =>{
  //   socket.broadcast.emit('user connected')
  //   socket.broadcase.json.send({ a: 'message' })
  // })

  // function updateUsernames(){
  //   io.sockets.emit('get users', user)
  //  }


  

  //socket.on('fire')

  //socket.on('earth')

  //socket.on('water')

  //socket.on('air')
// });




// io.on('connection',socket => {
  
//   // socket.emit('news',{ key: 'value'})
// })

//'/main' route redirect
app.get('/main', (req, res) => {
  res.redirect('/')
});

// Serve Particle SVG
app.get('/flare', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/assets/flame.svg'));
});
// '/news' route will respond with a nested array of arrays,
    //each nested array contains scraped data from sources LAFD, LA Times, and Youtube (respectively)
    //structured as follows:
    // [
    //     [ { title: 'LAFD Title', link: 'LAFD.com', picture: 'piclink.com' } ],
    //     [ { title: 'LA Times Title', link: 'LATimes.com', picture: 'piclink.com' } ],
    //     [ { title: 'Youtube Title', link: 'youtube.com', picture: 'piclink.com' } ]
    // ]

app.get('/news', newsController.getNews, (req, res) => {
  res.status(200).json(res.locals.allNews);
});
// '/alerts' route will respond with an array of alerts from LAFD: {title: 'Alert', link: 'www.alertLink.com'}
app.get('/alerts', newsController.getAlerts, (req, res) => {
  res.json(res.locals.alerts);
});

app.use('/build', express.static(path.join(__dirname, '../build')));


//chat start
//get the messages from the database to display them
app.get('/messages', messageController.getMessages, (req, res) => {
  res.json(res.locals.messages);
})
//post the messages to the database
app.post('/messages/create', messageController.postMessages, (req, res) => {
  res.json(res.locals.message);
})
//chat end


//404 handler
app.use('*', (req, res) => {
    res.sendStatus(404);
  });
//global error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.sendStatus(500);
});

// app.listen(PORT, () => {
//     console.log(`Server listening on port: ${PORT}`);
// });


http.listen(process.env.PORT || 3000, () => console.log(`listening on port: ${PORT}`));