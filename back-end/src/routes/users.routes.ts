import { Router } from 'express';
import { getRepository } from 'typeorm';

import multer from 'multer';
import uploadConfig from '../config/upload';

import User from '../models/User';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.get('/', ensureAuthenticated, async (request, response) => {
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
  } catch (err:any) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (request, response) => {
  const updateUserAvatar = new UpdateUserAvatarService();
  const user = await updateUserAvatar.execute({
    userId: request.user.id,
    avatarFilename: request.file?.filename
  });

  return response.json({ id: user.id, name: user.name, email: user.email, age: user.age, avatar: user.avatar });
});

export default usersRouter
;
