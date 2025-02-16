import database from '../models/databaseModel.js';

export const getDatabaseData = (req, res) => {
    try {
        res.send(database);
    } catch (e) {
        res.send(e);
    }
}