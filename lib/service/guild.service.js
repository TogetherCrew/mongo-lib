"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const fetchGuild = (guildId) => __awaiter(void 0, void 0, void 0, function* () {
    const config = { isDisconnected: false };
    if (guildId !== null) {
        config.guildId = guildId;
    }
    const data = yield models_1.Guild.find(config);
    return data;
});
function updateGuildByGuildId(guildId, updateBody) {
    return __awaiter(this, void 0, void 0, function* () {
        const guild = yield models_1.Guild.findOne({ guildId });
        if (!guild) {
            throw new Error('Guild not found');
        }
        Object.assign(guild, updateBody);
        yield guild.save();
        return guild;
    });
}
exports.default = {
    fetchGuild,
    updateGuildByGuildId
};
//# sourceMappingURL=guild.service.js.map