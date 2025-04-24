import Database from "better-sqlite3";
// import { mainDatabase } from '../models/databaseModel.js'

export const getDatabaseConnection = () => {
    return new Database('database/dormitory');
};

export const getTableDataByTableName = (tableName) => {
    const db = getDatabaseConnection();
    try {
        console.log('table name', tableName);
        return db.prepare(`SELECT * FROM ${tableName}`).all();

    } catch (e) {
        console.error('fetch table error', e);
    } finally {
        db.close();
    }
}

export const getDatabaseTableName = () => {
    const db = getDatabaseConnection();

    try {
        return db.prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';`)
            .all()
            .map(row => row.name);

    } catch (e) {
        console.error('fetch table name error', e);
    } finally {
        db.close();
    }
}