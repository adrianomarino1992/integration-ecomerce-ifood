var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT;

app.use(express.static(__dirname + '/App'));

app.listen(port, () => {
    console.log('servidor rodando em ' + port);
})