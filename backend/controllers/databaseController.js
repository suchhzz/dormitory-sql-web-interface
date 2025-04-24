import database from '../models/databaseModel.js';
import { getTableDataByTableName, getDatabaseTableName } from '../services/databaseService.js';

export const getDatabaseData = (req, res) => {
    try {
        res.send(database);
    } catch (e) {
        res.send(e);
    }
};

export const getTableData = async (req, res) => {
    try {
        const { tableName } = req.params;

        const tableData = await getTableDataByTableName(tableName);
        return res.json(tableData);

    } catch (e) {
        console.error('Controller error:', e);
        return res.status(500).json({
            error: 'Database operation failed',
            details: e.message
        });
    }
};

export const getDatabaseTableNames = async (_, res) => {
    try {
        const tableNames = await getDatabaseTableName();

        return res.json(tableNames);
    } catch (e) {
        return res.status(404);
    }
}