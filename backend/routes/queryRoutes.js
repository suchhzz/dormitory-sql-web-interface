import express from 'express';
import { insertQuery, selectQuery, updateQuery, deleteQuery } from '../controllers/queryController.js';

const router = express.Router();

router.get('/insert', insertQuery);
router.get('/select', selectQuery);
router.patch('/update', updateQuery);
router.delete('/delete', deleteQuery);

export default router;
