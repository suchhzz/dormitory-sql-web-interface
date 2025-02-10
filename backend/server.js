import express from 'express';
import router from './routes/userRoutes';  // Убедитесь, что путь правильный

const app = express();
app.use(express.json());

app.use('/api', router);

app.listen(8080, () => {
  console.log('Сервер запущен на http://localhost:8080');
});
