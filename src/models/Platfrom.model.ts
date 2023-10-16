import { model } from 'mongoose';
import { platformSchema } from './schemas';
import { type IPlatform, type PlatformModel } from '../interfaces';

export default model<IPlatform, PlatformModel>('Platform', platformSchema);
