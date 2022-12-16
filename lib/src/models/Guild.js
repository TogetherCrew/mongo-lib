"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plugins_1 = require("./plugins");
const guildSchema = new mongoose_1.Schema({
    guildId: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: String,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
    },
    selectedChannels: [
        {
            channelId: {
                type: String
            },
            channelName: {
                type: String
            },
        }
    ],
    period: {
        type: Date
    }
});
guildSchema.plugin(plugins_1.toJSON);
exports.default = (0, mongoose_1.model)('Guild', guildSchema);
//# sourceMappingURL=Guild.js.map