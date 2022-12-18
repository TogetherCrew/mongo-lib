"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plugins_1 = require("./plugins");
const tokens_1 = require("../config/tokens");
const tokenSchema = new mongoose_1.Schema({
    token: {
        type: String,
        required: true,
        index: true,
    },
    user: {
        type: String,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: Object.values(tokens_1.tokenTypes),
        required: true,
    },
    expires: {
        type: Date,
        required: true,
    },
    blacklisted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
tokenSchema.plugin(plugins_1.toJSON);
exports.default = (0, mongoose_1.model)('Token', tokenSchema);
//# sourceMappingURL=Token.model.js.map