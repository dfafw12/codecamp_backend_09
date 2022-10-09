"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieImageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movie_entity_1 = require("../movies/entites/movie.entity");
const movieImage_entity_1 = require("./entities/movieImage.entity");
const movideImage_resolver_1 = require("./movideImage.resolver");
const movieImage_service_1 = require("./movieImage.service");
let MovieImageModule = class MovieImageModule {
};
MovieImageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([movieImage_entity_1.MovieImage, movie_entity_1.Movie])],
        providers: [
            movideImage_resolver_1.MovieImageResolver,
            movieImage_service_1.MovieImageService,
        ],
    })
], MovieImageModule);
exports.MovieImageModule = MovieImageModule;
//# sourceMappingURL=movieImage.module.js.map