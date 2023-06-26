import { model } from 'mongoose';
import { roleSchema } from './schemas';
import { IRole, RoleModel } from '../interfaces';

export default model<IRole, RoleModel>('Role', roleSchema);
