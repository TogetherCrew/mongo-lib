"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plugins_1 = require("./plugins");
const guildMemberSchema = new mongoose_1.Schema({
    discordId: {
        type: String,
        unique: true,
    },
    nick: {
        type: String,
    },
    roles: [
        {
            type: String,
        },
    ],
    joined_at: {
        type: String,
    },
    avatar: {
        type: String,
    },
});
guildMemberSchema.plugin(plugins_1.toJSON);
exports.default = guildMemberSchema;
//# sourceMappingURL=GuildMember.schema.js.map