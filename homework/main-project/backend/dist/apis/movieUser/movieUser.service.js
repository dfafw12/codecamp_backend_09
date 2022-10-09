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
exports.MovieUserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const movieUser_entity_1 = require("./entities/movieUser.entity");
let MovieUserService = class MovieUserService {
    constructor(movieUserRepository, userRepository, dataSource) {
        this.movieUserRepository = movieUserRepository;
        this.userRepository = userRepository;
        this.dataSource = dataSource;
    }
    async create({ impUid, amount, user: _user, isPayment = movieUser_entity_1.MOVIE_USER_ISPAYMENT_ENUM.PAYMENT, }) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction("SERIALIZABLE");
        try {
            const movieUser = this.movieUserRepository.create({
                impUid: impUid,
                amount: amount,
                user: _user,
                isPayment,
            });
            queryRunner.manager.save(movieUser);
            const user = await queryRunner.manager.findOne(user_entity_1.User, {
                where: {
                    id: _user.id,
                },
                lock: { mode: "pessimistic_write" },
            });
            const updateUser = this.userRepository.create(Object.assign(Object.assign({}, user), { point: user.point + amount }));
            await queryRunner.manager.save(updateUser);
            await queryRunner.commitTransaction();
            return movieUser;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
    async checkDuplicate({ impUid }) {
        const result = await this.movieUserRepository.findOne({
            where: { impUid },
        });
        if (result) {
            throw new common_1.UnprocessableEntityException("이미 결제된 내역");
        }
    }
    async findOne({ impUid }) {
        const result = await this.movieUserRepository.findOne({
            where: { impUid },
        });
        return result;
    }
    async cancel({ impUid, amount, user: _user, isPayment }) {
        console.log(-amount, ":cancel -amount");
        const movieUser = await this.create({
            impUid,
            amount: -amount,
            user: _user,
            isPayment: movieUser_entity_1.MOVIE_USER_ISPAYMENT_ENUM.CANCEL,
        });
        return movieUser;
    }
};
MovieUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movieUser_entity_1.MovieUser)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], MovieUserService);
exports.MovieUserService = MovieUserService;
//# sourceMappingURL=movieUser.service.js.map