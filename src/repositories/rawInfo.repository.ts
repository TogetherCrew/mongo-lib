import { type Connection } from 'mongoose';

import { type IRawInfo } from '../interfaces';
import { BaseRepository } from './base.repository';

export class RawInfoRepository extends BaseRepository<IRawInfo> {
  constructor(connection: Connection) {
    super(connection.model<IRawInfo>('RawInfo'));
  }
}

export const makeRawInfoRepository = (connection: Connection) => new RawInfoRepository(connection);
