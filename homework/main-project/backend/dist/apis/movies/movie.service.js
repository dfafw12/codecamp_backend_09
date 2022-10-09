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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movieGenre_entity_1 = require("../movieGenre/entities/movieGenre.entity");
const movie_entity_1 = require("./entites/movie.entity");
let MovieService = class MovieService {
    constructor(movieRepository, movieGenreRepository) {
        this.movieRepository = movieRepository;
        this.movieGenreRepository = movieGenreRepository;
    }
    async create({ createMovieInput }) {
        const { movieGenres } = createMovieInput, movie = __rest(createMovieInput, ["movieGenres"]);
        const temp = [];
        console.log(movieGenres, ":movieGenre");
        for (let i = 0; i < movieGenres.length; i++) {
            const genreName = movieGenres[i];
            const prevGenre = await this.movieGenreRepository.findOne({
                where: { name: genreName },
            });
            if (prevGenre) {
                temp.push(prevGenre);
            }
            else {
                const newGenre = await this.movieGenreRepository.save({
                    name: genreName,
                });
                temp.push(newGenre);
            }
        }
        const result = await this.movieRepository.save(Object.assign({ movieGenres: temp }, movie));
        return result;
    }
    findOne({ movieId }) {
        return this.movieRepository.findOne({
            where: { id: movieId },
            relations: ["movieGenres", "movieTheaters"],
        });
    }
    async findAll() {
        return this.movieRepository.find({
            relations: ["movieGenres", "movieTheaters"],
        });
    }
    async update({ movieId, updateMovieInput }) {
        const updateMovie = await this.movieRepository.findOne({
            where: { id: movieId },
        });
        const result = this.movieRepository.save(Object.assign(Object.assign(Object.assign({}, updateMovie), { id: movieId }), updateMovieInput));
        return result;
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.Movie)),
    __param(1, (0, typeorm_1.InjectRepository)(movieGenre_entity_1.MovieGenre)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map