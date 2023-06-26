"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guildMemberSchema = exports.MemberActivitySchema = exports.rawInfoSchema = exports.heatMapSchema = exports.guildSchema = exports.tokenSchema = exports.userSchema = void 0;
const User_schema_1 = __importDefault(require("./User.schema"));
exports.userSchema = User_schema_1.default;
const Token_schema_1 = __importDefault(require("./Token.schema"));
exports.tokenSchema = Token_schema_1.default;
const Guild_schema_1 = __importDefault(require("./Guild.schema"));
exports.guildSchema = Guild_schema_1.default;
const HeatMap_schema_1 = __importDefault(require("./HeatMap.schema"));
exports.heatMapSchema = HeatMap_schema_1.default;
const RawInfo_schema_1 = __importDefault(require("./RawInfo.schema"));
exports.rawInfoSchema = RawInfo_schema_1.default;
const MemberActivity_schema_1 = __importDefault(require("./MemberActivity.schema"));
exports.MemberActivitySchema = MemberActivity_schema_1.default;
const GuildMember_schema_1 = __importDefault(require("./GuildMember.schema"));
exports.guildMemberSchema = GuildMember_schema_1.default;
//# sourceMappingURL=index.js.map