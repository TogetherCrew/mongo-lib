import { model } from 'mongoose';
import { userSchema } from './schemas';
import { type IUser, type UserModel } from '../interfaces';

export default model<IUser, UserModel>('User', userSchema);
