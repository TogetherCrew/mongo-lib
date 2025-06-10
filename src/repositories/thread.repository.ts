import { Connection } from 'mongoose';

import { IThread } from '../interfaces';
import { BaseRepository } from './base.repository';

export class ThreadRepository extends BaseRepository<IThread> {
  constructor(connection: Connection) {
    super(connection.model<IThread>('Thread'));
  }
}

export const makeThreadRepository = (connection: Connection) => new ThreadRepository(connection);
