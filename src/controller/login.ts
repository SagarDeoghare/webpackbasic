import * as express from 'express';
import { DBConnector } from '../model/dbconnector';

export class Login {
  private path = '/login';
  
  private router = express.Router(); 
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.connectDB);
  }

  connectDB(request: express.Request, response: express.Response) {
    new DBConnector().connectToDB(request, response);
  }
};
