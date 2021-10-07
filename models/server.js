const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = "/api/users";

        //DB
        this.conectDB();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    async conectDB(){
        await dbConnection();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.static('public') );
        this.app.use( express.json() );
    }


    routes()
    {
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }
   
}

module.exports = Server;