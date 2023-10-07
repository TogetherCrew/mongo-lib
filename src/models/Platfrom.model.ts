import { model } from 'mongoose';
import { platformSchema } from './schemas';
import { type IPlatform } from '../interfaces';

export default model<IPlatform>('Platform', platformSchema);
