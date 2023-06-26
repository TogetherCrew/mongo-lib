import { model } from 'mongoose';
import { tokenSchema } from './schemas';
import { IToken } from '../interfaces';

export default model<IToken>('Token', tokenSchema);
