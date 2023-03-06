import { model } from 'mongoose';
import { channelSchema } from './schemas';
import { IChannels } from '../interfaces/Channels.interface';

export default model<IChannels>('Channels', channelSchema);

