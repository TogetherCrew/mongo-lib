import { type Connection } from 'mongoose';

import { type IChannel } from '../interfaces';
import { BaseRepository } from './base.repository';

export class ChannelRepository extends BaseRepository<IChannel> {
  constructor(connection: Connection) {
    super(connection.model<IChannel>('Channel'));
  }
}

export const makeChannelRepository = (connection: Connection) => new ChannelRepository(connection);
