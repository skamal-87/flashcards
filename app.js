const express = require('express');
const app = express();
const pug = require('pug');


app.set('view engine','pug');

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/cards', (req,res) => {
    res.render('card',{prompt: "Who is buried in Grant's Tomb?"});
});

app.listen(3000, () =>{
    console.log('The application is running on localhost:3000')
});

