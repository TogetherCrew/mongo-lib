"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plugins_1 = require("./plugins");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const rawInfoSchema = new mongoose_1.Schema({
    type: {
        type: String,
    },
    author: {
        type: String,
    },
    content: {
        type: String,
    },
    user_mentions: [
        {
            type: String,
        },
    ],
    role_mentions: [
        {
            type: String,
        },
    ],
    reactions: [
        {
            type: String,
        },
    ],
    replied_user: {
        type: String,
    },
    datetime: {
        type: String,
    },
    channelId: {
        type: String,
    },
    messageId: {
        type: String,
        unique: true,
    },
    threadId: {
        type: String,
    },
    thread: {
        type: String,
    },
});
rawInfoSchema.plugin(plugins_1.toJSON);
rawInfoSchema.plugin(mongoose_unique_validator_1.default);
exports.default = rawInfoSchema;
//# sourceMappingURL=RawInfo.schema.js.map