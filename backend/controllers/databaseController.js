import database from '../models/databaseModel.js';
import { fetchTableDataByTableName } from '../services/databaseService.js';

export const getDatabaseData = (req, res) => {
    try {
        res.send(database);
    } catch (e) {
        res.send(e);
    }
};

export const getTableData = async (req, res) => {
    console.log('Request received');  // Basic sanity check
    
    try {   
        console.log('Before fetch');
        const tableData = await fetchTableDataByTableName('faculty');
        console.log('After fetch', tableData);
        
        if (!tableData || tableData.length === 0) {
            console.log('No data found');
            return res.status(404).json({ message: 'No data found' });
        }

        console.log('Sending response');
        return res.json(tableData);
        
    } catch (e) {
        console.error('Controller error:', e);  // More detailed error logging
        return res.status(500).json({ 
            error: 'Database operation failed',
            details: e.message 
        });
    }
};