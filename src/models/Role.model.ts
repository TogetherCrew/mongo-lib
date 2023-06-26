import { model } from 'mongoose';
import { roleSchema } from './schemas';
import { type IRole, type RoleModel } from '../interfaces';

export default model<IRole, RoleModel>('Role', roleSchema);
