import { model } from 'mongoose';
import { channelSchema } from './schemas';
import { IChannel, ChannelModel } from '../interfaces';

export default model<IChannel, ChannelModel>('Channel', channelSchema);
