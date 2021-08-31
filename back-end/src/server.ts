import express from 'express';
import routes from './routes/index';

const app = express();
app.use(routes);

app.listen((3000), () => {
  console.log('Application run on port 3000 🧨🎇🎆');
});
