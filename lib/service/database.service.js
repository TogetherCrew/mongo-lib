"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemas_1 = require("../models/schemas/");
function connectionFactory(guildId, dbURI) {
    const connection = mongoose_1.default.createConnection(dbURI, { dbName: guildId });
    connection.model('HeatMap', schemas_1.heatMapSchema);
    connection.model('RawInfo', schemas_1.rawInfoSchema);
    connection.model('MemberActivity', schemas_1.MemberActivitySchema);
    connection.model('GuildMember', schemas_1.guildMemberSchema);
    return connection;
}
exports.default = {
    connectionFactory,
};
//# sourceMappingURL=database.service.js.map