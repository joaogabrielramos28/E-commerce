import express from 'express';
import routes from './routes/index';
import './database';
const app = express();
app.use(routes);
app.use(express.json());
app.listen((3000), () => {
  console.log('Application run on port 3000 🧨🎇🎆');
});
