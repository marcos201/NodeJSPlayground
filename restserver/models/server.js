const express = require('express');
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.static('public') );
    }


    routes()
    {
        this.app.get('/api', (req, res) => {
            res.json(
                {msj: "get api"});
        });


        this.app.post('/api', (req, res) => {
            res.json(
                {msj: "post api"});
        });


        this.app.put('/api', (req, res) => {
            res.json(
                {msj: "put api"});
        });


        this.app.delete('/api', (req, res) => {
            res.json(
                {msj: "delete api"});
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }
   
}

module.exports = Server;