export const config = {
    secret : "thisis123secreatto#$@#$!",
    dbPath : process.cwd() + '/database/merchant.db'
}

import { Sequelize } from "sequelize";

export const database = new Sequelize({
  database: "merchant.db",
  dialect: "sqlite",
  storage: process.cwd() + '/database/merchant.db',
});