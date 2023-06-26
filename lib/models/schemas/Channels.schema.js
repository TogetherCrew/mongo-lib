"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plugins_1 = require("./plugins");
const channelsSchema = new mongoose_1.Schema({
    channel: {
        type: String,
    },
    channelId: {
        type: String
    },
    last_update: {
        type: Date
    }
});
channelsSchema.plugin(plugins_1.toJSON);
exports.default = channelsSchema;
//# sourceMappingURL=Channels.schema.js.map