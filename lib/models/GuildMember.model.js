"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemas_1 = require("./schemas");
exports.default = (0, mongoose_1.model)('GuildMember', schemas_1.guildMemberSchema);
//# sourceMappingURL=GuildMember.model.js.map