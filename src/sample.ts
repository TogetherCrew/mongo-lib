import { databaseService, heatmapService, rawInfoService } from './service';

const heatmapSample = {
    date: "2022-02-01",
    channel: "db9",
    messages: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
    interactions: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
    emojis: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2]
}
const rawInfoSample = {
    datetime: "2023-02-03",
    type: "REPLY",
    channel: "Test",
    author: "Boda#2954",
    content: "Message Here",
    user_mentions: ["Beshoy#5456", "Sortoite#2577"],
    role_mentions: ["Surrpot"],
    reactions: ["❤️"],
    replied_user: "Sortoite#2577",
    channelId: "1037490021462179915",
    messageId: "1037490021462179915",
    thread: false
}



const connection1 = databaseService.connectionFactory('guildId#1', 'mongodb://127.0.0.1:27017/RnDAO');
heatmapService.createHeatMap(connection1, heatmapSample);
rawInfoService.createRawInfo(connection1, rawInfoSample);

const connection2 = databaseService.connectionFactory('guildId#2', 'mongodb://127.0.0.1:27017/RnDAO');
heatmapService.createHeatMap(connection2, heatmapSample);
rawInfoService.createRawInfo(connection2, rawInfoSample);
