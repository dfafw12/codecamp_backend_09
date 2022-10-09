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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieImageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const createMovieImage_input_1 = require("./dto/createMovieImage.input");
const movieImage_entity_1 = require("./entities/movieImage.entity");
const movieImage_service_1 = require("./movieImage.service");
let MovieImageResolver = class MovieImageResolver {
    constructor(movieImageService) {
        this.movieImageService = movieImageService;
    }
    createMovieImage(createMovieImageInput) {
        return this.movieImageService.create({ createMovieImageInput });
    }
    deleteMovieImage(movieImageId) {
        return this.movieImageService.delete({ movieImageId });
    }
    restoreMovieImage(movieImageId) {
        return this.movieImageService.restore({
            movieImageId,
        });
    }
    fetchMovieImages() {
        return this.movieImageService.findAll();
    }
    fetchMovieImageWithDeleted() {
        return this.movieImageService.findDelete();
    }
    fetchMovieImage(movieImageId) {
        return this.movieImageService.findOne({ movieImageId });
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => movieImage_entity_1.MovieImage),
    __param(0, (0, graphql_1.Args)("createMovieImageInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createMovieImage_input_1.CreateMovieImageInput]),
    __metadata("design:returntype", void 0)
], MovieImageResolver.prototype, "createMovieImage", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)("movieImageId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieImageResolver.prototype, "deleteMovieImage", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)("movieImageId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieImageResolver.prototype, "restoreMovieImage", null);
__decorate([
    (0, graphql_1.Query)(() => [movieImage_entity_1.MovieImage]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieImageResolver.prototype, "fetchMovieImages", null);
__decorate([
    (0, graphql_1.Query)(() => [movieImage_entity_1.MovieImage]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieImageResolver.prototype, "fetchMovieImageWithDeleted", null);
__decorate([
    (0, graphql_1.Query)(() => movieImage_entity_1.MovieImage),
    __param(0, (0, graphql_1.Args)("movieImageId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieImageResolver.prototype, "fetchMovieImage", null);
MovieImageResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [movieImage_service_1.MovieImageService])
], MovieImageResolver);
exports.MovieImageResolver = MovieImageResolver;
//# sourceMappingURL=movideImage.resolver.js.map