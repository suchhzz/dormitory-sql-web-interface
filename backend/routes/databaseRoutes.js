import express from 'express';
import { getDatabaseData, getTableData } from '../controllers/databaseController.js';


const router = express.Router();

router.get('/database', getDatabaseData);
router.get('/database/:tableName', getTableData);

export default router;