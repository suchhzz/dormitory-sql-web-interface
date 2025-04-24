import express from 'express';
import { getDatabaseData, getTableData, getDatabaseTableNames } from '../controllers/databaseController.js';


const router = express.Router();

router.get('/', getDatabaseData);
router.get('/tables/:tableName', getTableData);
router.get('/tables', getDatabaseTableNames);

export default router;