import { Model } from 'mongoose';

export interface IChannels {
  channel: string;
  channelId: string;
  last_update: Date;
}

export interface ChannelsModel extends Model<IChannels> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paginate(filter: object, options: object): any;
}
