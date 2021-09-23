import { getRepository } from 'typeorm';
import User from '../models/User';
import { hash } from 'bcryptjs';

interface Request{
    email:string;
    password:string;
    age:Number;
    name:string;
}
class CreateUserService {
  public async execute ({ email, password, age, name }:Request):Promise<User> {
    const userRepository = getRepository(User);

    const checkEmailExists = await userRepository.findOne({
      where: { email }
    });

    if (checkEmailExists) {
      throw new Error('Email address already exists');
    }

    password = await hash(password, 10);
    const user = userRepository.create({
      email,
      password,
      age,
      name
    });

    userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
