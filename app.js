const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const pug = require('pug');


app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.set('view engine','pug');

app.use((req,res,next) =>{
    console.log('hello')
    const err = new Error('Oh noes!')
    err.status = 500;
    next(err);
});

app.use((req,res,next) =>{
    console.log('World');
    next();
});


app.get('/', (req,res) => {
    const name = req.cookies.username;
    if (name){
    res.render('index',{name});
} else {
    res.redirect('/hello');
}
});

app.get('/hello', (req,res) => {
    const name = req.cookies.username;
    if(name){
        res.redirect('/');
    }else {
    res.render('hello');
    }
});
app.post('/hello', (req,res) => {
    res.cookie('username',req.body.username)
    res.redirect('/');
});

app.get('/cards', (req,res) => {
    res.render('card',{prompt: "Who is buried in Grant's Tomb?"});
});

app.post('/goodbye', (req,res) => {
    res.clearCookie('username')
    res.redirect('/hello');
});

app.use((err,req,res,next)=> {
    res.locals.error = err;
    res.status(err.status);
    res.render('error')

})

app.listen(3000, () =>{
    console.log('The application is running on localhost:3000')
});

