import Database from "better-sqlite3";
// import { mainDatabase } from '../models/databaseModel.js'

export const fetchTableDataByTableName = (tableName) => {
    try {
        const db = new Database('database/dormitory');

        return db.prepare(`SELECT * FROM faculty`).all();

    } catch (e) {
        console.error(e);
    } finally {
        db.close();
    }
}