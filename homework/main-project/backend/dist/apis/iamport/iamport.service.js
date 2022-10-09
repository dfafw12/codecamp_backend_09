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
exports.IamportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("axios");
require("dotenv/config");
const typeorm_2 = require("typeorm");
const movieUser_entity_1 = require("../movieUser/entities/movieUser.entity");
const user_entity_1 = require("../users/entities/user.entity");
let IamportService = class IamportService {
    constructor(movieUserRepository, userRepository) {
        this.movieUserRepository = movieUserRepository;
        this.userRepository = userRepository;
    }
    async getAccessToken() {
        const result = await (0, axios_1.default)({
            url: "https://api.iamport.kr/users/getToken",
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: {
                imp_key: process.env.IAMPORT_API_KEY,
                imp_secret: process.env.IAMPORT_API_SECRET,
            },
        });
        return result.data.response.access_token;
    }
    async paymentInfo({ impUid, amount, token }) {
        var _a, _b;
        try {
            const getPaymentInfo = await (0, axios_1.default)({
                url: `https://api.iamport.kr/payments/${impUid}`,
                method: "get",
                headers: { Authorization: token },
            });
            if (getPaymentInfo.data.response.status !== "paid") {
                throw new common_1.UnprocessableEntityException("결제 ㄴㄴ");
            }
            if (getPaymentInfo.data.response.amount !== amount) {
                throw new common_1.UnprocessableEntityException(" 금액 일치 ㄴㄴ");
            }
        }
        catch (error) {
            if ((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) {
                throw new common_1.HttpException(error.response.data.message, error.response.status);
            }
            else {
                throw error;
            }
        }
    }
    async cancelPayment({ impUid, amount, token }) {
        try {
            const getCancelInfo = await (0, axios_1.default)({
                url: "https://api.iamport.kr/payments/cancel/",
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                data: {
                    imp_uid: impUid,
                    amount,
                },
            });
            console.log(getCancelInfo, ": getCanceInfo");
            console.log(getCancelInfo.data.response.amount, ": getCancelInfo amount");
            console.log(getCancelInfo.data.response.imp_uid, ": getCancelInfo impUid");
            return getCancelInfo;
        }
        catch (error) {
            throw new common_1.HttpException(error.response.data.message, error.response.status);
        }
    }
};
IamportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movieUser_entity_1.MovieUser)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], IamportService);
exports.IamportService = IamportService;
//# sourceMappingURL=iamport.service.js.map