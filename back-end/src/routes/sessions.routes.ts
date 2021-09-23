import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;
    const authenticateUserService = new AuthenticateUserService();
    const { user, token } = await authenticateUserService.execute({
      email,
      password
    });
    return response.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age,
        token: token
      }
    });
  } catch (err:any) {
    const { message } = err;
    return response.status(400).json({ erro: message });
  }
});

export default sessionsRouter;
