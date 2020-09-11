import * as express from 'express';
import { Items } from '../interface/items';
import { validate_create_item } from './validator';
import { validationResult } from 'express-validator';
import { ItemModel } from '../model/item.model';
 
export class ItemData {
  private path = '/api/items';
  
  private router = express.Router();
  private itemData: Items[] = [
     { item_id: 0, 
      item_buy_price: 0.0, 
      item_name: '', 
      item_qty_remain: 0,
      item_qty_sell: 0,
      item_sell_price: 0, 
      merchant_id: 0,
      item_color: '' } 
 ];
  
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllItems );
    this.router.post(this.path, this.createItem, validate_create_item);
  }
 
  private getAllItems = (request: express.Request, response: express.Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    } else {
     const data = new ItemModel();
     data.connectToDB(request, response); 
     
    }
  }
 
  private createItem = (request: express.Request, response: express.Response) => {
    
  }
};
