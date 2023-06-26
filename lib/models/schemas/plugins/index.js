"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = exports.toJSON = void 0;
const toJSON_plugin_1 = __importDefault(require("./toJSON.plugin"));
exports.toJSON = toJSON_plugin_1.default;
const pagintae_plugin_1 = __importDefault(require("./pagintae.plugin"));
exports.paginate = pagintae_plugin_1.default;
//# sourceMappingURL=index.js.map