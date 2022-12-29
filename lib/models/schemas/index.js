"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawInfoSchema = exports.heatMapSchema = exports.guildSchema = exports.tokenSchema = exports.userSchema = void 0;
const user_schema_1 = __importDefault(require("./user.schema"));
exports.userSchema = user_schema_1.default;
const token_schema_1 = __importDefault(require("./token.schema"));
exports.tokenSchema = token_schema_1.default;
const Guild_schema_1 = __importDefault(require("./Guild.schema"));
exports.guildSchema = Guild_schema_1.default;
const HeatMap_schema_1 = __importDefault(require("./HeatMap.schema"));
exports.heatMapSchema = HeatMap_schema_1.default;
const RawInfo_schema_1 = __importDefault(require("./RawInfo.schema"));
exports.rawInfoSchema = RawInfo_schema_1.default;
//# sourceMappingURL=index.js.map