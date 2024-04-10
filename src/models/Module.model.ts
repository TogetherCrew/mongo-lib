import { model } from 'mongoose';
import { moduleSchema } from './schemas';
import { type IModule, type ModuleModel } from '../interfaces';

export default model<IModule, ModuleModel>('Module', moduleSchema);
