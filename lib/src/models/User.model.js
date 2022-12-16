"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const plugins_1 = require("./plugins");
const userSchema = new mongoose_1.Schema({
    discordId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator_1.default.isEmail(value))
                throw new Error('Email Address is not valid');
        },
        unique: true
    },
    verified: {
        type: Boolean,
    },
    avatar: {
        type: String
    }
}, { timestamps: true });
userSchema.plugin(plugins_1.toJSON);
exports.default = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=User.model.js.map