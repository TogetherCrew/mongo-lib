import { model } from 'mongoose';
import { userSchema } from './schemas';
import { IUserModel } from '../interfaces/User.interface';

export default model<IUserModel>('User', userSchema);

