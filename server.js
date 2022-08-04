import express from 'express';
import dotenv from 'dotenv';

//node Config
dotenv.config({path:'./config/config.env'});

const server = express();
server.listen(3000, console.log("Servidor rodando na porta 3000..."));

server.get('/', (req, res)=> {

    res.send("Pagina Inicial")

});

server.get('/user', (req, res) =>{

    res.send('Pagina do Usuario')

})

