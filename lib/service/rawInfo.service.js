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
const moment = require("moment");
function createRawInfo(connection, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.models.RawInfo.create(data);
        }
        catch (e) {
            return false;
        }
    });
}
const fetchRawinfo = (connection, { selectedChannels, period }) => __awaiter(void 0, void 0, void 0, function* () {
    const model = connection.models.RawInfo;
    const channelList = selectedChannels === null || selectedChannels === void 0 ? void 0 : selectedChannels.map((item) => item.channelId);
    const today = moment().startOf('day');
    const data = yield model.find({
        channelId: {
            $in: channelList,
        },
        created_at: {
            $gte: moment(period).toDate(),
            $lte: moment(today).endOf('day').toDate()
        }
    });
    return data;
});
const checkExist = (connection, time) => __awaiter(void 0, void 0, void 0, function* () {
    const model = connection.models.RawInfo;
    const data = yield model.find({
        created_at: time
    });
    return data.length > 0;
});
const getRangeId = (connection) => __awaiter(void 0, void 0, void 0, function* () {
    const model = connection.models.RawInfo;
    const latest = yield model.findOne().sort({ 'messageId': -1 });
    const oldest = yield model.findOne().sort({ 'messageId': 1 });
    return [oldest, latest];
});
exports.default = {
    createRawInfo,
    fetchRawinfo,
    checkExist,
    getRangeId
};
//# sourceMappingURL=rawInfo.service.js.map