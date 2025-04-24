import express from 'express';
import { insertQuery, selectQuery, updateQuery, deleteQuery } from '../controllers/queryController.js';

const router = express.Router();

router.post('/select', selectQuery);
router.post('/insert', insertQuery);
router.patch('/update', updateQuery);
router.post('/delete', deleteQuery);

export default router;
