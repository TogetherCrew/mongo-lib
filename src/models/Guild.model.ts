import { model } from 'mongoose';
import { guildSchema } from './schemas';
import { IGuildModel } from '../interfaces/Guild.interface';

export default model<IGuildModel>('Guild', guildSchema);

