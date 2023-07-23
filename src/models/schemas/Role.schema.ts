import { Schema } from 'mongoose';
import { toJSON } from './plugins';
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
    default: null
  }

});

roleSchema.method('softDelete', function softDelete() {
  this.deletedAt = Date.now();
  this.save();
});

// Plugins
roleSchema.plugin(toJSON);

export default roleSchema;
