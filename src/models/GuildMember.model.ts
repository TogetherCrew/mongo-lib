import { model } from 'mongoose';
import { guildMemberSchema } from './schemas';
import { IGuildMember } from '../interfaces/GuildMember.interface';

export default model<IGuildMember>('GuildMember', guildMemberSchema);
