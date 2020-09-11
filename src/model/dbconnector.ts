import sqlite3 = require('sqlite3');
import * as express from 'express';
import { config } from '../../configuration/config';

export class DBConnector {
    private db: any;
    private sqliteApp: any;

    constructor() {
        this.sqliteApp = sqlite3.verbose();
    }

    connectToDB(request: express.Request, response: express.Response)  {
        this.db = new this.sqliteApp.Database(config.dbPath, 
            sqlite3.OPEN_READWRITE, 
            (error: any) => {
                if (error) {
                    console.log('fail to open db: ' + error);
                } else {
                    console.log("connected sucessfully..." + config.dbPath);
                    let sql = `SELECT * FROM items`;
                    console.log('Calling for data');
                    this.db.all(sql, [], (err: any, rows: any) => {
                        if (err) {
                            console.log('inside error');
                            throw err;
                        }
                        console.log('got result');
                        console.log(rows);
                        response.send(rows);
                    })
                }
            });
    }

    getDB() {
        return this.db;
    }

    closeDB() {

    }
    
}