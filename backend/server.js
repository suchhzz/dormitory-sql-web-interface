import express from 'express';
import cors from 'cors';

import queryRouter from './routes/queryRoutes.js';
import homeRouter from './routes/homeRoutes.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

app.use(express.json());
app.use('/api/query', queryRouter);
app.use('/api/home', homeRouter);

app.listen(5000, '0.0.0.0', () => {
  console.log('listening 5000');
});
