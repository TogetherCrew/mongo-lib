import { type Connection } from 'mongoose';

import { type IGuildMember } from '../interfaces';
import { BaseRepository } from './base.repository';

export class GuildMemberRepository extends BaseRepository<IGuildMember> {
  constructor(connection: Connection) {
    super(connection.model<IGuildMember>('GuildMember'));
  }
}

export const makeGuildMemberRepository = (connection: Connection) => new GuildMemberRepository(connection);
