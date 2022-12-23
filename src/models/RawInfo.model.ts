import { Schema, model } from 'mongoose';
import { toJSON } from './plugins';
import { IRawInfo, IRawInfoModel } from '../interfaces/RawInfo.interface';

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
    Replied_User: {
        type: String
    },
    Reference_Message: {
        type: Number
    }

});

// Plugins
rawInfoSchema.plugin(toJSON);

export default model<IRawInfoModel>('RawInfo', rawInfoSchema);