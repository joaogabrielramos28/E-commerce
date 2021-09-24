import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import routes from './routes/index';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';
import './database';
const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err:Error, request:Request, response:Response, next:NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'internal server error'
  });
});
app.listen((3000), () => {
  console.log('Application run on port 3000 🧨🎇🎆');
});
