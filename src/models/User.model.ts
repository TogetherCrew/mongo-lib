import { model } from 'mongoose';
import { userSchema } from './schemas';
import { IUser } from '../interfaces/User.interface';

export default model<IUser>('User', userSchema);

