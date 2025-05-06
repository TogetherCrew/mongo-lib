import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { IChannel } from '../interfaces';
import Channel from '../models/Channel.model';

export class ChannelRepository extends BaseRepository<IChannel> {
  constructor(model: Model<IChannel> = Channel) {
    super(model);
  }
}

export const channelRepository = new ChannelRepository();
export default channelRepository;
