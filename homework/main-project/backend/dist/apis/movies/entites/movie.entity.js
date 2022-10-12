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
exports.Movie = void 0;
const graphql_1 = require("@nestjs/graphql");
const movieTheater_entity_1 = require("../../moveTheater/entities/movieTheater.entity");
const movieGenre_entity_1 = require("../../movieGenre/entities/movieGenre.entity");
const movieImage_entity_1 = require("../../movieImage/entities/movieImage.entity");
const typeorm_1 = require("typeorm");
let Movie = class Movie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Movie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Movie.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Movie.prototype, "open", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Movie.prototype, "isIng", void 0);
__decorate([
    (0, graphql_1.Field)(() => [movieImage_entity_1.MovieImage]),
    __metadata("design:type", Array)
], Movie.prototype, "files", void 0);
__decorate([
    (0, typeorm_1.JoinTable)(),
    (0, typeorm_1.ManyToMany)(() => movieGenre_entity_1.MovieGenre, (movieGenres) => movieGenres.movie),
    (0, graphql_1.Field)(() => [movieGenre_entity_1.MovieGenre]),
    __metadata("design:type", Array)
], Movie.prototype, "movieGenres", void 0);
__decorate([
    (0, typeorm_1.JoinTable)(),
    (0, typeorm_1.ManyToMany)(() => movieTheater_entity_1.MovieTheater, (MovieTheater) => MovieTheater.movie),
    __metadata("design:type", Array)
], Movie.prototype, "movieTheaters", void 0);
Movie = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movie.entity.js.map