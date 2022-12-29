"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const heater = {
    date: moment("2022-02-01 08:30:26.127Z").toDate(),
    channel: "db9",
    messages: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
    interactions: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
    emojis: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2]
};
const service_1 = require("./service");
const conn1 = service_1.databaseService.connectionFactory('testser1');
service_1.heatmapService.createHeatMap(conn1, heater);
const conn2 = service_1.databaseService.connectionFactory('testser2');
service_1.heatmapService.createHeatMap(conn2, heater);
//# sourceMappingURL=index.js.map