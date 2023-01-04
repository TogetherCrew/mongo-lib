import moment = require("moment");
import { databaseService, heatmapService, rawInfoService } from './service';

const heatmapSample = {
    date: moment("2022-02-01 08:30:26.127Z").toDate(),
    channel: "db9",
    messages: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
    interactions: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
    emojis: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2]
}
const rawInfoSample = {
    type: "REPLY",
    author: "Boda#2954",
    content: "Message Here",
    user_Mentions: ["Beshoy#5456", "Sortoite#2577"],
    roles_Mentions: ["Surrpot"],
    reactions: ["❤️"],
    replied_User: "Sortoite#2577",
    reference_Message: 1050119122215780352
}



const connection1 = databaseService.connectionFactory('guildId#1', 'mongodb://127.0.0.1:27017/RnDAO');
heatmapService.createHeatMap(connection1, heatmapSample);
rawInfoService.createRawInfo(connection1, rawInfoSample);

const connection2 = databaseService.connectionFactory('guildId#2', 'mongodb://127.0.0.1:27017/RnDAO');
heatmapService.createHeatMap(connection2, heatmapSample);
rawInfoService.createRawInfo(connection2, rawInfoSample);
