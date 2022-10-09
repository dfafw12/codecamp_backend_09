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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const createUser_input_1 = require("./dto/createUser.input");
const updateUser_input_1 = require("./dto/updateUser.input");
const user_entity_1 = require("./entities/user.entity");
const user_service_1 = require("./user.service");
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../../commons/auth/gql-auth.guard");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(createUserInput) {
        const hashedPassword = await bcrypt.hash(createUserInput.password, 10);
        return this.userService.create({ createUserInput, hashedPassword });
    }
    async updateUserPwd(context, updateUserInput) {
        return await this.userService.updatePassword({
            updateUserInput,
            userEmail: context.req.user.email,
            password: await bcrypt.hash(updateUserInput.password, 10),
        });
    }
    deleteLoginUser(context) {
        const userEmail = context.req.user.email;
        return this.userService.delete({ userEmail });
    }
    fetchUsers() {
        return this.userService.findAll();
    }
    fetchLoginUser(context) {
        console.log(context.req.user, "!!!!!!!!!!!!");
        return this.userService.findOne({ userEmail: context.req.user.email });
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)({ name: "createUserInput", nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_input_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthAccessGuard),
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Args)("updateUserInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, updateUser_input_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserPwd", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthAccessGuard),
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "deleteLoginUser", null);
__decorate([
    (0, graphql_1.Query)(() => [user_entity_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "fetchUsers", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthAccessGuard),
    (0, graphql_1.Query)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "fetchLoginUser", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map