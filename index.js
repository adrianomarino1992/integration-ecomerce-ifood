var http = require('http');
var express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/App/Index.html');
})

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/App/Index.html');
// })


app.listen(process.env.PORT, () => {
    console.log('servidor rodando');
})