var http = require('http');
var express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Index.html');
})

//CRIANDO DIRETORIO ACESSIVEL !!!!
app.use(express.static(__dirname + '/App'));


app.listen(process.env.PORT, () => {
    console.log('servidor rodando');
})