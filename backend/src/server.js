const express = require('express');

const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(routes);


app.listen(3333,function(){
    console.log('App rodando na porta 3333');
});