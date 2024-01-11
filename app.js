require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);



/*const expressLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");*/
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL
    }),
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
    // Date.now() - 30 * 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
//Conntect to Database*/
connectDB();







// Routes








// Middleware, configurations, and routes related to your Express app
// ...

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.set('layout', './layouts/main');
// Routes
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));


// Assuming you have a separate route for chat
const chatRoute = require('./server/routes/chat');
app.use('/chat', chatRoute);
app.use(express.static(path.join(__dirname, 'public')));
// Handle 404
app.get('*', function(req, res) {
    res.status(404).render('404');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

// Socket.io connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
});