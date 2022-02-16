import Server from './classes/server';

import  router  from './routes/router';

import bodyParser from 'body-parser';
import cors from 'cors';

const server  = new Server

//Body-Parser


server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

// Rutas

server.app.use('/', router);

//configuracion Cors

server.app.use( cors({origin:true, credentials:true}));


// Iniciar Servidor

server.start( ()=> {

    console.log(`Servidor Corriendo en el puerto ${server.port}`)
})