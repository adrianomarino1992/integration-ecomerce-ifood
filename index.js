var http = require('http');
var express = require('express');
var app = express();


//CRIANDO DIRETORIO ACESSIVEL !!!!
app.use(express.static(__dirname));


app.listen(process.env.PORT, () => {
    console.log('servidor rodando');
})