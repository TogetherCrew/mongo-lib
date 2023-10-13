import { model } from 'mongoose';
import { communitySchema } from './schemas';
import { type ICommunity, type CommunityModel } from '../interfaces';

export default model<ICommunity, CommunityModel>('Community', communitySchema);
