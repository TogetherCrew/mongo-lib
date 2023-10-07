import { model } from 'mongoose';
import { communitySchema } from './schemas';
import { type ICommunity } from '../interfaces';

export default model<ICommunity>('Community', communitySchema);
