import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import User from '../models/User';
import { sign } from 'jsonwebtoken';
interface Request{
    email:string,
    password:string
}

interface Response{
    user:User,
    token:string
}

class AuthenticateUserService {
  public async execute ({ email, password }:Request):Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: { email }
    });

    if (!user) {
      throw new Error('Incorret email/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorret email/password combination');
    }

    const token = sign({}, '5f25a82a4222cc311fc0851165ac48cd', {
      expiresIn: '1d',
      subject: user.id
    });

    return {
      user,
      token
    };
  }
}

export default AuthenticateUserService
;
