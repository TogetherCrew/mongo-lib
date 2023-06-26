import { model } from 'mongoose';
import { guildSchema } from './schemas';
import { type IGuild, type GuildModel } from '../interfaces';

export default model<IGuild, GuildModel>('Guild', guildSchema);
