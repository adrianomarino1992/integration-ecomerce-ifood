var http = require('http');
var express = require('express');
var app = express();
//var port = 3000;
var port = process.env.PORT;

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/App/Index.html');
// })


app.use(express.static(__dirname + '/App'));

app.listen(port, () => {
    console.log('servidor rodando em ' + port);
})