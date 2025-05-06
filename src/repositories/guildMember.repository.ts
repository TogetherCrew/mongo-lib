import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { IGuildMember } from '../interfaces';
import GuildMember from '../models/GuildMember.model';

export class GuildMemberRepository extends BaseRepository<IGuildMember> {
  constructor(model: Model<IGuildMember> = GuildMember) {
    super(model);
  }
}

export const guildMemberRepository = new GuildMemberRepository();
export default guildMemberRepository;
