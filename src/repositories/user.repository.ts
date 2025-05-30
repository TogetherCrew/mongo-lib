import { type Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { type IUser } from '../interfaces';
import User from '../models/User.model';

export class UserRepository extends BaseRepository<IUser> {
  constructor(model: Model<IUser> = User) {
    super(model);
  }
}

export const userRepository = new UserRepository();
