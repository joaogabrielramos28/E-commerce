import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import CreateUserService from '../services/CreateUserService';
const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();

  return response.status(200).json(users);
});

usersRouter.post('/', async (request, response) => {
  try {
    const { email, name, password, age } = request.body;
    const createUser = new CreateUserService();

    const user = await createUser.execute({
      email,
      password,
      age,
      name
    });
    return response.json({ email: user.email, name: user.name, age: user.age });
  } catch (err) {
    response.status(400).json({ error: err });
  }
});

export default usersRouter
;
