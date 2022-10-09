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
exports.MovieUserResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const gql_auth_guard_1 = require("../../commons/auth/gql-auth.guard");
const iamport_service_1 = require("../iamport/iamport.service");
const movieUser_entity_1 = require("./entities/movieUser.entity");
const movieUser_service_1 = require("./movieUser.service");
let MovieUserResolver = class MovieUserResolver {
    constructor(movieUserService, iamportService) {
        this.movieUserService = movieUserService;
        this.iamportService = iamportService;
    }
    async createMovieUser(impUid, amount, context) {
        const movieUser = await this.movieUserService.findOne({ impUid });
        const token = await this.iamportService.getAccessToken();
        const userInfo = await this.iamportService.paymentInfo({
            impUid,
            amount,
            token,
        });
        const user = context.req.user;
        if (!movieUser) {
            console.log(movieUser, ": createMovieUser movieUser");
            return this.movieUserService.create({ impUid, amount, user });
        }
        else {
            throw new common_1.UnprocessableEntityException("이미 결제한 건.");
        }
    }
    async cancelMovieUser(impUid, amount, context) {
        const user = context.req.user;
        console.log(amount, ": cancelMovieUser Cancel");
        console.log(impUid, ": cancelMovieUser impUid");
        const token = await this.iamportService.getAccessToken();
        const cancelAmount = await this.iamportService.cancelPayment({
            impUid,
            amount,
            token,
        });
        console.log(cancelAmount, ":cancelMovieUser cancelAmount");
        return await this.movieUserService.cancel({
            impUid,
            amount,
            user,
            isPayment: movieUser_entity_1.MOVIE_USER_ISPAYMENT_ENUM.PAYMENT,
        });
    }
};
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthAccessGuard),
    (0, graphql_1.Mutation)(() => movieUser_entity_1.MovieUser),
    __param(0, (0, graphql_1.Args)("impUid")),
    __param(1, (0, graphql_1.Args)({ name: "amount", type: () => graphql_1.Int })),
    __param(2, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], MovieUserResolver.prototype, "createMovieUser", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthAccessGuard),
    (0, graphql_1.Mutation)(() => movieUser_entity_1.MovieUser),
    __param(0, (0, graphql_1.Args)("impUid")),
    __param(1, (0, graphql_1.Args)({ name: "amount", type: () => graphql_1.Int })),
    __param(2, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], MovieUserResolver.prototype, "cancelMovieUser", null);
MovieUserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [movieUser_service_1.MovieUserService,
        iamport_service_1.IamportService])
], MovieUserResolver);
exports.MovieUserResolver = MovieUserResolver;
//# sourceMappingURL=movieUser.resolver.js.map