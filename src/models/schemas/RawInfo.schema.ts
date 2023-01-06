import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IRawInfo } from '../../interfaces/RawInfo.interface';

const rawInfoSchema = new Schema<IRawInfo>({
    type: {
        type: String
    },
    author: {
        type: String
    },
    content: {
        type: String
    },
    user_Mentions: [{
        type: String
    }],
    roles_Mentions: [{
        type: String
    }],
    reactions: [{
        type: String
    }],
    replied_User: {
        type: String
    },
    reference_Message: {
        type: Number
    },
    created_at: {
        type: Date
    }

});

// Plugins
rawInfoSchema.plugin(toJSON);

export default rawInfoSchema;
