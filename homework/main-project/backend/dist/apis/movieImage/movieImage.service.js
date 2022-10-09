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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieImageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movie_entity_1 = require("../movies/entites/movie.entity");
const movieImage_entity_1 = require("./entities/movieImage.entity");
let MovieImageService = class MovieImageService {
    constructor(movieImageRepository, movieRepository) {
        this.movieImageRepository = movieImageRepository;
        this.movieRepository = movieRepository;
    }
    async create({ createMovieImageInput }) {
        const { movieId } = createMovieImageInput, movieImage = __rest(createMovieImageInput, ["movieId"]);
        const result = await this.movieImageRepository.save(Object.assign(Object.assign({}, movieImage), { movie: {
                id: movieId,
            } }));
        return result;
    }
    findAll() {
        return this.movieImageRepository.find({
            relations: ["movie"],
        });
    }
    findDelete() {
        return this.movieImageRepository.find({
            relations: ["movie"],
            withDeleted: true,
        });
    }
    findOne({ movieImageId }) {
        return this.movieImageRepository.findOne({
            where: { id: movieImageId },
            relations: ["movie"],
        });
    }
    async delete({ movieImageId }) {
        const result = await this.movieImageRepository.softDelete({
            id: movieImageId,
        });
        return result.affected ? true : false;
    }
    async restore({ movieImageId }) {
        const result = await this.movieImageRepository.restore({
            id: movieImageId,
        });
        return result.affected ? true : false;
    }
};
MovieImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movieImage_entity_1.MovieImage)),
    __param(1, (0, typeorm_1.InjectRepository)(movie_entity_1.Movie)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MovieImageService);
exports.MovieImageService = MovieImageService;
//# sourceMappingURL=movieImage.service.js.map