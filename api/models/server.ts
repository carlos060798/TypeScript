import express from 'express';
import cors from 'cors';
import UsuarioRoute from '../routes/UsuarioRoutes';
import db from '../db/conexion';
class Server {

  // declaracion de tipos de variables
   private app: express.Application;
    private port: string | number;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 6000;
        
        // Configuraciones DB
        this.conectarDB();
        // Definir las rutas

        this.routes();
        // middlewares
        this.middlewares(); 

        // conexion base de datos

    }

    async conectarDB() {
      try{
        await db.authenticate();
        console.log('Base de datos online');
      }catch(err){
        throw new Error("base de datos no conectada");
      }
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, UsuarioRoute);
    }

    middlewares() {
        // CORS
        this.app.use(cors());
                // lectura del body

        this.app.use(express.json());
        // Directorio publico
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server;
