"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movieGenre_entity_1 = require("../movieGenre/entities/movieGenre.entity");
const movie_entity_1 = require("./entites/movie.entity");
const movie_resolver_1 = require("./movie.resolver");
const movie_service_1 = require("./movie.service");
let MovieModule = class MovieModule {
};
MovieModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                movie_entity_1.Movie,
                movieGenre_entity_1.MovieGenre,
            ]),
        ],
        providers: [
            movie_resolver_1.MovieResolver,
            movie_service_1.MovieService,
        ],
    })
], MovieModule);
exports.MovieModule = MovieModule;
//# sourceMappingURL=movie.module.js.map