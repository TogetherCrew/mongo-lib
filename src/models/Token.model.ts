import { model } from 'mongoose';
import { tokenSchema } from './schemas';
import { ITokenModel } from '../interfaces/Token.interface';

export default model<ITokenModel>('Token', tokenSchema);

