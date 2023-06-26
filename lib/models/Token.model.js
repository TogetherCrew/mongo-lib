"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemas_1 = require("./schemas");
exports.default = (0, mongoose_1.model)('Token', schemas_1.tokenSchema);
//# sourceMappingURL=Token.model.js.map