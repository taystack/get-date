"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize = void 0;
var pluralize = function (count, singular) {
    return count + " " + singular + (count === 1 ? '' : 's');
};
exports.pluralize = pluralize;
