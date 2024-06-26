import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type IRole, type RoleModel } from '../../interfaces';

const roleSchema = new Schema<IRole, RoleModel>({
  roleId: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  color: {
    type: Number,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

roleSchema.method('softDelete', async function softDelete() {
  this.deletedAt = new Date();
  await this.save();
});

// Plugins
roleSchema.plugin(toJSON);
roleSchema.plugin(paginate);

export default roleSchema;
