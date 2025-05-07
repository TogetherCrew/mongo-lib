import { type Connection } from 'mongoose';

import { type IMemberActivity } from '../interfaces';
import { BaseRepository } from './base.repository';

export class MemberActivityRepository extends BaseRepository<IMemberActivity> {
  constructor(connection: Connection) {
    super(connection.model<IMemberActivity>('MemberActivity'));
  }
}

export const makeMemberActivityRepository = (connection: Connection) => new MemberActivityRepository(connection);
