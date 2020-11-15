import { Request } from "express";

import { getRepository } from 'typeorm';
import path from 'path';
import User from '../models/User';

interface Request {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename}: Request): Promise<void>{
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if(!user){
      throw new Error("Only authenticated users can change avatar.");
    }

    if(user.avatar) {
      const userAvatarFilePath =
    }
  }
}

export default UpdateUserAvatarService;
