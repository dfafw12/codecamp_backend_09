"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieUserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const iamport_service_1 = require("../iamport/iamport.service");
const user_entity_1 = require("../users/entities/user.entity");
const movieUser_entity_1 = require("./entities/movieUser.entity");
const movieUser_resolver_1 = require("./movieUser.resolver");
const movieUser_service_1 = require("./movieUser.service");
let MovieUserModule = class MovieUserModule {
};
MovieUserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                movieUser_entity_1.MovieUser,
                user_entity_1.User,
            ]),
        ],
        providers: [
            iamport_service_1.IamportService,
            movieUser_service_1.MovieUserService,
            movieUser_resolver_1.MovieUserResolver,
        ],
    })
], MovieUserModule);
exports.MovieUserModule = MovieUserModule;
//# sourceMappingURL=movieUser.module.js.map