//require('dotenv').config();

//const express = require('express');
/*const expressLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");*/
//const connectDB = require('./server/config/db');
//const session = require('express-session');
//const passport = require('passport');
//const MongoStore = require('connect-mongo');
/*const app = express();
const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);
const port = 5000 || process.env.PORT; *
/
/*app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
    // Date.now() - 30 * 24 * 60 * 60 * 1000
}));*/

//app.use(passport.initialize());
//app.use(passport.session());

/*app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
//Conntect to Database
/*connectDB(); */

// Static Files
/*app.use(express.static('public'));

// Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');*/
// chat app
// Socket.io connection handling
// Socket.io connection handling

// ... (existing code)

// Routes
// Assuming you have a separate route for chat
/*app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Socket 
//const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})

*
/

// Routes

// Routes
//app.use('/', require('./server/routes/auth'));
/*app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));
//app.use('/chat', require('./server/routes/chat')); // New line for chat route
// Handle 404
app.get('*', function(req, res) {
    //res.status(404).send('404 Page Not Found.')
    res.status(404).render('404');
})*/


/*app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});*/
const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})