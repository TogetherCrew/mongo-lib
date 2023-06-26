"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plugins_1 = require("./plugins");
const MemberActivitySchema = new mongoose_1.Schema({
    date: {
        type: Date,
    },
    all_active: [{
            type: String
        }],
    all_consistent: [{
            type: String
        }],
    all_vital: [{
            type: String
        }],
    all_connected: [{
            type: String
        }],
    all_paused: [{
            type: String
        }],
    all_new_disengaged: [{
            type: String
        }],
    all_disengaged: [{
            type: String
        }],
    all_unpaused: [{
            type: String
        }],
    all_returned: [{
            type: String
        }],
    all_new_active: [{
            type: String
        }],
    all_still_active: [{
            type: String
        }],
    all_dropped: [{
            type: String
        }],
    all_joined: [{
            type: String
        }],
    all_disengaged_were_newly_active: [{
            type: String
        }],
    all_disengaged_were_consistenly_active: [{
            type: String
        }],
    all_disengaged_were_vital: [{
            type: String
        }],
});
MemberActivitySchema.plugin(plugins_1.toJSON);
MemberActivitySchema.plugin(plugins_1.paginate);
exports.default = MemberActivitySchema;
//# sourceMappingURL=MemberActivity.schema.js.map