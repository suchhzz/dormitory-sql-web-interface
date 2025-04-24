import express from 'express';
import cors from 'cors';

import queryRouter from './routes/queryRoutes.js';
import databaseRouter from './routes/databaseRoutes.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
}));
app.use(express.json());

app.use('/api/query', queryRouter);
app.use('/api/database', databaseRouter);

app.listen(8080, '0.0.0.0', () => {
  console.log('listening 8080');
});
