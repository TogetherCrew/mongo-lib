import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IRole, RoleModel } from '../../interfaces';

const roleSchema = new Schema<IRole, RoleModel>({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    color: {
        type: Number,
    }
});

// Plugins
roleSchema.plugin(toJSON);

export default roleSchema;
