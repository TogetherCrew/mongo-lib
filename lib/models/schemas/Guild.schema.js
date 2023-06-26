"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plugins_1 = require("./plugins");
const guildSchema = new mongoose_1.Schema({
    guildId: {
        type: String,
        required: true,
        unique: true,
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
                type: String,
            },
            channelName: {
                type: String,
            },
        },
    ],
    period: {
        type: Date,
    },
    connectedAt: {
        type: Date,
        default: new Date(),
    },
    isInProgress: {
        type: Boolean,
        default: true,
    },
    isDisconnected: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
    },
    window: {
        type: (Array),
        default: [7, 1],
        validate: {
            validator: function (arr) {
                return arr.length === 2;
            },
            message: 'Window must be an array with exactly 2 numbers',
        },
    },
    action: {
        type: (Array),
        default: [1, 1, 1, 4, 3, 5, 5, 4, 3, 3, 2],
        validate: {
            validator: function (arr) {
                return arr.length === 11;
            },
            message: 'Action must be an array with exactly 11 numbers',
        },
    },
});
guildSchema.plugin(plugins_1.toJSON);
guildSchema.plugin(plugins_1.paginate);
exports.default = guildSchema;
//# sourceMappingURL=Guild.schema.js.map