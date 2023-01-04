"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemas_1 = require("./schemas");
exports.default = (0, mongoose_1.model)('HeatMap', schemas_1.heatMapSchema);
//# sourceMappingURL=HeatMap.model.js.map