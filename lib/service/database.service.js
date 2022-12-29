"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemas_1 = require("../models/schemas");
const config_1 = __importDefault(require("../config"));
function connectionFactory(guildId) {
    const connection = mongoose_1.default.createConnection(config_1.default.mongoose.url, { dbName: guildId });
    connection.model('HeatMap', schemas_1.heatMapSchema);
    connection.model('RawInfo', schemas_1.rawInfoSchema);
    return connection;
}
exports.default = {
    connectionFactory
};
//# sourceMappingURL=database.service.js.map