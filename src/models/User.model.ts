import { model } from 'mongoose';
import { userSchema } from './schemas';
import { IUser } from '../interfaces';

export default model<IUser>('User', userSchema);
