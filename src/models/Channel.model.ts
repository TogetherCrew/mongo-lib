import { model } from 'mongoose';
import { channelSchema } from './schemas';
import { IChannel, ChannelModel } from '../interfaces/Channel.interface';

export default model<IChannel, ChannelModel>('Channel', channelSchema);
