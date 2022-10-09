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
exports.MovieResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const createMovie_input_1 = require("./dto/createMovie.input");
const updateMovie_input_1 = require("./dto/updateMovie.input");
const movie_entity_1 = require("./entites/movie.entity");
const movie_service_1 = require("./movie.service");
let MovieResolver = class MovieResolver {
    constructor(movieService) {
        this.movieService = movieService;
    }
    fetchMovies() {
        return this.movieService.findAll();
    }
    fetchMovie(movieId) {
        return this.movieService.findOne({ movieId });
    }
    createMovie(createMovieInput) {
        return this.movieService.create({ createMovieInput });
    }
    async UpdateMovie(movieId, updateMovieInput) {
        return await this.movieService.update({ movieId, updateMovieInput });
    }
};
__decorate([
    (0, graphql_1.Query)(() => [movie_entity_1.Movie]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieResolver.prototype, "fetchMovies", null);
__decorate([
    (0, graphql_1.Query)(() => movie_entity_1.Movie),
    __param(0, (0, graphql_1.Args)("movieId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieResolver.prototype, "fetchMovie", null);
__decorate([
    (0, graphql_1.Mutation)(() => movie_entity_1.Movie),
    __param(0, (0, graphql_1.Args)({ name: "createMovieInput", nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createMovie_input_1.CreateMovieInput]),
    __metadata("design:returntype", void 0)
], MovieResolver.prototype, "createMovie", null);
__decorate([
    (0, graphql_1.Mutation)(() => movie_entity_1.Movie),
    __param(0, (0, graphql_1.Args)("movieId")),
    __param(1, (0, graphql_1.Args)("updateMovieInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateMovie_input_1.UpdateMovieInput]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "UpdateMovie", null);
MovieResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieResolver);
exports.MovieResolver = MovieResolver;
//# sourceMappingURL=movie.resolver.js.map