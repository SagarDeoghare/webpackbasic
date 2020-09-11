import { Items } from '../interface/items';
import { DBConnector } from './dbconnector';

export class ItemModel extends DBConnector {
    
    constructor() {
        super();
        
    }

    getItems() {
        let sql = `SELECT * FROM ITEMS`;
        console.log('Calling for data');
        this.getDB().each(sql, [], (err: any, row: any) => {
            if (err) {
                console.log('inside error');
                throw err;
              }
              console.log('got result');
              console.log(row);
            return row;
        })
    }
}