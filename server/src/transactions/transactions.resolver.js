"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TransactionsResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var hash_entity_1 = require("../entities/hash.entity");
var TransactionsResolver = /** @class */ (function () {
    function TransactionsResolver(transantionsService) {
        this.transantionsService = transantionsService;
    }
    TransactionsResolver.prototype.createHash = function (createHashInput) {
        return this.transantionsService.create(createHashInput);
    };
    __decorate([
        (0, graphql_1.Mutation)(function () { return hash_entity_1.Hash; }),
        __param(0, (0, graphql_1.Args)('createHash'))
    ], TransactionsResolver.prototype, "createHash");
    TransactionsResolver = __decorate([
        (0, graphql_1.Resolver)(function () { return hash_entity_1.Hash; })
    ], TransactionsResolver);
    return TransactionsResolver;
}());
exports.TransactionsResolver = TransactionsResolver;
