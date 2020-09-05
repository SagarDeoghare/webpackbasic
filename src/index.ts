import express = require('express');
import sqlite3 = require('sqlite3');
const sqliteApp = sqlite3.verbose();
let db = null;

// Create a new express app instance
const app: express.Application = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello, World!!!!');
});

app.get('/login', (req, res) => {
    db = new sqliteApp.Database('../db/merchant.db', 
                                sqlite3.OPEN_READWRITE, 
                                (error)=>{
                                    if (error) {
                                        console.log('fail to open db: ' + error);
                                    } else {
                                        res.send('Connected to db successfully...');
                                    }
                                });
});

app.post('/insert', (req, res) => {
    
});

app.get('/items', (req, res)=> {

});

app.listen(PORT, function () {
    console.log(`Server is running in http://localhost:${PORT}`);
});