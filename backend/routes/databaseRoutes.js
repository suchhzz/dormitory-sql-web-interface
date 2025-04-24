import express from 'express';
import { getDatabaseData, getTableData, getDatabaseTableNames } from '../controllers/databaseController.js';


const router = express.Router();

router.get('/database', getDatabaseData);
router.get('/database/tables/:tableName', getTableData);
router.get('/database/tables', getDatabaseTableNames);

export default router;