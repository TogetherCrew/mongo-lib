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
    user_mentions: [{
        type: String
    }],
    role_mentions: [{
        type: String
    }],
    reactions: [{
        type: String
    }],
    replied_user: {
        type: String
    },
    datetime: {
        type: String
    },
    channelId: {
        type: String
    },
    messageId: {
        type: String,
        unique: true
    },
    thread: {
        type: Boolean
    }

});

// Plugins
rawInfoSchema.plugin(toJSON);
rawInfoSchema.plugin(mongooseUniqueValidator);

export default rawInfoSchema;
