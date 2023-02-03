import { model } from 'mongoose';
import { tokenSchema } from './schemas';
import { IToken } from '../interfaces/Token.interface';

export default model<IToken>('Token', tokenSchema);

