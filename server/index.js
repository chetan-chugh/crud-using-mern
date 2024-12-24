const express = require('express');
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport')
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 6000;

// require('./src/controllers/user.controllers');
const {connectToDB} = require('./src/config/db')
const router = require("./src/routers/user.routers");
app.use('/api/',router);

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: 'cats',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

// app.get('/', (req,res) => {
//     res.send('<a href="/auth/google">Authenticate with google</a>')
// });


app.get("/data",(req,res) => {
    res.send("Hello");
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/google/callback',
    passport.authenticate('google', { successRedirect: '/protected', failureRedirect: "/auth/failure" })
);

app.get('/auth/failure', (req, res) => {
    res.send('something went wrong...')
});

app.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Hello, ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Good bye')
})

app.listen(port, () => console.log(`Server start at post:${port}`));
connectToDB()