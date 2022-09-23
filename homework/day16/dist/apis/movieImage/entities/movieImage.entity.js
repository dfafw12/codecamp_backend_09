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
exports.MovieImage = void 0;
const movie_entity_1 = require("../../movies/entites/movie.entity");
const typeorm_1 = require("typeorm");
let MovieImage = class MovieImage {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], MovieImage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MovieImage.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], MovieImage.prototype, "isMain", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => movie_entity_1.Movie),
    __metadata("design:type", movie_entity_1.Movie)
], MovieImage.prototype, "movie", void 0);
MovieImage = __decorate([
    (0, typeorm_1.Entity)()
], MovieImage);
exports.MovieImage = MovieImage;
//# sourceMappingURL=movieImage.entity.js.map