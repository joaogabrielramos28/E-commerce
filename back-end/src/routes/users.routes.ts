import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
const usersRouter = Router(); ;
usersRouter.get('/', ensureAuthenticated, async (request, response) => {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();
  console.log(request.user);

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
  } catch (err:any) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter
;
