import { model } from 'mongoose';
import { channelSchema } from './schemas';
import { type IChannel, type ChannelModel } from '../interfaces';

export default model<IChannel, ChannelModel>('Channel', channelSchema);
