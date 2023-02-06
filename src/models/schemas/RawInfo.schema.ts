import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IRawInfo } from '../../interfaces/RawInfo.interface';
import mongooseUniqueValidator from 'mongoose-unique-validator';

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
    },
    channelId: {
        type: String
    },
    messageId: {
        type: String,
        unique: true
    }

});

// Plugins
rawInfoSchema.plugin(toJSON);
rawInfoSchema.plugin(mongooseUniqueValidator);

export default rawInfoSchema;
