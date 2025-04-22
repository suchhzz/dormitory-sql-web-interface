import express from 'express';
import { getDatabaseData } from '../controllers/homeController.js';

const router = express.Router();

router.get('/database', getDatabaseData);

export default router;