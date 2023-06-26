"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plugins_1 = require("./plugins");
const heatMapSchema = new mongoose_1.Schema({
    date: {
        type: String,
    },
    thr_messages: [
        {
            type: Number,
        },
    ],
    lone_messages: [
        {
            type: Number,
        },
    ],
    replier: [
        {
            type: Number,
        },
    ],
    replied_per_acc: [
        {
            account: {
                type: String,
            },
            count: {
                type: Number,
            },
        },
    ],
    replied: [
        {
            type: Number,
        },
    ],
    mentioner: [
        {
            type: Number,
        },
    ],
    mentioner_per_acc: [
        {
            account: {
                type: String,
            },
            count: {
                type: Number,
            },
        },
    ],
    mentioned: [
        {
            type: Number,
        },
    ],
    reacter: [
        {
            type: Number,
        },
    ],
    reacted_per_acc: [
        {
            account: {
                type: String,
            },
            count: {
                type: Number,
            },
        },
    ],
    reacted: [
        {
            type: Number,
        },
    ],
    channelId: {
        type: String,
    },
    account_name: String,
});
heatMapSchema.plugin(plugins_1.toJSON);
exports.default = heatMapSchema;
//# sourceMappingURL=HeatMap.schema.js.map