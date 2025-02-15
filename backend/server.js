import express from 'express';
import queryRouter from './routes/queryRoutes.js';
import homeRouter from './routes/homeRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/query', queryRouter);
app.use('/api/home', homeRouter);

app.listen(8080, () => {
  console.log('deployed on http://localhost:8080');
});
