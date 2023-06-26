"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function paginate(schema) {
    schema.statics.paginate = function (filter, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let { limit, page, skip } = options;
            const { sortBy } = options;
            limit = limit && parseInt(limit, 10) > 0 ? parseInt(limit, 10) : 10;
            page = page && parseInt(page, 10) > 0 ? parseInt(page, 10) : 1;
            skip = (page - 1) * limit;
            let sort = '';
            if (sortBy) {
                const sortingCriteria = [];
                sortBy.split(',').forEach((sortOption) => {
                    const [key, value] = sortOption.split(':');
                    sortingCriteria.push((value === 'desc' ? '-' : '') + key);
                });
                sort = sortingCriteria.join(' ');
            }
            else {
                sort = '-createdAt';
            }
            const countPromise = this.countDocuments(filter).exec();
            let docsPromise = this.find(filter).sort(sort).skip(skip).limit(limit);
            docsPromise = docsPromise.exec();
            return Promise.all([countPromise, docsPromise]).then((values) => {
                const [totalResults, results] = values;
                const totalPages = Math.ceil(totalResults / limit);
                const result = {
                    results,
                    page,
                    limit,
                    totalPages,
                    totalResults,
                };
                return Promise.resolve(result);
            });
        });
    };
}
exports.default = paginate;
//# sourceMappingURL=pagintae.plugin.js.map