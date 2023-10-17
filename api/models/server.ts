import express from 'express';
import cors from 'cors';
import UsuarioRoute from '../routes/UsuarioRoutes';
import db from '../db/conexion';
import bodyParser from 'body-parser'; // Importa body-parser
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
                // middlewares

        this.middlewares(); 
        // Definir las rutas

        this.routes();
    

    }

    async conectarDB() {
      try{
        await db.authenticate();
        console.log('Base de datos online');
      }catch(err){
        throw new Error("base de datos no conectada");
      }
    }
    middlewares() {
      // CORS
      this.app.use(cors());
              // lectura del body

     this.app.use(bodyParser.json());
      // Directorio publico
      this.app.use(express.static('public'));
  }
    routes(){
        this.app.use(this.apiPaths.usuarios, UsuarioRoute);
    }

  

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server;
