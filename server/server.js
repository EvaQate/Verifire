const express = require('express');
const app = express();
const path = require('path');
const bodyParser=require('body-parser')

const http = require("http").createServer(app);
const io=require('socket.io')(http)
//new Server() is the same

const PORT = 3000;

const newsController = require('./controllers/newsController');
const messageController = require('./controllers/messageController');
// const userController=require('./controllers/userController')

app.use(express.json());
app.use(express.static('assets'))


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

io.on("connection",function(socket){
  console.log("socket connected")
})

io.sockets.on('connection',function(socket){
  socket.emit('news',{ key: 'value'})
})

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


io.listen(PORT, () => console.log(`listening on port: ${PORT}`));