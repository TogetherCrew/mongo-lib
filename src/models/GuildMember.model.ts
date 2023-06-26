import { model } from 'mongoose';
import { guildMemberSchema } from './schemas';
import { IGuildMember } from '../interfaces';

export default model<IGuildMember>('GuildMember', guildMemberSchema);
