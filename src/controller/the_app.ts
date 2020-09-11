import { config } from '../../configuration/config';
import express = require('express');

export class Server {
    // properties
    private app: express.Application;
    private port: string | number;

    // public properties
    public static theInstance: Server;

    //constructor
    private constructor(controllers: any) {
         this.app = express();
         this.port = process.env.PORT || 3000;
         this.app.set('Secret', config.secret);
         this.app.use(express.urlencoded({ extended: true }));
         this.app.use(express.json()); //Used to parse JSON bodies
         this.initializeControllers(controllers);
    }

    //private methods
    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
          this.app.use('/', controller.router);
        });
    }
    //methods
    public start() {
        this.app.listen(this.port, () => {
            console.log('Server started successfully on...' + this.port);
        });
    }

    public static getServerInstance(controllers: any): Server {
        if(!Server.theInstance) {
            Server.theInstance = new Server(controllers);
        }
        return Server.theInstance;
    }
};