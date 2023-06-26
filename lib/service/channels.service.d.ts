import { Connection } from 'mongoose';
import { IChannels } from '../interfaces/Channels.interface';
declare const _default: {
    createChannel: (connection: Connection, data: IChannels) => Promise<any>;
    updateChannel: (connection: Connection, channelId: string, channel: string) => Promise<void>;
};
export default _default;
