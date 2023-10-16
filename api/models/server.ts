import express from 'express';
class Server {

  // declaracion de tipos de variables
   private app: express.Application;
    private port: string | number;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 6000;

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server;
