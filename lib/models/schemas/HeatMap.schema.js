"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plugins_1 = require("./plugins");
const heatMapSchema = new mongoose_1.Schema({
    date: {
        type: String
    },
    channel: {
        type: String
    },
    messages: [{
            type: Number
        }],
    interactions: [{
            type: Number
        }],
    emojis: [{
            type: Number
        }]
});
heatMapSchema.plugin(plugins_1.toJSON);
exports.default = heatMapSchema;
//# sourceMappingURL=HeatMap.schema.js.map