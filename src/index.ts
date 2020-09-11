 import { Server } from './controller/the_app';
 import { Login } from './controller/login';
 import { ItemData } from './controller/items';


const theApp = Server.getServerInstance([
    new Login(),
    new ItemData()
  ]);

theApp.start();