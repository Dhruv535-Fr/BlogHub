// imports
const express = require('express');
const path = require('path');
const { router: UserRoute } = require('./routes/user');
const {ConnectToDb} = require('./connectDb');
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require('./middleware/authentication');


const app = express();
const port = 8000;

//DB connection
ConnectToDb();

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookie('token'));

app.get('/',(req,res) => {
    res.render('home',{
        user : req.user,
    });
});

app.use('/user',UserRoute);

app.listen(port,() => {
    console.log(`Server running on Port : ${port}`); 
})