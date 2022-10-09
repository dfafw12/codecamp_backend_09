"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieUser = exports.MOVIE_USER_ISPAYMENT_ENUM = void 0;
const graphql_1 = require("@nestjs/graphql");
const movie_entity_1 = require("../../movies/entites/movie.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
var MOVIE_USER_ISPAYMENT_ENUM;
(function (MOVIE_USER_ISPAYMENT_ENUM) {
    MOVIE_USER_ISPAYMENT_ENUM["PAYMENT"] = "PAYMENT";
    MOVIE_USER_ISPAYMENT_ENUM["CANCEL"] = "CANCEL";
})(MOVIE_USER_ISPAYMENT_ENUM = exports.MOVIE_USER_ISPAYMENT_ENUM || (exports.MOVIE_USER_ISPAYMENT_ENUM = {}));
(0, graphql_1.registerEnumType)(MOVIE_USER_ISPAYMENT_ENUM, {
    name: "MOVIE_USER_ISPAYMENT_ENUM",
});
let MovieUser = class MovieUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], MovieUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], MovieUser.prototype, "impUid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: MOVIE_USER_ISPAYMENT_ENUM }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], MovieUser.prototype, "isPayment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], MovieUser.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => movie_entity_1.Movie),
    (0, graphql_1.Field)(() => movie_entity_1.Movie),
    __metadata("design:type", movie_entity_1.Movie)
], MovieUser.prototype, "movie", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], MovieUser.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], MovieUser.prototype, "createAt", void 0);
MovieUser = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], MovieUser);
exports.MovieUser = MovieUser;
//# sourceMappingURL=movieUser.entity.js.map