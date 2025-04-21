import express from 'express';
import { insertQuery, selectQuery } from '../controllers/queryController.js';

const router = express.Router();

router.get('/insert', insertQuery);
router.get('/select', selectQuery);

export default router;
