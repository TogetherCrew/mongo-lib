import { model } from 'mongoose';
import { guildSchema } from './schemas';
import { IGuild, GuildModel } from '../interfaces';

export default model<IGuild, GuildModel>('Guild', guildSchema);
