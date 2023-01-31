import { model } from 'mongoose';
import { guildSchema } from './schemas';
import { IGuild, GuildModel } from '../interfaces/Guild.interface';

export default model<IGuild, GuildModel>('Guild', guildSchema);

