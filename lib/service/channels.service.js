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
const createChannel = (connection, data) => __awaiter(void 0, void 0, void 0, function* () {
    const Channels = connection.models.Channels;
    const now = new Date();
    const dataWithTimestamp = Object.assign(Object.assign({}, data), { last_update: now });
    return yield Channels.create(dataWithTimestamp);
});
const updateChannel = (connection, channelId, channel) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Channels = connection.models.Channels;
        yield Channels.updateOne({ channelId: channelId }, {
            $set: { channel: channel },
            $currentDate: { last_update: true },
            $setOnInsert: { channelId: channelId }
        }, { upsert: true });
    }
    catch (e) {
        console.log(e);
    }
});
exports.default = {
    createChannel,
    updateChannel
};
//# sourceMappingURL=channels.service.js.map