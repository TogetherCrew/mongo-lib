import { model } from 'mongoose';
import { userSchema } from './schemas';
import { type IUser } from '../interfaces';

export default model<IUser>('User', userSchema);
