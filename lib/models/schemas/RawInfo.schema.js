"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plugins_1 = require("./plugins");
const rawInfoSchema = new mongoose_1.Schema({
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
    }
});
rawInfoSchema.plugin(plugins_1.toJSON);
exports.default = rawInfoSchema;
//# sourceMappingURL=RawInfo.schema.js.map